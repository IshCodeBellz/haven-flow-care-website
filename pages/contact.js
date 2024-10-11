import React from "react";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phonenumber: "",
    comments: "",
    newsletter: true,
    employment: "",
    favColor: "",
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
      <div className="relative w-full h-48 bg-panelBlue ">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-4xl">
            If you have any questions or would like more information, <br /> our
            advisors will be happy to help.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-20 bg-white">
        <div>
          <h1 className="pt-10 pl-8 pb-2 text-black text-5xl">Contact Us</h1>
          <p className="pl-8 text-lg pr-24">
            For all general inquiries call 07904 333 304 <br /> Or fill in our
            contact form:
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor={id + "-firstName"}>First Name</label>
            <br />
            <input
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
              type="phonenumber"
              onChange={handleChange}
              name="phonenumber"
              value={formData.phonenumber}
              id={id + "-phonenumber"}
            />
            <br />
            <input
              type="checkbox"
              id={id + "-newsletter"}
              checked={formData.newsletter}
              onChange={handleChange}
              name="newsletter"
            />
            <label htmlFor={id + "-newsletter"}>
              yes, subscribe me to your newsletter
            </label>
            <br />
            <label htmlFor={id + "-comments"}>Equiry</label>
            <br />
            <textarea
              value={formData.comments}
              onChange={handleChange}
              name="comments"
              id={id + "-comments"}
            />
            <br />
            <br />
            <button>Submit</button>
          </form>
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
    </>
  );
}
