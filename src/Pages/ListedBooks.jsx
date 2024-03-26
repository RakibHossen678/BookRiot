import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { RiArrowDropDownLine } from "react-icons/ri";

import "react-tabs/style/react-tabs.css";
import ReadBook from "../Components/ReadBook";
import Wishlist from "../Components/Wishlist";
const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <div className="bg-gray-300 h-20 my-7 flex justify-center items-center rounded-2xl">
        <h1 className="text-3xl font-semibold">Books</h1>
      </div>
      <div className="dropdown flex justify-center my-14">
        <div tabIndex={0} role="button" className="btn m-1 bg-green-500 text-lg text-white" >
        Sort By <RiArrowDropDownLine className="text-4xl font-medium" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <ReadBook></ReadBook>
        </TabPanel>
        <TabPanel>
          <Wishlist></Wishlist>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
