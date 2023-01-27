import axios from "axios";

export const sendMail = async ({email, subject, text}: sendMailProps) => {
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
