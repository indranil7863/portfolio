import { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
    title: " Contacts"
}

function page() {
  return <ContactPage />
}

export default page;
