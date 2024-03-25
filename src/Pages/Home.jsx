import Banner from "../Components/Banner";
import Books from "../Components/Books";

const Home = () => {
  return (
    <div className="pt-7">
      <Banner></Banner>
      <div className="py-24">
        <Books></Books>
      </div>
    </div>
  );
};

export default Home;
