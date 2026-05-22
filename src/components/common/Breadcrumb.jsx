// components/Common/Breadcrumb.jsx
import { Link } from "react-router-dom";

const Breadcrumb = ({ items = [] }) => {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs tracking-[3px] uppercase text-gray-500 mb-6">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center gap-2">
            {item.path && !isLast ? (
              <Link
                to={item.path}
                className="hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-black font-medium" : ""}>
                {item.label}
              </span>
            )}

            {!isLast && <span>/</span>}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
