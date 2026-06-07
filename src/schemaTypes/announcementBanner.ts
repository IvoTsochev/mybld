// src/schemaTypes/announcementBanner.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'announcementBanner',
  type: 'document',
  title: 'Announcement Banner',
  fields: [
    defineField({
      name: 'enabled',
      type: 'boolean',
      title: 'Enabled',
      initialValue: true,
    }),
    defineField({
      name: 'badge',
      type: 'string',
      title: 'Badge Text',
      description: 'The short text in the white pill (e.g., "Варна, България").',
    }),
    defineField({
      name: 'message',
      type: 'text',
      title: 'Message',
      description: 'The main announcement message.',
    }),
    defineField({
      name: 'linkText',
      type: 'string',
      title: 'Link Text',
      description: 'The text for the button (e.g., "Свържете се с нас").',
    }),
    defineField({
      name: 'linkUrl',
      type: 'string',
      title: 'Link URL',
      description: 'The URL the button points to (e.g., "/#contacts").',
    }),
  ],
})
