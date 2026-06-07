import { useQuery } from '@tanstack/react-query';
import { client } from '../sanity.client';
import { defineQuery } from 'groq';

const HERO_QUERY = defineQuery(`*[_type == "hero" && _id == "hero"][0]`);

// Hook to fetch the Hero section data
export const useHeroData = () => {
  return useQuery({
    queryKey: ['sanity', 'hero'],
    queryFn: async () => {
      const data = await client.fetch(HERO_QUERY);
      return data;
    },
  });
};

const HOW_WE_WORK_QUERY = defineQuery(`*[_type == "howWeWork" && _id == "howWeWork"][0]`);

// Hook to fetch the "How We Work" section data
export const useHowWeWorkData = () => {
  return useQuery({
    queryKey: ['sanity', 'howWeWork'],
    queryFn: async () => {
      const data = await client.fetch(HOW_WE_WORK_QUERY);
      return data;
    },
  });
};

const SERVICES_QUERY = defineQuery(`*[_type == "servicesSection" && _id == "servicesSection"][0]`);

export const useServicesData = () => {
  return useQuery({
    queryKey: ['sanity', 'servicesSection'],
    queryFn: async () => {
      const data = await client.fetch(SERVICES_QUERY);
      return data;
    },
  });
};

const ABOUT_US_QUERY = defineQuery(`*[_type == "aboutUs" && _id == "aboutUs"][0]`);

export const useAboutUsData = () => {
  return useQuery({
    queryKey: ['sanity', 'aboutUs'],
    queryFn: async () => {
      const data = await client.fetch(ABOUT_US_QUERY);
      return data;
    },
  });
};

const CONTACT_US_QUERY = defineQuery(`*[_type == "contactUs" && _id == "contactUs"][0]`);

export const useContactUsData = () => {
  return useQuery({
    queryKey: ['sanity', 'contactUs'],
    queryFn: async () => {
      const data = await client.fetch(CONTACT_US_QUERY);
      return data;
    },
  });
};

const NAVIGATION_QUERY = defineQuery(`*[_type == "navigation" && _id == "navigation"][0]`);

export const useNavigationData = () => {
  return useQuery({
    queryKey: ['sanity', 'navigation'],
    queryFn: async () => {
      const data = await client.fetch(NAVIGATION_QUERY);
      return data;
    },
  });
};

const FOOTER_QUERY = defineQuery(`*[_type == "footer" && _id == "footer"][0]`);

export const useFooterData = () => {
  return useQuery({
    queryKey: ['sanity', 'footer'],
    queryFn: async () => {
      const data = await client.fetch(FOOTER_QUERY);
      return data;
    },
  });
};

const ANNOUNCEMENT_BANNER_QUERY = defineQuery(`*[_type == "announcementBanner" && _id == "announcementBanner"][0]`);

export const useAnnouncementBannerData = () => {
  return useQuery({
    queryKey: ['sanity', 'announcementBanner'],
    queryFn: async () => {
      const data = await client.fetch(ANNOUNCEMENT_BANNER_QUERY);
      return data;
    },
  });
};

const FEATURED_PROJECTS_QUERY = defineQuery(`*[_type == "featuredProjects" && _id == "featuredProjects"][0]{
  ...,
  projects[]->{
    _id,
    title,
    briefDescription,
    mainImage {
      asset->{
        url
      }
    }
  }
}`);

export const useFeaturedProjectsData = () => {
  return useQuery({
    queryKey: ['sanity', 'featuredProjects'],
    queryFn: async () => {
      const data = await client.fetch(FEATURED_PROJECTS_QUERY);
      return data;
    },
  });
};

const PROJECTS_PAGE_QUERY = defineQuery(`*[_type == "projectsPage" && _id == "projectsPage"][0]{
  title,
  description,
  backgroundImage {
    asset->{
      url
    }
  }
}`);

export const useProjectsPageData = () => {
  return useQuery({
    queryKey: ['sanity', 'projectsPage'],
    queryFn: async () => {
      const data = await client.fetch(PROJECTS_PAGE_QUERY);
      return data;
    },
  });
};

const ALL_PROJECTS_QUERY = defineQuery(`*[_type == "project"] | order(_createdAt desc){
  _id,
  title,
  briefDescription,
  mainImage {
    asset->{
      url
    }
  }
}`);

export const useAllProjectsData = () => {
  return useQuery({
    queryKey: ['sanity', 'allProjects'],
    queryFn: async () => {
      const data = await client.fetch(ALL_PROJECTS_QUERY);
      return data;
    },
  });
};

const PROJECT_BY_ID_QUERY = defineQuery(`*[_type == "project" && _id == $id][0]{
  _id,
  title,
  briefDescription,
  fullDescription,
  mainImage {
    asset->{
      url
    }
  },
  images[] {
    asset->{
      url
    }
  }
}`);

export const useProjectById = (id: string | undefined) => {
  return useQuery({
    queryKey: ['sanity', 'project', id],
    queryFn: async () => {
      if (!id) return null;
      const data = await client.fetch(PROJECT_BY_ID_QUERY, { id });
      return data;
    },
    enabled: !!id,
  });
};