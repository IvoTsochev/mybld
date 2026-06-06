// src/schemaTypes/contactUs.ts
export default {
  name: 'contactUs',
  type: 'document',
  title: 'Contact Us Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
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
