'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import { categories, hobbies, HobbyCategory } from '@/lib/hobbies';

const heroText = {
  title: 'HobbyFind',
  subtitle: '당신에게 딱 맞는 새로운 취미를 쉽게 찾아보세요.',
  description:
    '심플하고 편안한 탐색 경험으로 취미를 발견하고, 운동형/지능형/예술형 취미를 한눈에 확인하세요.',
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = React.useState<HobbyCategory>('all');

  const filteredHobbies = React.useMemo(
    () =>
      selectedCategory === 'all'
        ? hobbies
        : hobbies.filter((hobby) => hobby.category === selectedCategory),
    [selectedCategory],
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative overflow-hidden bg-brand-50 py-16"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="rounded-3xl border border-brand-200 bg-white/80 p-10 shadow-xl backdrop-blur-sm md:p-14">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
                  Discover your next hobby
                </p>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-brand-900 sm:text-5xl">
                  {heroText.title}
                </h1>
                <p className="mt-4 max-w-xl text-lg leading-8 text-muted-foreground">
                  {heroText.subtitle}
                </p>
                <p className="mt-4 max-w-xl text-base leading-7 text-secondary-700">
                  {heroText.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/category/sports" className="rounded-full bg-brand-500 px-6 py-3 text-white hover:bg-brand-600">
                    운동형 보기
                  </Link>
                  <Link href="/category/intellectual" className="rounded-full border border-secondary-300 bg-white px-6 py-3 text-secondary-900 hover:border-brand-200">
                    지능형 보기
                  </Link>
                  <Link href="/category/arts" className="rounded-full border border-secondary-300 bg-white px-6 py-3 text-secondary-900 hover:border-brand-200">
                    예술형 보기
                  </Link>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-brand-500 p-6 text-white shadow-lg">
                  <p className="text-sm uppercase tracking-[0.3em] opacity-80">추천 취미</p>
                  <p className="mt-3 text-3xl font-semibold">홈 요가</p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-brand-100">
                    부드러운 스트레칭과 호흡으로 몸과 마음의 균형을 맞춰보세요.
                  </p>
                </div>
                <div className="rounded-3xl bg-secondary-100 p-6 shadow-lg">
                  <p className="text-sm uppercase tracking-[0.3em] text-secondary-600">오늘의 추천</p>
                  <p className="mt-3 text-3xl font-semibold text-secondary-900">크리에이티브 라이팅</p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-secondary-700">
                    글로 생각을 정리하고 나만의 이야기를 만들어 보세요.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary-500">
              Browse by category
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
              취미 유형을 선택해보세요.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  selectedCategory === category.key
                    ? 'border-brand-500 bg-brand-500 text-white'
                    : 'border-secondary-300 bg-white text-secondary-900 hover:border-brand-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredHobbies.map((hobby) => (
            <Card key={hobby.id} className="overflow-hidden hover:-translate-y-1 transition-transform duration-200">
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={hobby.thumbnail || '/thumbnails/default.svg'}
                  alt={hobby.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{hobby.title}</CardTitle>
                <CardDescription>{hobby.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-secondary-100 px-3 py-1 text-xs font-semibold text-secondary-800">
                    {hobby.duration}
                  </span>
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                    {hobby.level}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-secondary-200 bg-secondary-50 p-10 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary-600">
            HobbyFind Experience
          </p>
          <h3 className="mt-5 text-3xl font-semibold tracking-tight text-foreground">
            취미 탐색이 더 쉬워집니다.
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-sm leading-7 text-secondary-700">
            HobbyFind는 누구나 쉽게 취미를 찾도록 디자인된 서비스입니다. 직관적인 탐색, 부드러운 인터랙션,
            그리고 취향에 맞춘 추천으로 새로운 취미를 만나보세요.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button className="rounded-full bg-brand-500 px-6 py-3 text-white hover:bg-brand-600">
              취미 시작하기
            </Button>
            <Button variant="outline" className="rounded-full border-secondary-300 px-6 py-3 text-secondary-900">
              더 알아보기
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
