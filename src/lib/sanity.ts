import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2024-06-07",
    useCdn: false,
    token: import.meta.env.VITE_SANITY_TOKEN
});