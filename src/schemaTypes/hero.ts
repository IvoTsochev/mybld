export default {
  name: 'hero',
  type: 'document',
  title: 'Hero Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The main headline. Use <br/> for line breaks if needed.',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button Text',
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'altText',
          type: 'string',
          title: 'Alt',
        },
      ],
    },
  ],
}
