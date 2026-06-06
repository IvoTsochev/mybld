// src/schemaTypes/aboutUs.ts
export default {
  name: 'aboutUs',
  type: 'document',
  title: 'About Us Section',
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
      name: 'description',
      type: 'text',
      title: 'Description',
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
