import { insertEntry, getEntries } from "@/utils/entryManager"
import { authorizeAPIRequest, AuthorizeResponse } from "@/middlewares/api"

export async function GET() {
    try {
        // const { success, error }: AuthorizeResponse = await authorizeAPIRequest();
        // if (!success) {
        //     return Response.json({ error }, { status: 401 })
        // }

        const response = await getEntries()

        if (!response.success) {
            return Response.json({ error: response.error }, { status: 400 })
        }

        return Response.json({ data: response.data }, { status: 200 })
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}

export async function POST(request: Request) {
    try {
        // const { success, error }: AuthorizeResponse = await authorizeAPIRequest();
        // if (!success) {
        //     return Response.json({ error }, { status: 401 })
        // }

        const body: any = await request.formData();
        const response = await insertEntry({
            name: body.get("name"),
            email: body.get("email"),
            phone: body.get("phone"),
            branch: body.get("branch"),
            year: body.get("year"),
            skills: body.get("skills").split(",").map((skill: string) => skill.trim()),
            position: body.get("position"),
            reason: body.get("reason"),
            resume: body.get("resume")
        })

        if (!response.success) {
            console.log("error", response.error);
            return Response.json({ error: response.error }, { status: 400 })
        }
        return Response.json({ data: response.data }, { status: 201 })
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}