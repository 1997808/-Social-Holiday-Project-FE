import { Link } from "react-router-dom";

export const SidebarLink = ({ Icon, text, link, active }) => {
  return (
    <Link to={link ? link : "/"}>
      <div
        className={`flex items-center justify-center xl:justify-start text-lg space-x-3 hoverAnimation ${
          active && "font-bold"
        }`}
      >
        <Icon className="h-7 text-gray-600" />
        <span className="hidden xl:inline">{text}</span>
      </div>
    </Link>
  );
};
