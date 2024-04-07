import { ENTRY_BUCKET, ENTRY_TABLE } from "./config";
import db from "./db";

interface EntryData {
    name: string;
    email: string;
    phone: string;
    branch: string;
    year: string;
    skills: string[];
    position: string;
    reason: string;
    resume: string;
};

interface UserEntry {
    name: string;
    email: string;
    phone: string;
    branch: string;
    year: string;
    skills: string[];
    position: string;
    reason: string;
    resume: File;
};

interface NewResumeResponse {
    success: boolean;
    url?: string;
    issue?: string;
}

interface NewEntryResponse {
    success: boolean;
    data?: string;
    error?: string;
}

interface GetResponse {
    success: boolean;
    data?: UserEntry[];
    error?: string;
}


// Define the function that will be used to query the database.

const insertResume = async (resume: File, file: string): Promise<NewResumeResponse> => {
    try {
        const { data: uploadData, error } = await db.storage.from(ENTRY_BUCKET).upload(`${file}.pdf`, resume);
        if (error) {
            console.error(error);
            return { success: false, issue: error?.message };
        }
        const { data: getUrlData } = db.storage.from(ENTRY_BUCKET).getPublicUrl(uploadData.path);
        return { success: true, url: getUrlData.publicUrl };
    } catch (error: any) {
        console.log('Error in uploading resume', error);
        return { success: false, issue: error as string };
    }
}

export const insertEntry = async (entry: UserEntry): Promise<NewEntryResponse> => {
    try {
        const info: EntryData = {
            name: entry.name,
            email: entry.email,
            phone: entry.phone,
            branch: entry.branch,
            year: entry.year,
            skills: entry.skills,
            position: entry.position,
            reason: entry.reason,
            resume: ""
        }
        const { data, error } = await db.from(ENTRY_TABLE).insert(info);
        if (error) {
            console.error(error);
            if (error.message === 'duplicate key value violates unique constraint "entries_email_key"') {
                return { success: false, error: "Email already exists..." };
            } else if (error.message === 'duplicate key value violates unique constraint "entries_phone_key"') {
                return { success: false, error: "Phone number already exists..." };
            } else {
                console.log(error.message);
                return { success: false, error: error.message };
            };
        }
        const { success, url, issue } = await insertResume(entry.resume, entry.phone);
        if (!success) {
            console.error(issue);
            return { success: false, error: issue };
        }
        const { error: updateError } = await db.from(ENTRY_TABLE).update({ resume: url }).match({ phone: entry.phone });
        if (updateError) {
            console.error(updateError);
            return { success: false, error: updateError?.message };
        }
        return { success: true, data: data?.[0] };
    } catch (error) {
        console.log(error);
        return { success: false, error: error as string };
    }
};

export const getEntries = async (): Promise<GetResponse> => {
    try {
        const { data, error } = await db.from(ENTRY_TABLE).select("*");
        if (error) {
            return { success: false, error: "Unable to fetch entries..." };
        }
        return { success: true, data: data };
    } catch (error) {
        return { success: false, error: "Unable to fetch entries..." };
    }
};

// export const deleteQuery = async (id: number): Promise<DeleteResponse> => {
//     try {
//         const { error } = await db.from(ENTRY_TABLE).delete().match({ id: id });
//         if (error) {
//             return { success: false, error: error.message };
//         }
//         return { success: true };
//     } catch (error) {
//         return { success: false, error: error as string };
//     }
// };

// export const updateStatus = async (id: number, status: string): Promise<DeleteResponse> => {
//     try {
//         const { error } = await db.from(ENTRY_TABLE).update({ status: status }).match({ id: id });
//         if (error) {
//             return { success: false, error: error.message };
//         }
//         return { success: true };
//     } catch (error) {
//         return { success: false, error: error as string };
//     }
// }