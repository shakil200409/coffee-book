import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import Heading from "../Components/Heading";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Heading
        title={"Browse Coffees by Category"}
        subTitle={"This is Subtitle"}
      ></Heading>
      {/* Categories */}
      <Categories categories={categories}></Categories>
      {/* Dynamic nested components */}
      <Outlet />
    </div>
  );
};

export default Home;
