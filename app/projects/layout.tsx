import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of my real-world applications, showcasing my skills in building functional and visually appealing web solutions.',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

