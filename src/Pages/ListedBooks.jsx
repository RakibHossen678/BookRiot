import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import ReadBook from "../Components/ReadBook";
import Wishlist from "../Components/Wishlist";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <Helmet>
        <title>BookRiot | Listed Books</title>
      </Helmet>
      <div className="bg-gray-300 h-20 my-7 flex justify-center items-center rounded-2xl ">
        <h1 className="text-3xl font-semibold">Books</h1>
      </div>
      <div className="mt-20">
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
    </div>
  );
};

export default ListedBooks;
