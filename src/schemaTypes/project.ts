import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  groups: [
    { name: 'bg', title: 'Bulgarian (Default)', default: true },
    { name: 'en', title: 'English' },
    { name: 'ru', title: 'Russian' },
    { name: 'media', title: 'Media' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'bg',
    }),
    defineField({
      name: 'titleEn',
      title: 'Title (English)',
      description: 'Optional — falls back to the Bulgarian title if left empty.',
      type: 'string',
      group: 'en',
    }),
    defineField({
      name: 'titleRu',
      title: 'Title (Russian)',
      description: 'Optional — falls back to the Bulgarian title if left empty.',
      type: 'string',
      group: 'ru',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      description: 'Shared across all languages.',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
      group: 'media',
    }),
    defineField({
      name: 'briefDescription',
      title: 'Brief Description',
      description: 'A short description used for project cards.',
      type: 'text',
      validation: (rule) => rule.required(),
      group: 'bg',
    }),
    defineField({
      name: 'briefDescriptionEn',
      title: 'Brief Description (English)',
      description: 'Optional — falls back to the Bulgarian brief description if left empty.',
      type: 'text',
      group: 'en',
    }),
    defineField({
      name: 'briefDescriptionRu',
      title: 'Brief Description (Russian)',
      description: 'Optional — falls back to the Bulgarian brief description if left empty.',
      type: 'text',
      group: 'ru',
    }),
    defineField({
      name: 'images',
      title: 'Project Images',
      description: 'Multiple images for the property/project gallery. Shared across all languages.',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      group: 'media',
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      description: 'A more detailed description for the project details page.',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'bg',
    }),
    defineField({
      name: 'fullDescriptionEn',
      title: 'Full Description (English)',
      description: 'Optional — falls back to the Bulgarian full description if left empty.',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'en',
    }),
    defineField({
      name: 'fullDescriptionRu',
      title: 'Full Description (Russian)',
      description: 'Optional — falls back to the Bulgarian full description if left empty.',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'ru',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'briefDescription'
    }
  }
})
