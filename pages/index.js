import Homepage from "../components/Homepage";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});
export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "homepage",
  });

  return {
    props: {
      homepage: res.items,
    },
    revalidate: 10,
  };
}

export default function Home({ homepage, aboutUs }) {
  return (
    <div>
      {homepage.map((main) => (
        <Homepage key={main.sys.id} main={main} />
      ))}
    </div>
  );
}
