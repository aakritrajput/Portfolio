import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const formRef = useRef(); 
  const recaptchaRef = useRef(); 
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      alert("Please verify that you are not a robot.");
      return;
    }
    setLoading(true);
    
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Message sent successfully!");
          formRef.current.reset(); // Clearing form after success
          recaptchaRef.current.reset(); // Resetting reCAPTCHA
          setLoading(false);
        },
        (error) => {
          console.log("Failed:", error.text);
          alert("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent p-4 md:mt-2"> 
      <div className="max-w-2xl w-full bg-[#181818] shadow-lg shadow-[#6f4ba6] rounded-lg p-6 relative"> 
        {loading && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center rounded-lg">
            <div className="w-10 h-10 border-4 border-t-transparent border-[#6f4ba6] rounded-full animate-spin"></div>
          </div>
        )}
        <h2 className="text-3xl text-[#6f4ba6] font-bold mb-4">Contact Me</h2> 
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col space-y-4"> 
          <div className="flex flex-col"> 
            <label className="text-white mb-1" htmlFor="name">Name:</label> 
            <input type="text" name="name" placeholder="Your Name" required id="name" className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#6f4ba6]" /> 
          </div> 
          <div className="flex flex-col"> 
            <label className="text-white mb-1" htmlFor="email">Email:</label> 
            <input type="email" name="email" placeholder="Your Email" required id="email" className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#6f4ba6]" /> 
          </div> 
          <div className="flex flex-col"> 
            <label className="text-white mb-1" htmlFor="message">Message:</label> 
            <textarea name="message" placeholder="Your Message" required id="message" rows="4" className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#6f4ba6]"></textarea> 
          </div> 
          
          <ReCAPTCHA sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} ref={recaptchaRef} />
          
          <button type="submit" className="bg-[#6f4ba6] text-white p-2 rounded hover:bg-[#7051a0] transition duration-200" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button> 
        </form> 
      </div> 
    </div>
  );
};

export default Contact;
