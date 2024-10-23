import { useState } from "react";
import emailjs from "emailjs-com";

const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = () => {
    const serviceID = "service_lchbz9g";
    const templateID = "template_8q9s8dg";
    const userID = "Uq5p2tIWLUmdzCnef";

    const adminEmailParams = {
      to_name: "Reecocefe Team",
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      department_message: `${formData.message} - property details ${formData.details}`,
      to_email: [
        "vijaykr.04.mishra@gmail.com",
        "placementcgc22@gmail.com",
        // "pankaj.saini@reecocefe.in",
        // "ccc@astoundand.com",
        // "and.ccc2023@gmail.com",
      ],
    };

    const userEmailParams = {
      to_name: formData.name,
      from_name: "Reecocefe Infrastructure",
      to_email: formData.email,
      message: "Thankyou!, We will contect you soon..",
      regard: "Reecocefe Infrastructure",
      info: " more info contact us: business@reecocefe.com",
      web: "https://reecocefe.in/",
    };

    emailjs
      .send(serviceID, templateID, adminEmailParams, userID)
      .then((result) => {
        console.log("Admin email sent:", result.text);
        console.log("Admin:", adminEmailParams);
      })
      .catch((error) => {
        console.error("Error sending admin email:", error);
      });

    emailjs
      .send(serviceID, templateID, userEmailParams, userID)
      .then((result) => {
        console.log("User email sent:", result.text);
        console.log("User:", userEmailParams);
      })
      .catch((error) => {
        console.error("Error sending user email:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
    setFormData(initialValues);
    setIsSubmitted(true);
  };

  return { formData, isSubmitted, handleChange, handleSubmit };
};

export default useForm;
