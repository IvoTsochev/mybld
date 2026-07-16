// src/schemaTypes/contactUs.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contactUs',
  type: 'document',
  title: 'Contact Us Section',
  groups: [
    { name: 'bg', title: 'Bulgarian (Default)', default: true },
    { name: 'en', title: 'English' },
    { name: 'ru', title: 'Russian' },
    { name: 'other', title: 'Image & Contact Info' },
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
    defineField({ name: 'description', type: 'text', title: 'Description', group: 'bg' }),
    defineField({
      name: 'descriptionEn',
      type: 'text',
      title: 'Description (English)',
      description: 'Optional — falls back to the Bulgarian description if left empty.',
      group: 'en',
    }),
    defineField({
      name: 'descriptionRu',
      type: 'text',
      title: 'Description (Russian)',
      description: 'Optional — falls back to the Bulgarian description if left empty.',
      group: 'ru',
    }),
    defineField({
      name: 'phone',
      type: 'string',
      title: 'Phone',
      description: 'Shared across all languages.',
      group: 'other',
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
      description: 'Shared across all languages.',
      group: 'other',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'Shared across all languages.',
      options: {
        hotspot: true,
      },
      group: 'other',
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
