import type { StructureResolver } from 'sanity/structure'

const homePageSections = [
  { type: 'hero', title: 'Hero Section' },
  { type: 'howWeWork', title: 'How We Work Section' },
  { type: 'servicesSection', title: 'Services Section' },
  { type: 'aboutUs', title: 'About Us Section' },
  { type: 'contactUs', title: 'Contact Us Section' },
  { type: 'featuredProjects', title: 'Featured Projects Section' },
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
        .title('Projects Page')
        .child(
          S.document()
            .schemaType('projectsPage')
            .documentId('projectsPage')
            .title('Projects Page'),
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
      S.listItem()
        .title('Announcement Banner')
        .child(
          S.document()
            .schemaType('announcementBanner')
            .documentId('announcementBanner')
            .title('Announcement Banner'),
        ),
      // When the project schema is added, uncomment:
      S.documentTypeListItem('project').title('Projects'),
    ])
