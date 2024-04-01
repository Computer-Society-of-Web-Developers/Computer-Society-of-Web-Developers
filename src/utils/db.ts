
import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Get the environment variables from the .env file
import { NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY } from './config'

// Create a single supabase client for interacting with your database
const db: SupabaseClient = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)

// Export the supabase client to be used in other parts of our code
export default db;