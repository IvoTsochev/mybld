import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'featuredProjects',
  title: 'Featured Projects Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      description: 'Select up to 3 projects to feature on the home page.',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
      validation: (rule) => rule.max(3),
    }),
  ],
})
