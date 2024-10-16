import AboutUs from "@/components/AboutUs";
import { createClient } from "contentful";
import Staff from "@/components/Staff";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});
export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "aboutUs",
  });

  const staff = await client.getEntries({
    content_type: "staff",
    order: "sys.createdAt",
  });


  return {
    props: {
      aboutUs: res.items,
      people: staff.items
      
    },
    revalidate: 10,
  };
}

export default function About({ aboutUs, people }) {
  console.log(aboutUs);
  return (
    <div className="bg-white">
      <div>
        {aboutUs.map((main) => (
          <AboutUs key={main.sys.id} main={main} />
        ))}
      </div>
      <h1 className="text-3xl lg:text-4xl text-center lg:text-left py-4 lg:ml-4">Meet The Team</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 pb-10 gap-4">
          {people.map((person) => (
            <Staff key={person.sys.id} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
}
