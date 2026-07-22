import { notFound } from 'next/navigation';
import { CategoryNav } from '@/components/category-nav';
import { categories, hobbies, HobbyCategory } from '@/lib/hobbies';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const validCategories = categories
  .filter((category) => category.key !== 'all')
  .map((category) => category.key);

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category as HobbyCategory;

  if (!validCategories.includes(category)) {
    return notFound();
  }

  const filteredHobbies = hobbies.filter((hobby) => hobby.category === category);
  const categoryLabel = categories.find((item) => item.key === category)?.label || '취미';

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-secondary-200 bg-brand-50 px-6 py-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
              HobbyFind
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-brand-900 sm:text-5xl">
              {categoryLabel} 취미 모아보기
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-secondary-700">
              {categoryLabel} 취미를 한 곳에 모아 확인할 수 있습니다.
            </p>
          </div>
          <CategoryNav activeCategory={category} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredHobbies.map((hobby) => (
            <Card key={hobby.id} className="overflow-hidden hover:-translate-y-1 transition-transform duration-200">
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={hobby.thumbnail}
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
    </main>
  );
}
