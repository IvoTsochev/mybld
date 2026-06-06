export default {
  name: 'navigation',
  type: 'document',
  title: 'Navigation',
  fields: [
    {
      name: 'menuItems',
      type: 'array',
      title: 'Menu Items',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Name',
            },
            {
              name: 'link',
              type: 'string',
              title: 'Link',
              description: 'URL path (e.g. /projects) or anchor (e.g. #contacts)',
            },
          ],
        },
      ],
    },
  ],
}
