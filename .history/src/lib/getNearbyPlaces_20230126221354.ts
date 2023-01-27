import axios from "axios";

export const sendMail = async () => {
  const data = {
    email,
    subject,
    text
  };
  try {
    return await axios.post("/api/contact", data);
  } catch (error) {
    return error;
  }
};
