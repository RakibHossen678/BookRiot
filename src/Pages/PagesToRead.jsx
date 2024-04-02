import { Helmet } from "react-helmet-async";
import Chart from "../Components/Chart";

const PagesToRead = () => {
  return (
    <div>
      <Helmet>
        <title>BookRiot | Pages to Read</title>
      </Helmet>
      <Chart></Chart>
    </div>
  );
};

export default PagesToRead;
