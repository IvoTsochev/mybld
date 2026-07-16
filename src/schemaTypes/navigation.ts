import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'navigation',
  type: 'document',
  title: 'Navigation',
  fields: [
    defineField({
      name: 'menuItems',
      type: 'array',
      title: 'Menu Items',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              title: 'Name',
            }),
            defineField({
              name: 'nameEn',
              type: 'string',
              title: 'Name (English)',
              description: 'Optional — falls back to the Bulgarian name if left empty.',
            }),
            defineField({
              name: 'nameRu',
              type: 'string',
              title: 'Name (Russian)',
              description: 'Optional — falls back to the Bulgarian name if left empty.',
            }),
            defineField({
              name: 'link',
              type: 'string',
              title: 'Link',
              description: 'URL path (e.g. /projects) or anchor (e.g. #contacts). Shared across all languages.',
            }),
          ],
          preview: {
            select: { title: 'name', subtitle: 'link' },
          },
        },
      ],
    }),
  ],
})
