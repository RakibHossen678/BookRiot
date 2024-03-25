import Banner from "../Components/Banner";
import Books from "../Components/Books";

const Home = () => {
  return (
    <div className="pt-7">
      <Banner></Banner>
      <div>
        <Books></Books>
      </div>
    </div>
  );
};

export default Home;
