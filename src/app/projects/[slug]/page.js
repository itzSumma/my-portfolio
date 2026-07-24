import { notFound } from "next/navigation";
import ProjectDetailsView from "@/components/ProjectDetailsView";
import { getProjectBySlug } from "@/data/projects";

export const metadata = {
  title: "Project Details | Sharmin Sultana Summa",
};

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-white px-6 md:px-24 py-24">
      <div className="max-w-5xl mx-auto">
        <ProjectDetailsView project={project} />
      </div>
    </main>
  );
}
