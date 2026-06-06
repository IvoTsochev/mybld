// Define a type that closely resembles what Sanity.io will return
export interface SanityProject {
  _id: string;
  title: string;
  subtitle: string;
  featured?: boolean;
  mainImage: {
    asset: {
      url: string;
    } | null;
  };
}

// Dummy data structured like a Sanity response
export const dummyProjects: SanityProject[] = [
  {
    _id: "proj-1",
    title: "Резиденция Витоша",
    subtitle: "Комплексно изграждане на луксозна еднофамилна къща",
    featured: true,
    mainImage: { asset: null },
  },
  {
    _id: "proj-2",
    title: "СПА Хотел Рила",
    subtitle: "Пълно реновиране и довършителни работи",
    featured: true,
    mainImage: { asset: null },
  },
  {
    _id: "proj-3",
    title: "Бизнес Център София",
    subtitle: "Изграждане на Ел. и ВиК инсталации",
    mainImage: { asset: null },
  },
  {
    _id: "proj-4",
    title: 'Жилищна сграда "Хармония"',
    subtitle: "Полагане на настилки и шпакловки на 5 етажа",
    mainImage: { asset: null },
  },
  {
    _id: "proj-5",
    title: 'Детски Лагер "Боровец"',
    subtitle: "Цялостен ремонт и модернизация",
    mainImage: { asset: null },
  },
  {
    _id: "proj-6",
    title: "Частен апартамент Изток",
    subtitle: "Мебели по поръчка и интериорен дизайн",
    featured: true,
    mainImage: { asset: null },
  },
];
