import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../style";
import CtaBg from "../assets/ctaBg.jpg";

const CTA = () => {
  // 1️⃣ Create a form reference
  const formRef = useRef();

  // 2️⃣ Handle send email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",     // <-- Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID",    // <-- Replace with your Template ID
        formRef.current,       // This references your actual <form>
        "YOUR_PUBLIC_KEY"      // <-- Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("✅ Email sent successfully!", result.text);
          alert("Your message has been sent! 💛");
          e.target.reset();
        },
        (error) => {
          console.log("❌ Error sending email:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  // 3️⃣ Return JSX
  return (
    <section
      id="contact"
      className={`${styles.flexCenter} flex-col md:flex-row justify-between items-center text-center md:text-left 
      rounded-[24px] px-6 sm:px-12 py-10 sm:py-14 md:py-16 mt-10 sm:mt-24 md:mt-36 
      relative overflow-hidden`}
      style={{
        backgroundImage: `url(${CtaBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-[0]" />

      {/* Left Text Section */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start relative z-[1] mb-10 md:mb-0">
        <h2 className="font-poppins font-semibold text-[34px] sm:text-[48px] leading-[1.2] text-white mb-4 sm:mb-6">
          Join{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
            MoonBank
          </span>{" "}
          <br className="sm:block hidden" />
          and take control of your finances.
        </h2>

        <p className="font-poppins font-normal text-[16px] sm:text-[18px] leading-[30px] text-white/80 max-w-[470px]">
          Open an account or get in touch with our advisors. Experience smarter
          banking that’s secure, simple, and built for you.
        </p>
      </div>

      {/* Right Contact Form */}
      <div className="flex-1 w-full max-w-[480px] bg-white/10 backdrop-blur-md border border-white/20 rounded-[20px] p-6 sm:p-8 relative z-[1]">
        <h3 className="text-white font-poppins font-semibold text-[22px] mb-5">
          Get Started Today
        </h3>

        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              required
              className="flex-1 py-3 px-4 rounded-[12px] bg-white/10 border border-white/20 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
              className="flex-1 py-3 px-4 rounded-[12px] bg-white/10 border border-white/20 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="py-3 px-4 rounded-[12px] bg-white/10 border border-white/20 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="py-3 px-4 rounded-[12px] bg-white/10 border border-white/20 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-yellow-400"
          />

          <textarea
            name="message"
            placeholder="Your message"
            rows="3"
            className="py-3 px-4 rounded-[12px] bg-white/10 border border-white/20 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-yellow-400"
          ></textarea>

          <button
            type="submit"
            className="w-full py-4 px-6 font-poppins font-medium text-[18px] text-black 
            bg-gradient-to-r from-[#b46123] to-[#faefa1] 
            rounded-[10px] shadow-md hover:shadow-yellow-400/20 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTA;
