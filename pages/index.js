import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  }
  )
};

export default function Home() {
  return (
    <div>
      <h1 className="text-green-500">Hello</h1>
    </div>
  );
}
