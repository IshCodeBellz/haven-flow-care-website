import React from "react";
import SEOHead from "../components/SEOHead";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phonenumber: "",
    comments: "",
    newsletter: true,
  });
  const [status, setStatus] = React.useState("");
  const id = React.useId();

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await fetch("https://formspree.io/f/xnnvkjwk", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (response.ok) {
        setStatus("Thank you! Your message has been sent.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phonenumber: "",
          comments: "",
          newsletter: true,
        });
      } else {
        setStatus("Oops! Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("Network error. Please try again later.");
    }
  }

  return (
    <>
      <SEOHead
        title="Contact Haven Flow | Enquiries & Support"
        description="Get in touch with Haven Flow for care and nanny services in London. Call, email, or submit an enquiry form today."
        url="https://www.havenflow.co.uk/contact"
        image="https://www.havenflow.co.uk/images/contact-og.jpg"
      />

      <div className="relative w-full h-36 lg:h-48 bg-panelBlue">
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="text-white text-xl lg:text-4xl px-6 lg:px-20 font-syne">
            If you have any questions or would like more information, our
            advisors will be happy to help.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 mx-auto lg:grid-cols-2 gap-20 bg-white font-syne text-lightBlack">
        <div className="lg:pl-12 text-sm">
          <h1 className="text-center lg:text-left pt-10 pb-2 text-5xl">
            Contact Us
          </h1>
          <p className="text-lg lg:text-xl text-center lg:text-left font-sans">
            For all general inquiries call{" "}
            <span className="font-bold font-sans">07904 333 304</span>
          </p>
          <p className="text-lg text-center lg:text-left">
            Or fill in our contact form:
          </p>
          <div className="pt-6 lg:pb-16 ">
            <form onSubmit={handleSubmit} className=" text-center lg:text-left">
              <label htmlFor={id + "-firstName"} className="!text-left">
                First Name
              </label>
              <br />
              <input
                className="p-2 mt-2 mb-4 border-black-500/50 border-2 focus:outline-none focus:border-sky-500/50  focus:ring-1 w-10/12"
                type="text"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                id={id + "-firstName"}
              />
              <br />
              <label htmlFor={id + "-lastName"}>Last Name</label>
              <br />
              <input
                className="p-2 mt-2 mb-4 border-black-500/50 border-2 focus:outline-none focus:border-sky-500/50  focus:ring-1 w-10/12"
                type="text"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                id={id + "-lastName"}
              />
              <br />
              <label htmlFor={id + "-email"}>Email</label>
              <br />
              <input
                className="p-2 mt-2 mb-4 border-black-500/50 border-2 focus:outline-none focus:border-sky-500/50  focus:ring-1 w-10/12"
                type="email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                id={id + "-email"}
              />
              <br />
              <label htmlFor={id + "-phonenumber"}>Phone</label>
              <br />
              <input
                className="p-2 mt-2 mb-4 border-black-500/50 border-2 focus:outline-none focus:border-sky-500/50  focus:ring-1 w-10/12"
                type="tel"
                onChange={handleChange}
                name="phonenumber"
                value={formData.phonenumber}
                id={id + "-phonenumber"}
              />
              <br />
              <label htmlFor={id + "-comments"}>Enquiry</label>
              <br />
              <textarea
                className="p-2 mt-2 mb-4 border-black-500/50 border-2 focus:outline-none focus:border-sky-500/50  focus:ring-1 w-10/12"
                value={formData.comments}
                onChange={handleChange}
                name="comments"
                id={id + "-comments"}
              />
              <br />
              <input
                className="mt-2 mb-4 indeterminate:bg-gray-300 checked:bg-slate-500"
                type="checkbox"
                id={id + "-newsletter"}
                checked={formData.newsletter}
                onChange={handleChange}
                name="newsletter"
              />
              <label htmlFor={id + "-newsletter"} className="pl-2">
                Yes, subscribe me to your newsletter.
              </label>
              <br />
              <br />
              <button className=" text-xl rounded bg-darkBlue w-10/12 p-2 pt-4 pb-4 text-white hover:bg-slate-700 ">
                Submit
              </button>
              {status && (
                <p className="text-sm text-green-700 mt-2">{status}</p>
              )}
            </form>
          </div>
        </div>
        <div className="lg:pt-24 text-center lg:text-left pb-7 -mt-10 lg:-mt-0">
          <p className="">
            We would be happy to discuss your needs <br />
            in person. We are located at:
          </p>
          <br />
          <p className="">
            84 Nightingale Road, Edmonton, <br />
            London, N9 8PU <br />
            admin@havenflowcare.co.uk
          </p>
        </div>
      </div>
      <div className="p-8 text-white bg-black w-full h-80 ">
        <div className="text-3xl lg:text-5xl p-4">Join Our Team</div>
        <div className="lg:text-3xl font-semibold p-4">
          We are always looking for dedicated individuals to join our broad team
          of home health care staff.
        </div>
        <div className="text-sm lg:text-base p-4">
          Send your CV to admin@havenflowcare.co.uk
        </div>
      </div>
    </>
  );
}
