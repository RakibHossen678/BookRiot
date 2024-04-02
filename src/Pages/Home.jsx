import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import Books from "../Components/Books";

const Home = () => {
  return (
    <div className="pt-7">
      <Helmet>
        <title>BookRiot | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="py-24">
        <Books></Books>
      </div>
    </div>
  );
};

export default Home;
