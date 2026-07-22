import Link from 'next/link';
import { categories, HobbyCategory } from '@/lib/hobbies';

interface CategoryNavProps {
  activeCategory?: HobbyCategory;
}

export function CategoryNav({ activeCategory }: CategoryNavProps) {
  return (
    <nav className="flex flex-wrap items-center gap-2">
      <Link
        href="/"
        className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
          activeCategory === 'all'
            ? 'border-brand-500 bg-brand-500 text-white'
            : 'border-secondary-300 bg-white text-secondary-900 hover:border-brand-200'
        }`}
      >
        전체보기
      </Link>
      {categories
        .filter((category) => category.key !== 'all')
        .map((category) => (
          <Link
            key={category.key}
            href={`/category/${category.key}`}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              activeCategory === category.key
                ? 'border-brand-500 bg-brand-500 text-white'
                : 'border-secondary-300 bg-white text-secondary-900 hover:border-brand-200'
            }`}
          >
            {category.label}
          </Link>
        ))}
    </nav>
  );
}
