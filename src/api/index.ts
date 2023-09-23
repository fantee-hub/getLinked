const contactUrl = "/hackathon/contact-form";
import httpService from "../axios";

export const submitContactForm = (data: any) => {
  return httpService.post(data);
};
