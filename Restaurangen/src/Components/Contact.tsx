import {  ContactUs } from "./ContactEmail";
import { ContactInformations } from "./ContactInformations";
import { BookingSection } from "./style/BookingStyle";
import { BookingWrapper } from "./style/Wrappers";


export const Contact = () => {
  


  return (<>
  <BookingSection>
    <BookingWrapper>
      <ContactInformations />
      <ContactUs />
    </BookingWrapper>
  </BookingSection>
  </>
  )
 
};
