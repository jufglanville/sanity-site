import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "yno2oiby",
  dataset: "production",
  apiVersion: "2023-08-17",
  useCdn: false,
};

const client = createClient(config);

export default client;