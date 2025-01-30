import Banner from "../Components/Banner";
import Heading from "../Components/Heading";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Heading
        title={"Browse Coffees by Category"}
        subTitle={"This is Subtitle"}
      ></Heading>
    </div>
  );
};

export default Home;
