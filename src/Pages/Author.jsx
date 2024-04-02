import { Helmet } from "react-helmet-async";
import AuthorData from "../Components/AuthorData";

const Author = () => {
  return (
    <div>
      <Helmet>
        <title>BookRiot | Author</title>
      </Helmet>
      <div className="bg-gray-300 h-24 rounded-2xl flex justify-center items-center text-3xl font-semibold mt-7">
        Author
      </div>
      <AuthorData></AuthorData>
    </div>
  );
};

export default Author;
