import Image from "next/image";
import flyerImage from "../public/Nanny.png"; // Rename and move uploaded image to /public
import SEOHead from "../components/SEOHead";

export default function NannyServicesFlyer() {
  return (
    <>
      <SEOHead
        title="Ofsted Registered Nanny Services | Haven Flow"
        description="Explore our Ofsted-registered nanny placements for families in London. SEND-trained nannies, home-based care, and professional support."
        url="https://www.havenflow.co.uk/ofsted-nanny"
        image={undefined}
      />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg font-sans">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              OFSTED-REGISTERED NANNY SERVICES
            </h2>
            <p className="text-gray-700 mb-4">
              Trusted In-Home Childcare You Can Count On
            </p>

            {/* What We Offer */}
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-1">✔️ WHAT WE OFFER</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-800">
                <li>Ofsted Registered</li>
                <li>Enhanced DBS Checked</li>
                <li>Trained in Paediatric First Aid & Safeguarding</li>
                <li>
                  Experienced in working with children of all ages and needs
                </li>
                <li>Compassionate, reliable, and fully vetted</li>
              </ul>
            </div>

            {/* Services Include */}
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-1">📘 SERVICES INCLUDE</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-800">
                <li>Full-time or part-time nanny placements</li>
                <li>Emergency childcare cover</li>
                <li>Before and after-school care</li>
                <li>Holiday childcare</li>
                <li>Support for children with additional needs</li>
              </ul>
            </div>

            {/* Safety First */}
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-1">🛡️ SAFETY FIRST</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-800">
                <li>Full identity checks</li>
                <li>Reference verification</li>
                <li>Ongoing training and professional development</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-6">
            <div className="w-full">
              <Image
                src={flyerImage}
                alt="Nanny & child"
                className="rounded-lg"
              />
            </div>

            {/* How it works */}
            <div>
              <h3 className="font-bold text-lg mb-1">📞 HOW IT WORKS</h3>
              <p className="text-gray-800">
                Call us at <strong>07904 3333044</strong>
              </p>
              <p className="text-gray-800">
                Email:{" "}
                <a
                  className="text-blue-600 underline"
                  href="mailto:admin@havenflowcare.co.uk"
                >
                  admin@havenflowcare.co.uk
                </a>
              </p>
            </div>

            {/* Carer Section */}
            <div className="bg-dustyPink p-4 rounded-lg">
              <h3 className="font-bold text-md mb-2">
                🎓 ARE YOU A CARER LOOKING TO BECOME AN OFSTED-REGISTERED NANNY?
              </h3>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                <li>Professional training</li>
                <li>First Aid & Safeguarding certification</li>
                <li>DBS checks</li>
                <li>Guidance through the Ofsted registration process</li>
              </ul>
            </div>

            {/* Get in touch */}
            <div>
              <h3 className="font-bold text-lg mb-1">📞 GET IN TOUCH TODAY</h3>
              <p className="text-gray-800">
                Call us at <strong>07904 333304</strong>
              </p>
              <p className="text-gray-800">
                Email:{" "}
                <a
                  className="text-blue-600 underline"
                  href="mailto:admin@havenflowcare.co.uk"
                >
                  admin@havenflowcare.co.uk
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
