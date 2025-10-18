"use client";

import { useTranslation } from 'react-i18next';
import { MotionDiv } from '@/components/Motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Project One',
    image: 'https://via.placeholder.com/400x300',
    description: 'A brief description of the first project.',
    tools: ['Blender', 'Substance Painter'],
  },
  {
    title: 'Project Two',
    image: 'https://via.placeholder.com/400x300',
    description: 'A brief description of the second project.',
    tools: ['ZBrush', 'Unreal Engine'],
  },
  {
    title: 'Project Three',
    image: 'https://via.placeholder.com/400x300',
    description: 'A brief description of the third project.',
    tools: ['Maya', 'Photoshop'],
  },
    {
    title: 'Project Four',
    image: 'https://via.placeholder.com/400x300',
    description: 'A brief description of the fourth project.',
    tools: ['Blender', 'Photoshop'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-orbitron font-bold text-center text-accent-turquoise">
        {t('projects')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <MotionDiv
            key={index}
            className="bg-gray-900 rounded-lg overflow-hidden"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-orbitron font-bold text-accent-violet">{project.title}</h2>
              <p className="mt-2 text-gray-400 font-poppins">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}