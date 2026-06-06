export default {
  name: 'servicesSection',
  type: 'document',
  title: 'Services Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'servicesTypes',
      type: 'array',
      title: 'Services',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              type: 'image',
              title: 'Icon',
            },
            { name: 'name', type: 'string', title: 'Name' },
            { name: 'description', type: 'text', title: 'Description' }
          ]
        }
      ]
    }
  ],
}
