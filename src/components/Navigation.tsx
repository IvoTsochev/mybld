import { Link } from 'react-router-dom';
import { useAnnouncementBannerData, useNavigationData } from '../hooks/useSanityData';

const toNavLink = (link: string) => (link.startsWith('#') ? `/${link}` : link);

export const Navigation = () => {
  const { data: navigationData } = useNavigationData();
  const { data: announcementBannerData } = useAnnouncementBannerData();

  return (
    <nav className={`absolute left-0 w-full z-50 flex flex-col md:flex-row justify-between items-center px-[5%] py-8 gap-4 md:gap-0 text-white font-sans ${announcementBannerData?.enabled ? 'top-24' : 'top-0'}`}>
      <div className="text-2xl font-bold tracking-wide">
        <Link to="/">MyBld</Link>
      </div>
      <ul className="flex list-none gap-8 m-0 p-0">
        {navigationData?.menuItems?.map((item) => (
          <li key={item._key}>
            <Link
              to={toNavLink(item.link)}
              className="text-[#e0e0e0] text-sm font-medium transition-colors duration-300 pb-1 hover:text-white hover:border-b-2 hover:border-[#ff7a59]/80"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
