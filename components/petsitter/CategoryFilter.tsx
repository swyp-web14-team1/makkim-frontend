'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { AnimalCategory } from '@/lib/types/petsitter'

const CATEGORIES: AnimalCategory[] = ['전체', '강아지', '고양이', '새', '양서류', '파충류', '기타']

interface Props {
  selected: AnimalCategory
}

export default function CategoryFilter({ selected }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleChange = (category: AnimalCategory) => {
    const params = new URLSearchParams(searchParams.toString())
    if (category === '전체') {
      params.delete('category')
    } else {
      params.set('category', category)
    }
    params.set('page', '1')
    router.push(`/petsitter?${params.toString()}`)
  }

  return (
    <div className="flex items-center gap-5 overflow-x-auto ml-6 ">
      {CATEGORIES.map(category => (
        <button
          key={category}
          onClick={() => handleChange(category)}
          className={`px-2.5 py-2 text-[16px] font-semibold whitespace-nowrap transition-colors cursor-pointer ${
            selected === category ? 'text-black' : 'text-[#989898] hover:text-black'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
