import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  type: 'document',
  title: 'Hero Section',
  groups: [
    { name: 'bg', title: 'Bulgarian (Default)', default: true },
    { name: 'en', title: 'English' },
    { name: 'ru', title: 'Russian' },
    { name: 'media', title: 'Media' },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The main headline. Use <br/> for line breaks if needed.',
      group: 'bg',
    }),
    defineField({
      name: 'titleEn',
      type: 'string',
      title: 'Title (English)',
      description: 'Optional — falls back to the Bulgarian title if left empty. Use <br/> for line breaks.',
      group: 'en',
    }),
    defineField({
      name: 'titleRu',
      type: 'string',
      title: 'Title (Russian)',
      description: 'Optional — falls back to the Bulgarian title if left empty. Use <br/> for line breaks.',
      group: 'ru',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      group: 'bg',
    }),
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
      name: 'buttonText',
      type: 'string',
      title: 'Button Text',
      group: 'bg',
    }),
    defineField({
      name: 'buttonTextEn',
      type: 'string',
      title: 'Button Text (English)',
      description: 'Optional — falls back to the Bulgarian button text if left empty.',
      group: 'en',
    }),
    defineField({
      name: 'buttonTextRu',
      type: 'string',
      title: 'Button Text (Russian)',
      description: 'Optional — falls back to the Bulgarian button text if left empty.',
      group: 'ru',
    }),
    defineField({
      name: 'backgroundImage',
      type: 'image',
      title: 'Image',
      description: 'Shared across all languages.',
      options: {
        hotspot: true,
      },
      group: 'media',
      fields: [
        defineField({
          name: 'altText',
          type: 'string',
          title: 'Alt',
        }),
      ],
    }),
  ],
})
