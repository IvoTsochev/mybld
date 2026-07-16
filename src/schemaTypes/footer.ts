// src/schemaTypes/footer.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'footer',
  type: 'document',
  title: 'Footer',
  fields: [
    defineField({
      name: 'copyright',
      type: 'string',
      title: 'Copyright',
    }),
    defineField({
      name: 'copyrightEn',
      type: 'string',
      title: 'Copyright (English)',
      description: 'Optional — falls back to the Bulgarian copyright text if left empty.',
    }),
    defineField({
      name: 'copyrightRu',
      type: 'string',
      title: 'Copyright (Russian)',
      description: 'Optional — falls back to the Bulgarian copyright text if left empty.',
    }),
  ],
})
