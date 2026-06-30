'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaRegHeart, FaHeart, FaStar } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { Petsitter } from '@/lib/types/petsitter'

const BADGE_MAP: Record<string, string> = {
  '강아지': '/images/badges/badge-dog.svg',
  '고양이': '/images/badges/badge-cat.svg',
  '새': '/images/badges/badge-bird.svg',
  '양서류': '/images/badges/badge-fish.svg',
  '파충류': '/images/badges/badge-reptile.svg',
  '기타': '/images/badges/badge-other.svg',
}

interface Props {
  petsitter: Petsitter
}

export default function PetsitterCard({ petsitter }: Props) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="bg-white rounded-lg border border-transparent hover:border-[#e8e8e8] shadow-[0_0_4px_rgba(0,0,0,0.08)] px-6 pt-4 pb-5 flex flex-col gap-2 overflow-hidden cursor-pointer">
      {/* 찜 버튼 */}
      <div className="flex justify-end shrink-0 ">
        <button onClick={() => setLiked(!liked)} aria-label="찜하기">
          {liked
            ? <FaHeart size={19} className="text-[#F77332] cursor-pointer" />
            : <FaRegHeart size={19} className="text-[#ccc] hover:text-[#F77332] cursor-pointer" />
          }
        </button>
      </div>

      <div className="flex flex-col gap-5 flex-1 overflow-hidden">
        {/* 프로필 + 정보 */}
        <div className="flex gap-4 items-center">
          <div className="shrink-0 w-30 h-30 relative rounded-full overflow-hidden">
            <Image
              src={petsitter.profileImage}
              alt={petsitter.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-2 flex-1 min-w-0">
            <div className="flex items-center gap-1 flex-wrap">
              <div className="flex gap-1 shrink-0">
                {petsitter.animalTypes.map(type => (
                  <Image key={type} src={BADGE_MAP[type]} alt={type} width={20} height={20} />
                ))}
              </div>
              <span className="font-extrabold text-[18px] leading-6">{petsitter.name}</span>
            </div>

            <div className="flex items-center gap-1">
              <FaStar className="text-[#F77332]" size={11} />
              <span className="font-semibold text-[14px] leading-4.25">{petsitter.rating}</span>
              <span className="text-[14px] leading-4.25 font-semibold text-black"> · 후기 {petsitter.reviewCount}개</span>
            </div>

            <p className="text-[12px] leading-4.25 font-medium text-black line-clamp-3">
              {petsitter.description}
            </p>

            <div className="flex items-start gap-0.5">
              <IoLocationSharp className="text-[#898989] shrink-0" size={14} />
              <span className="text-[#898989] text-[12px] leading-4.25 font-semibold truncate">
                {petsitter.locations.join(', ')}
              </span>
            </div>
          </div>
        </div>

        {/* 태그 + 버튼 */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex gap-4 flex-wrap flex-1 min-w-0">
            {petsitter.tags.map(tag => (
              <span
                key={tag}
                className="bg-[#F77332] text-white text-[14px] font-semibold px-3 py-0.5 rounded-sm whitespace-nowrap"
              >
                #{tag}
              </span>
            ))}
          </div>
          <Link
            href={`/petsitter/${petsitter.id}`}
            className="shrink-0 border-2 border-[#dadada] text-[#a1a1a1] font-bold px-5 py-1.5 rounded-sm text-[14px] whitespace-nowrap hover:bg-[#F77332] hover:text-white hover:border-white transition-colors"
          >
            연락하기
          </Link>
        </div>
      </div>
    </div>
  )
}
