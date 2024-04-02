import { Link } from "react-router-dom";
import bannerImag from "../assets/book1.png";
const Banner = () => {
  return (
    <section className="bg-gray-100 rounded-lg  ">
      <div  className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="1000" className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-xl lg:text-left">
          <h1
            
            className="text-5xl font-bold leading-none sm:text-6xl mb-12"
          >
            Books to freshen up your bookshelf
          </h1>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              to="/list"
              className="relative inline-flex items-center justify-start px-7 py-4 overflow-hidden font-medium transition-all bg-[#23BE0A] rounded-xl group"
            >
              <span className="absolute top-0 right-0 inline-block w-54 h-4 transition-all duration-500 ease-in-out bg-[#23BE0A] rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-500 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white ">
                View The List
              </span>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 w-96">
          <img
            data-aos="zoom-in"
            data-aos-duration="2000"
            src={bannerImag}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
