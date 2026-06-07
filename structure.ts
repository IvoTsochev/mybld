import type { StructureResolver } from 'sanity/structure'

const homePageSections = [
  { type: 'hero', title: 'Hero Section' },
  { type: 'howWeWork', title: 'How We Work Section' },
  { type: 'servicesSection', title: 'Services Section' },
  { type: 'aboutUs', title: 'About Us Section' },
  { type: 'contactUs', title: 'Contact Us Section' },
] as const

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home Page')
        .child(
          S.list()
            .title('Home Page')
            .items(
              homePageSections.map(({ type, title }) =>
                S.listItem()
                  .title(title)
                  .child(
                    S.document()
                      .schemaType(type)
                      .documentId(type)
                      .title(title),
                  ),
              ),
            ),
        ),
      S.divider(),
      S.listItem()
        .title('Navigation')
        .child(
          S.document()
            .schemaType('navigation')
            .documentId('navigation')
            .title('Navigation'),
        ),
      S.listItem()
        .title('Footer')
        .child(
          S.document()
            .schemaType('footer')
            .documentId('footer')
            .title('Footer'),
        ),
      // When the project schema is added, uncomment:
      // S.documentTypeListItem('project').title('Projects'),
    ])
