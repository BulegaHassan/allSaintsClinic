import { Breadcrumb, ContactDetails, Map } from "../components";
const Contact = () => {
  return (
    <div>
      <Breadcrumb home='Home' currentPage='Contact' />
      <ContactDetails />
      <Map />
    </div>
  );
};
export default Contact;
