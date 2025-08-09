import { createClient } from "next-sanity";

const client = createClient({
  projectId: "vhuf26mt",
  dataset: "production",
  apiVersion: "2025-02-05",
  useCdn: false,
});

export default client;
