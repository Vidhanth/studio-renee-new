import { createClient } from "next-sanity";

const client = createClient({
  projectId: "vhuf26mt",
  dataset: "production",
  apiVersion: "2024-03-30",
});

export default client;
