import sanityClient from "@sanity/client";
import imageUlrBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "3cledfo6",
  dataset: "production",
  apiVersion: "2022-07-24",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUlrBuilder(client);
export const urlFor = (source) => builder.image(source);
