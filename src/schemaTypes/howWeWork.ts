// src/schemaTypes/howWeWork.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'howWeWork',
  type: 'document',
  title: 'How We Work Section',
  groups: [
    { name: 'bg', title: 'Bulgarian (Default)', default: true },
    { name: 'en', title: 'English' },
    { name: 'ru', title: 'Russian' },
    { name: 'media', title: 'Media' },
  ],
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Section Title', group: 'bg' }),
    defineField({
      name: 'titleEn',
      type: 'string',
      title: 'Section Title (English)',
      description: 'Optional — falls back to the Bulgarian title if left empty.',
      group: 'en',
    }),
    defineField({
      name: 'titleRu',
      type: 'string',
      title: 'Section Title (Russian)',
      description: 'Optional — falls back to the Bulgarian title if left empty.',
      group: 'ru',
    }),
    defineField({ name: 'subtitle', type: 'string', title: 'Subtitle', group: 'bg' }),
    defineField({
      name: 'subtitleEn',
      type: 'string',
      title: 'Subtitle (English)',
      description: 'Optional — falls back to the Bulgarian subtitle if left empty.',
      group: 'en',
    }),
    defineField({
      name: 'subtitleRu',
      type: 'string',
      title: 'Subtitle (Russian)',
      description: 'Optional — falls back to the Bulgarian subtitle if left empty.',
      group: 'ru',
    }),
    defineField({
      name: 'steps',
      type: 'array',
      title: 'Work Steps',
      group: 'bg',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'stepDescription', type: 'text', title: 'Step Description' }),
            defineField({
              name: 'stepDescriptionEn',
              type: 'text',
              title: 'Step Description (English)',
              description: 'Optional — falls back to the Bulgarian step description if left empty.',
            }),
            defineField({
              name: 'stepDescriptionRu',
              type: 'text',
              title: 'Step Description (Russian)',
              description: 'Optional — falls back to the Bulgarian step description if left empty.',
            }),
          ],
          preview: {
            select: { title: 'stepDescription' },
          },
        },
      ],
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'Shared across all languages.',
      options: {
        hotspot: true,
      },
      group: 'media',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt',
        }),
      ],
    }),
  ],
})
