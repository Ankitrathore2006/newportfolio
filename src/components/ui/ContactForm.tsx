import React from 'react'
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Z from "zod";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const contactFormSchema = Z.object({
  name: Z.string().nonempty("Name is required"),
  email: Z.string().email("Invalid email").nonempty("Email is required"),
  subject: Z.string().nonempty("Subject is required"),
  message: Z.string().nonempty("Message is required"),
});

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

type ContactFormData = Z.infer<typeof contactFormSchema>;

function ContactForm() {

      
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: initialValues,
    resolver: zodResolver(contactFormSchema),
  });

  // ✅ Submit Handler with EmailJS
  const onSubmit = async (data: ContactFormData) => {
    
    setLoading(true);
    try {
      const payload = {
        name: data.name,
        to_name: "Full Stack Developer",
        message: data.message,
        email: data.email,
        title: data.subject,
      };

      const serviceID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!;

      await emailjs.send(serviceID, templateID, payload, publicKey);



      toast.success("Thank you! Your submission has been received!");
      reset(initialValues);
    } catch (error) {
      toast.error("Failed to send message, please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
     <div className="form-block-charcoal dark-mode w-form">
        <Toaster />
              <form onSubmit={handleSubmit(onSubmit)} id="email-form" name="email-form" className="form">
                <div className="form-fields">
                  <input
                    className="form-field dark-mode w-input"
                     {...register("name")}
                    placeholder="Name"
                    type="text"
                    required
                  />
                  <input
                    className="form-field dark-mode w-input"
                    {...register("email")}
                    placeholder="Email"
                    type="email"
                    required
                  />
                  <input
                    className="form-field dark-mode w-input"
                   {...register("subject")}
                     placeholder="What’s this about?"
                    type="text"
                    required
                  />
                  <input
                    className="form-field dark-mode hcih w-input"
                    {...register("message")}  
                    placeholder="How Can I Help?"
                    type="text"
                    required
                  />
                </div>
                <button disabled={loading} type="submit" className="submit-button dark w-button">
                 {loading ? "Sending..." :  "Send"}
                </button>
              </form>
             
              <div className="error-message w-form-fail">
                <div className="text-block-3">
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>
              </div>
            </div>
  )
}

export default ContactForm;
