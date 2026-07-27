import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    emailjs
      .sendForm(
        "service_ysdlxtx",
        "template_5kje48m",
        form.current,
        "1_fwu71okSt5nNiF0"
      )
      .then(() => {
        setLoading(false);
        setMessage("✅ Message sent successfully!");

        form.current.reset();
      })
      .catch(() => {
        setLoading(false);
        setMessage("❌ Failed to send message. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Let's Work Together
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto rounded-full mt-6"></div>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            I'm currently open to internships, freelance opportunities,
            collaborations and exciting software development projects.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Contact Information */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-5">
                <FaEnvelope className="text-cyan-400 text-3xl" />

                <div>
                  <h3 className="font-bold text-xl">
                    Email
                  </h3>

                  <p className="text-slate-400">
                    hillarymugo04@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-5">
                <FaPhoneAlt className="text-cyan-400 text-3xl" />

                <div>
                  <h3 className="font-bold text-xl">
                    Phone
                  </h3>

                  <p className="text-slate-400">
                    +254 115 632 367
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-5">
                <FaMapMarkerAlt className="text-cyan-400 text-3xl" />

                <div>
                  <h3 className="font-bold text-xl">
                    Location
                  </h3>

                  <p className="text-slate-400">
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">

              <a
                href="https://github.com/MUGOHILLARY"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/hillary-kuria"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* Contact Form */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 rounded-3xl border border-slate-800 space-y-5"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              name="reply_to"
              placeholder="Your Email"
              required
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 outline-none resize-none focus:border-cyan-400"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-500 hover:bg-cyan-600 transition py-4 rounded-xl font-bold"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {message && (
              <p className="text-center font-semibold mt-4">
                {message}
              </p>
            )}

          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default Contact;