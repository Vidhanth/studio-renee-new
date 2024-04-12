import { fetchProject } from "@/sanity/sanity-utils";

type Props = {
  params: {
    project: string;
  };
};

export default async function Project({ params }: Props) {
  const slug = params.project;

  const project = await fetchProject(slug);

  return <div>{project?.name || ""}</div>;
}
