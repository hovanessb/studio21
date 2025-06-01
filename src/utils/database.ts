import { defineAction ,ActionError } from 'astro:actions';
import { z } from 'astro:schema';

import { createClient } from '@supabase/supabase-js'
const supabase = createClient(import.meta.env.SUPABASE_URL, import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export const server = {
  upsertCustomer: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string(),
      phone: z.string(),
      email: z.string(),
      message: z.string(),
    }),

    handler: async ({name ,
                    phone ,
                    email ,
                    message}, result) => {
                      
            }
  })
} 