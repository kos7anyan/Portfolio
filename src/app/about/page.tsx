"use client";

import { useTranslation } from 'react-i18next';

const skills = ['Blender', 'ZBrush', 'Unreal', 'Substance', 'Maya'];

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-orbitron font-bold text-center text-accent-turquoise">
        {t('about_me')}
      </h1>
      <div className="mt-12 max-w-3xl mx-auto text-lg text-gray-300 font-poppins text-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="mt-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="text-center mt-12">
        <a
          href="/path/to/cv.pdf"
          download
          className="px-8 py-3 bg-accent-violet text-white font-bold rounded-full transition-transform hover:scale-105"
        >
          {t('download_cv')}
        </a>
      </div>
      <div className="mt-16">
        <h2 className="text-3xl font-orbitron font-bold text-center text-accent-violet">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full font-poppins"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}