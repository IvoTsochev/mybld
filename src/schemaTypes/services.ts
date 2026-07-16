import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'servicesSection',
  type: 'document',
  title: 'Services Section',
  groups: [
    { name: 'bg', title: 'Bulgarian (Default)', default: true },
    { name: 'en', title: 'English' },
    { name: 'ru', title: 'Russian' },
  ],
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title', group: 'bg' }),
    defineField({
      name: 'titleEn',
      type: 'string',
      title: 'Title (English)',
      description: 'Optional — falls back to the Bulgarian title if left empty.',
      group: 'en',
    }),
    defineField({
      name: 'titleRu',
      type: 'string',
      title: 'Title (Russian)',
      description: 'Optional — falls back to the Bulgarian title if left empty.',
      group: 'ru',
    }),
    defineField({
      name: 'servicesTypes',
      type: 'array',
      title: 'Services',
      group: 'bg',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'icon',
              type: 'image',
              title: 'Icon',
            }),
            defineField({ name: 'name', type: 'string', title: 'Name' }),
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
            defineField({ name: 'description', type: 'text', title: 'Description' }),
            defineField({
              name: 'descriptionEn',
              type: 'text',
              title: 'Description (English)',
              description: 'Optional — falls back to the Bulgarian description if left empty.',
            }),
            defineField({
              name: 'descriptionRu',
              type: 'text',
              title: 'Description (Russian)',
              description: 'Optional — falls back to the Bulgarian description if left empty.',
            }),
          ],
          preview: {
            select: { title: 'name', subtitle: 'description', media: 'icon' },
          },
        },
      ],
    }),
  ],
})
