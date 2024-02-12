import { z, defineCollection } from 'astro:content'

const toolCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        snippet: z.string(),
        link: z.string(),
        tags: z.array(z.string()),
        thumbnail: z.string().optional(),
        createdAt: z.date(),
        updatedAt: z.date().optional(),
        isPaid: z.boolean().optional(),
    })
})

export const collections = {
    'tools': toolCollection
};