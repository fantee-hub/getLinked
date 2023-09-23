import httpService from "../axios";
const contactUrl = "/hackathon/contact-form";
const registerUtl = "/hackathon/registration";
const categoryUrl = "/hackathon/categories-list";

export const submitContactForm = (data: any) => {
  return httpService.post(contactUrl, data);
};
export const register = (data: any) => {
  return httpService.post(registerUtl, data);
};
export const categoryList = () => {
  return httpService.get(categoryUrl);
};
