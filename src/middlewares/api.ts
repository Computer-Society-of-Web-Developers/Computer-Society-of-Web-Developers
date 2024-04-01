import { API_KEY, API_KEY_HEADER } from "@/utils/config";
import { headers } from "next/headers";

// Define the types that will be used in the functions of this module.

export interface AuthorizeResponse {
    success: boolean;
    error?: string;
}

// Define the function that will be used to authorize API requests.

export async function authorizeAPIRequest(): Promise<AuthorizeResponse> {
    const api_key = headers().get(API_KEY_HEADER);
    if (!api_key) return { success: false, error: "API key missing" };
    if (!API_KEY.includes(api_key)) {
        return { success: false, error: "Invalid API key" };
    } else {
        return { success: true };
    }
}

