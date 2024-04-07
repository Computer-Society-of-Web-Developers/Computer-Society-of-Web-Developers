import { NEXT_PUBLIC_API_KEY } from "@/utils/config";
import { headers } from "next/headers";

// Define the types that will be used in the functions of this module.

export interface AuthorizeResponse {
    success: boolean;
    error?: string;
}

// Define the function that will be used to authorize API requests.

export async function authorizeAPIRequest(api_key: string | null): Promise<AuthorizeResponse> {
    if (!api_key) return { success: false, error: "API key missing" };
    if (NEXT_PUBLIC_API_KEY !== api_key) {
        return { success: false, error: "Invalid API key" };
    } else {
        return { success: true };
    }
}

