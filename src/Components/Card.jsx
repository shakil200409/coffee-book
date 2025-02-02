import PropTypes from "prop-types";

const Card = ({ coffee }) => {
  const { name, image, popularity, rating, type, origin } = coffee;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Popularity: {popularity}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  coffee: PropTypes.object,
};
export default Card;
