import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeContainer = () => {
  const [coffees, setCoffees] = useState([]);
  const data = useLoaderData();
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      const filteredCoffees = [...data].filter(
        (coffee) => coffee.category === category
      );
      setCoffees(filteredCoffees);
    } else {
      setCoffees(data.slice(0, 6));
    }
  }, [data, category]);
  console.log(coffees);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
      <button
        onClick={() => navigate("/coffees")}
        className="btn btn-warning mt-5"
      >
        View All
      </button>
    </>
  );
};

export default CoffeeContainer;
