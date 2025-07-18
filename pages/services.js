import Services from "../components/Services";
import { createClient } from "contentful";
import ServiceType from "../components/ServiceType";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});
export async function getStaticProps() {
  const serv = await client.getEntries({
    content_type: "services",
  });

  const servtype = await client.getEntries({
    content_type: "serviceType",
    order: "sys.createdAt",
  });

  return {
    props: {
      services: serv.items,
      serviceType: servtype.items,
    },
    revalidate: 10,
  };
}

export default function services({ services, serviceType }) {
  return (
    <div className="bg-white">
      <div>
        {services.map((service) => (
          <Services key={service.sys.id} services={service} />
        ))}
      </div>

      <div className="lg:px-16 grid grid-cols-1 md:grid-cols-2">
        {serviceType.map((type) => (
          <div key={type.sys.id} className="p-4 rounded-lg shadow-lg m-4">
            <ServiceType serviceType={type} />
          </div>
        ))}
      </div>
    </div>
  );
}
