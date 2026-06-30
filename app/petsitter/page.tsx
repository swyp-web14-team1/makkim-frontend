import { Suspense } from 'react'
import { getPetsitters } from '@/lib/api/petsitter'
import { AnimalCategory } from '@/lib/types/petsitter'
import PetsitterCard from '@/components/petsitter/PetsitterCard'
import SearchBar from '@/components/petsitter/SearchBar'
import CategoryFilter from '@/components/petsitter/CategoryFilter'
import Pagination from '@/components/petsitter/Pagination'

interface Props {
  searchParams: Promise<{ page?: string; category?: string; location?: string }>
}

export default async function PetsitterPage({ searchParams }: Props) {
  const params = await searchParams
  const page = Number(params.page) || 1
  const category = (params.category as AnimalCategory) || '전체'
  const location = params.location || '서울시 마포구'

  const { petsitters, totalPages, currentPage } = getPetsitters({ page, category, location, perPage: 6 })

  return (
    <div className="pt-18 min-h-screen bg-white">
      <div className="max-w-[1600px] w-full mx-auto px-8 lg:px-16">

        {/* 제목 */}
        <div className="pt-4 pb-1 flex gap-4">
          <h1 className="text-[32px] font-bold text-black leading-tight ml-7">펫시터 찾기</h1>
          <p className="text-[#989898] text-base font-medium mt-4">내 반려에게 딱 맞는 펫시터를 찾아보세요</p>
        </div>

        {/* 검색바 */}
        <div className="mt-6">
          <Suspense>
            <SearchBar location={location} />
          </Suspense>
        </div>

        {/* 카테고리 필터 */}
        <div className="mt-4.75">
          <Suspense>
            <CategoryFilter selected={category} />
          </Suspense>
        </div>

        {/* 카드 그리드 */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 content-start">
          {petsitters.length > 0 ? (
            petsitters.map(petsitter => (
              <PetsitterCard key={petsitter.id} petsitter={petsitter} />
            ))
          ) : (
            <p className="col-span-3 text-center text-[#989898] text-[16px] py-20">
              해당 조건에 맞는 펫시터가 없습니다.
            </p>
          )}
        </div>

        {/* 페이지네이션 고정 (fixed bottom) */}
        <Suspense>
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </Suspense>

        {/* 고정 pagination 높이만큼 여백 */}
        <div className="h-16" />

      </div>
    </div>
  )
}
