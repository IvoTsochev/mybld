// src/schemaTypes/announcementBanner.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'announcementBanner',
  type: 'document',
  title: 'Announcement Banner',
  groups: [
    { name: 'bg', title: 'Bulgarian (Default)', default: true },
    { name: 'en', title: 'English' },
    { name: 'ru', title: 'Russian' },
    { name: 'settings', title: 'Settings' },
  ],
  fields: [
    defineField({
      name: 'enabled',
      type: 'boolean',
      title: 'Enabled',
      initialValue: true,
      group: 'settings',
    }),
    defineField({
      name: 'badge',
      type: 'string',
      title: 'Badge Text',
      description: 'The short text in the white pill (e.g., "Варна, България").',
      group: 'bg',
    }),
    defineField({
      name: 'badgeEn',
      type: 'string',
      title: 'Badge Text (English)',
      description: 'Optional — falls back to the Bulgarian badge text if left empty.',
      group: 'en',
    }),
    defineField({
      name: 'badgeRu',
      type: 'string',
      title: 'Badge Text (Russian)',
      description: 'Optional — falls back to the Bulgarian badge text if left empty.',
      group: 'ru',
    }),
    defineField({
      name: 'message',
      type: 'text',
      title: 'Message',
      description: 'The main announcement message.',
      group: 'bg',
    }),
    defineField({
      name: 'messageEn',
      type: 'text',
      title: 'Message (English)',
      description: 'Optional — falls back to the Bulgarian message if left empty.',
      group: 'en',
    }),
    defineField({
      name: 'messageRu',
      type: 'text',
      title: 'Message (Russian)',
      description: 'Optional — falls back to the Bulgarian message if left empty.',
      group: 'ru',
    }),
    defineField({
      name: 'linkText',
      type: 'string',
      title: 'Link Text',
      description: 'The text for the button (e.g., "Свържете се с нас").',
      group: 'bg',
    }),
    defineField({
      name: 'linkTextEn',
      type: 'string',
      title: 'Link Text (English)',
      description: 'Optional — falls back to the Bulgarian link text if left empty.',
      group: 'en',
    }),
    defineField({
      name: 'linkTextRu',
      type: 'string',
      title: 'Link Text (Russian)',
      description: 'Optional — falls back to the Bulgarian link text if left empty.',
      group: 'ru',
    }),
    defineField({
      name: 'linkUrl',
      type: 'string',
      title: 'Link URL',
      description: 'The URL the button points to (e.g., "/#contacts"). Shared across all languages.',
      group: 'settings',
    }),
  ],
})
