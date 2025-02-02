import PropTypes from "prop-types";

const Heading = ({ title, subTitle }) => {
  return (
    <div
      className="text-center space-y-6 py-10
     "
    >
      <h1 className="text-5xl">{title}</h1>
      <p className="text-gray-500">{subTitle}</p>
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default Heading;
