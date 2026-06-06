// src/schemaTypes/howWeWork.ts
export default {
  name: 'howWeWork',
  type: 'document',
  title: 'How We Work Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    },
    {
      name: 'steps',
      type: 'array',
      title: 'Work Steps',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'stepDescription', type: 'text', title: 'Step Description' }
          ]
        }
      ]
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt',
        },
      ],
    },
  ],
}
