import { useQuery } from '@tanstack/react-query';
import { client } from '../sanity.client';
import { defineQuery } from 'groq';

const HERO_QUERY = defineQuery(`*[_type == "hero"][0]`);

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

const HOW_WE_WORK_QUERY = defineQuery(`*[_type == "howWeWork"][0]`);

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

const SERVICES_QUERY = defineQuery(`*[_type == "servicesSection"][0]`);

export const useServicesData = () => {
  return useQuery({
    queryKey: ['sanity', 'servicesSection'],
    queryFn: async () => {
      const data = await client.fetch(SERVICES_QUERY);
      return data;
    },
  });
};

const ABOUT_US_QUERY = defineQuery(`*[_type == "aboutUs"][0]`);

export const useAboutUsData = () => {
  return useQuery({
    queryKey: ['sanity', 'aboutUs'],
    queryFn: async () => {
      const data = await client.fetch(ABOUT_US_QUERY);
      return data;
    },
  });
};

const CONTACT_US_QUERY = defineQuery(`*[_type == "contactUs"][0]`);

export const useContactUsData = () => {
  return useQuery({
    queryKey: ['sanity', 'contactUs'],
    queryFn: async () => {
      const data = await client.fetch(CONTACT_US_QUERY);
      return data;
    },
  });
};

const NAVIGATION_QUERY = defineQuery(`*[_type == "navigation"][0]`);

export const useNavigationData = () => {
  return useQuery({
    queryKey: ['sanity', 'navigation'],
    queryFn: async () => {
      const data = await client.fetch(NAVIGATION_QUERY);
      return data;
    },
  });
};

const FOOTER_QUERY = defineQuery(`*[_type == "footer"][0]`);

export const useFooterData = () => {
  return useQuery({
    queryKey: ['sanity', 'footer'],
    queryFn: async () => {
      const data = await client.fetch(FOOTER_QUERY);
      return data;
    },
  });
};