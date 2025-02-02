import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeContainer = () => {
  const [coffees, setCoffees] = useState([]);
  const data = useLoaderData();
  const { category } = useParams();

  useEffect(() => {
    const filteredCoffees = [...data].filter(
      (coffee) => coffee.category === category
    );
    setCoffees(filteredCoffees);
  }, [data, category]);
  console.log(coffees);
  return (
    <div>
      <h2>Category: {category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </div>
  );
};

export default CoffeeContainer;
