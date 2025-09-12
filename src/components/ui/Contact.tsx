"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Z from "zod";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";



// ✅ Validation Schema
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

export default function Contact({ id }: { id: string }) {

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
      console.error("FAILED...", error);
      toast.error("Failed to send message, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id={id}
      className="py-20 min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"
    >
      <Toaster />
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-xl fredericka md:text-5xl font-bold text-[#430f44]">
            Contact <span className="text-[#ff4c75]">Me</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 dark:text-gray-400 max-w-2xl mx-auto">
            Let’s connect! Whether you have a project in mind, a question, or
            just want to say hi, feel free to reach out.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-2xl relative z-1000 mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                Name
              </label>
              <input required
                {...register("name")}
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff4c75]"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                Email
              </label>
              <input required
                {...register("email")}
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff4c75]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
              Subject
            </label>
            <input required
              {...register("subject")}
              type="text"
              placeholder="What’s this about?"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff4c75]"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
            )}
          </div>

          {/* Message */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              required
              {...register("message")}
              rows={5}
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff4c75]"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Button */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex fredericka items-center gap-2 px-6 py-3 bg-[#430f44] text-white font-medium rounded-lg shadow-md hover:bg-[#ff4c75] transition duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : <> <Send size={18} opacity={0.7} /> Send Message </>}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
