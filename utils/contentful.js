import * as contentful from "contentful";

export const client = contentful.createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
});
