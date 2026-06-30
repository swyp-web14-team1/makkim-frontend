'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface Props {
  currentPage: number
  totalPages: number
}

export default function Pagination({ currentPage, totalPages }: Props) {
  const searchParams = useSearchParams()

  const getPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', String(page))
    return `/petsitter?${params.toString()}`
  }

  return (
    <div className="fixed bottom-8 left-0 right-0 bg-white  flex items-center justify-center gap-1 z-40">
      {currentPage > 1 ? (
        <Link href={getPageUrl(currentPage - 1)} className="p-2 text-[#989898] hover:text-[#F77332] transition-colors">
          <FaChevronLeft size={14} />
        </Link>
      ) : (
        <span className="p-2 text-[#dadada]"><FaChevronLeft size={14} /></span>
      )}

      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <Link
          key={page}
          href={getPageUrl(page)}
          className={`w-9 h-9 flex items-center justify-center rounded-full text-[15px] font-bold transition-colors ${
            page === currentPage
              ? 'bg-[#F77332] text-white'
              : 'text-[#989898] hover:text-[#F77332]'
          }`}
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages ? (
        <Link href={getPageUrl(currentPage + 1)} className="p-2 text-[#989898] hover:text-[#F77332] transition-colors">
          <FaChevronRight size={14} />
        </Link>
      ) : (
        <span className="p-2 text-[#dadada]"><FaChevronRight size={14} /></span>
      )}
    </div>
  )
}
