import { Helmet } from "react-helmet-async";
import ContactCard from "../Components/ContactCard";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>BookRiot | Contact</title>
      </Helmet>
      <ContactCard></ContactCard>
    </div>
  );
};

export default Contact;
