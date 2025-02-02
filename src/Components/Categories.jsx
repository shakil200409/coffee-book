import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div role="tablist" className="tabs tabs-lift">
      {categories.map((category) => (
        <NavLink
          key={category.id}
          to={`/category/${category.category}`}
          role="tab"
          className={({ isActive }) =>
            `tab text-xl font-thin ${isActive ? "tab-active" : " "}`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
};
export default Categories;
