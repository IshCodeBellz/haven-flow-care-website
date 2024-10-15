import React from "react";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phonenumber: "",
    comments: "",
    newsletter: true,
  });

  const id = React.useId();

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <div className="relative w-full h-36 lg:h-48 bg-panelBlue ">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-xl lg:text-4xl px-6 lg:px-20 font-syne">
            If you have any questions or would like more information, our
            advisors will be happy to help.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 mx-auto lg:grid-cols-2 gap-20 bg-white">
        <div className="lg:pl-12 text-sm">
          <h1 className="text-center lg:text-left pt-10 pb-2 text-black text-5xl">Contact Us</h1>
          <p className="text-lg pr-24">
            For all general inquiries call 07904 333 304 <br /> Or fill in our
            contact form:
          </p>
          <div className=" pt-6 pb-16">
            <form onSubmit={handleSubmit}>
              <label htmlFor={id + "-firstName"}>First Name</label>
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
                type="phonenumber"
                onChange={handleChange}
                name="phonenumber"
                value={formData.phonenumber}
                id={id + "-phonenumber"}
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
              <label htmlFor={id + "-comments"}>Equiry</label>
              <br />
              <textarea
                className="p-2 mt-2 mb-4 border-black-500/50 border-2 focus:outline-none focus:border-sky-500/50  focus:ring-1 w-10/12"
                value={formData.comments}
                onChange={handleChange}
                name="comments"
                id={id + "-comments"}
              />
              <br />
              <br />
              <button className=" text-xl rounded bg-darkBlue w-10/12 p-2 pt-4 pb-4 text-white hover:bg-slate-700 ">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div>
          <p className="pt-24">
            We would be happy to discuss your needs <br />
            in person. We are located at:
          </p>
          <br />
          <p>
            84 Nightingale Road, Edmonton, <br />
            London, N9 8PU <br />
            admin@havenflowcare.co.uk
          </p>
        </div>
      </div>
      <div className="p-8 text-white bg-black w-full h-80 ">
        <div className="text-5xl p-4">Join Our Team</div>
        <div className="text-3xl font-semibold p-4">
          We are always looking for dedicated individuals to join our broad team
          of home health care staff.
        </div>
        <div className="text-s p-4">
          send you cv to admin@havenflowcare.co.uk
        </div>
      </div>
    </>
  );
}
