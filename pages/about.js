import AboutUs from "@/components/AboutUs";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});
export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "aboutUs",
  });

  return {
    props: {
      aboutUs: res.items,
    },
    revalidate: 10,
  };
}

export default function About({ aboutUs }) {
  console.log(aboutUs);
  return (
    <div>
      <div>
        {aboutUs.map((main) => (
          <AboutUs key={main.sys.id} main={main} />
        ))}
      </div>
    </div>
  );
}
