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
    <div className="h-full bg-white rounded-lg border border-transparent hover:border-[#e8e8e8] shadow-[0_0_4px_rgba(0,0,0,0.08)] overflow-hidden cursor-pointer flex flex-col">
      {/* 찜 버튼 */}
      <div className="shrink-0 flex justify-end px-6 pt-4 md:px-4 md:pt-2">
        <button onClick={() => setLiked(!liked)} aria-label="찜하기">
          {liked
            ? <FaHeart size={19} className="text-[#F77332] cursor-pointer" />
            : <FaRegHeart size={19} className="text-[#ccc] hover:text-[#F77332] cursor-pointer" />
          }
        </button>
      </div>

      {/* 모바일: 고정 크기, 설명/태그 없이 자연스러운 세로 스크롤 */}
      <div className="md:hidden flex flex-col gap-5 flex-1 overflow-hidden px-6 pb-5">
        <div className="flex gap-4 items-center">
          <div className="shrink-0 w-30 h-30 relative rounded-full overflow-hidden">
            <Image src={petsitter.profileImage} alt={petsitter.name} fill className="object-cover" />
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

            <div className="flex items-start gap-0.5">
              <IoLocationSharp className="text-[#898989] shrink-0" size={14} />
              <span className="text-[#898989] text-[12px] leading-4.25 font-semibold truncate">
                {petsitter.locations.join(', ')}
              </span>
            </div>
          </div>
        </div>

        <Link
          href={`/petsitter/${petsitter.id}`}
          className="self-end shrink-0 border-2 border-[#dadada] text-[#a1a1a1] font-bold px-5 py-1.5 rounded-sm text-[14px] whitespace-nowrap hover:bg-[#F77332] hover:text-white hover:border-white transition-colors"
        >
          연락하기
        </Link>
      </div>

      {/* 데스크톱(md 이상): 컨테이너 크기에 비례해 적당한 범위 안에서만 커지거나 작아짐(원래 크기가 상한) */}
      <div className="hidden md:flex md:flex-col flex-1 min-h-0 px-6 pb-5 [container-type:size]">
        <div className="flex-1 min-h-0 grid grid-rows-[3fr_1fr] gap-[1.5cqh]">
          {/* 프로필 + 정보 */}
          <div className="min-h-0 flex gap-4 items-center overflow-hidden">
            <div className="shrink-0 w-[clamp(56px,34cqh,120px)] h-[clamp(56px,34cqh,120px)] relative rounded-full overflow-hidden">
              <Image src={petsitter.profileImage} alt={petsitter.name} fill className="object-cover" />
            </div>

            <div className="flex flex-col gap-[0.6cqh] flex-1 min-w-0">
              <div className="flex items-center gap-1 min-w-0">
                <div className="flex gap-1 shrink-0">
                  {petsitter.animalTypes.map(type => (
                    <Image key={type} src={BADGE_MAP[type]} alt={type} width={20} height={20} className="w-4 h-4" />
                  ))}
                </div>
                <span className="font-extrabold text-[clamp(14px,4.2cqh,18px)] leading-tight truncate">{petsitter.name}</span>
              </div>

              <div className="flex items-center gap-1 min-w-0">
                <FaStar className="text-[#F77332] shrink-0" size={11} />
                <span className="font-semibold text-[clamp(11px,3.3cqh,14px)] leading-tight shrink-0">{petsitter.rating}</span>
                <span className="text-[clamp(11px,3.3cqh,14px)] leading-tight font-semibold text-black truncate"> · 후기 {petsitter.reviewCount}개</span>
              </div>

              <p className="text-[clamp(10px,2.8cqh,12px)] leading-tight font-medium text-black line-clamp-2">
                {petsitter.description}
              </p>

              <div className="flex items-start gap-0.5">
                <IoLocationSharp className="text-[#898989] shrink-0" size={11} />
                <span className="text-[#898989] text-[clamp(10px,2.8cqh,12px)] leading-tight font-semibold truncate">
                  {petsitter.locations.join(', ')}
                </span>
              </div>
            </div>
          </div>

          {/* 태그 + 버튼: 항상 한 줄, 절대 잘리지 않도록 넘치는 태그는 숨김 처리 */}
          <div className="min-h-0 flex items-center gap-2 overflow-hidden">
            <div className="flex gap-3 flex-nowrap flex-1 min-w-0 overflow-hidden">
              {petsitter.tags.map(tag => (
                <span
                  key={tag}
                  className="shrink-0 bg-[#F77332] text-white text-[clamp(10px,3cqh,14px)] font-semibold px-3 py-0.5 rounded-sm whitespace-nowrap"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <Link
              href={`/petsitter/${petsitter.id}`}
              className="shrink-0 border-2 border-[#dadada] text-[#a1a1a1] font-bold px-3 py-1 rounded-sm text-[clamp(10px,3cqh,14px)] whitespace-nowrap hover:bg-[#F77332] hover:text-white hover:border-white transition-colors"
            >
              연락하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
