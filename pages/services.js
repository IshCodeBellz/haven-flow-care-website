import Services from "@/components/Services";
import { createClient } from "contentful";
import ServiceType from "@/components/ServiceType";

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

export default function About({ services, serviceType }) {
  return (
    <div className="bg-white">
      <div>
        {services.map((services) => (
          <Services key={services.sys.id} services={services} />
        ))}
      </div>
      <div className="pl-16 pr-16 grid grid-cols-2">
        {serviceType.map((serviceType) => (
          <div className="p-4 flex items-center rounded-lg shadow-lg m-4">
            <ServiceType key={serviceType.sys.id} serviceType={serviceType} />
          </div>
        ))}
      </div>
    </div>
  );
}
