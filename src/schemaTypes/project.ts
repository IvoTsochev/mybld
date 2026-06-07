import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'briefDescription',
      title: 'Brief Description',
      description: 'A short description used for project cards.',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Project Images',
      description: 'Multiple images for the property/project gallery.',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      description: 'A more detailed description for the project details page.',
      type: 'array',
      of: [{ type: 'block' }],
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
