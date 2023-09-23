import httpService from "../axios";
const contactUrl = "/hackathon/contact-form";

export const submitContactForm = (data: any) => {
  return httpService.post(contactUrl, data);
};
