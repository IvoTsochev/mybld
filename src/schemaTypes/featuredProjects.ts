import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'featuredProjects',
  title: 'Featured Projects Section',
  type: 'document',
  groups: [
    { name: 'bg', title: 'Bulgarian (Default)', default: true },
    { name: 'en', title: 'English' },
    { name: 'ru', title: 'Russian' },
    { name: 'settings', title: 'Settings' },
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
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
      group: 'bg',
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Description (English)',
      description: 'Optional — falls back to the Bulgarian description if left empty.',
      type: 'text',
      group: 'en',
    }),
    defineField({
      name: 'descriptionRu',
      title: 'Description (Russian)',
      description: 'Optional — falls back to the Bulgarian description if left empty.',
      type: 'text',
      group: 'ru',
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      description: 'Select up to 3 projects to feature on the home page.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
      validation: (rule) => rule.max(3),
      group: 'settings',
    }),
  ],
})
