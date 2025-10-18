"use client";

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    slug: 'first-post',
    title: 'My First Blog Post',
    image: 'https://via.placeholder.com/800x400',
    preview: 'This is a preview of my first blog post. I will be sharing my thoughts on 3D art and design.',
  },
  {
    slug: 'second-post',
    title: 'The Art of ZBrush',
    image: 'https://via.placeholder.com/800x400',
    preview: 'In this post, I will dive into the details of sculpting in ZBrush and share some of my favorite techniques.',
  },
  {
    slug: 'third-post',
    title: 'Creating Worlds in Unreal Engine',
    image: 'https://via.placeholder.com/800x400',
    preview: 'Join me as I explore the process of building immersive worlds in Unreal Engine, from concept to completion.',
  },
];

export default function BlogPage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-orbitron font-bold text-center text-accent-turquoise">
        {t('blog')}
      </h1>
      <div className="mt-12 max-w-4xl mx-auto space-y-12">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block bg-gray-900 rounded-lg overflow-hidden transform hover:shadow-2xl hover:shadow-accent-violet/20 transition-shadow duration-300"
          >
            <Image src={post.image} alt={post.title} width={800} height={400} className="w-full h-64 object-cover" />
            <div className="p-8">
              <h2 className="text-3xl font-orbitron font-bold text-accent-violet">{post.title}</h2>
              <p className="mt-4 text-gray-400 font-poppins">{post.preview}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}