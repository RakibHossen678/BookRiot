import {useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBook from '../Components/ReadBook';
import Wishlist from '../Components/Wishlist';
const ListedBooks = () => {
   
    const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
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
