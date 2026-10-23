import { notFound } from 'next/navigation';
import { ProjectPage } from '@/components/pages/ProjectPage';
import { getProject, projects } from '@/content/projects';
import { pageMetadata } from '@/lib/metadata';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const p = getProject((await params).slug);
  if (!p) return {};
  return pageMetadata({ title: `${p.name}: ${p.title} (Studio Concept)`, description: p.seoDescription, path: `/work/${p.slug}` });
}

export default async function Page({ params }: Props) {
  const p = getProject((await params).slug);
  if (!p) notFound();
  return <ProjectPage project={p} />;
}
