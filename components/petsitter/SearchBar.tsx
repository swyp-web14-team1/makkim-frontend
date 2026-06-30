'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { IoLocationSharp, IoSearchSharp } from 'react-icons/io5'
import { FaChevronDown } from 'react-icons/fa'

const REGIONS = [
  '서울시 마포구', '서울시 강남구', '서울시 서초구', '서울시 송파구',
  '서울시 용산구', '서울시 중구', '서울시 동작구', '서울시 관악구',
  '서울시 은평구', '서울시 영등포구', '서울시 강서구', '서울시 성동구',
  '서울시 노원구', '서울시 성북구', '서울시 강북구',
]

interface Props {
  location: string
}

export default function SearchBar({ location }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [query, setQuery] = useState('')

  const handleLocationChange = (newLocation: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('location', newLocation)
    params.set('page', '1')
    router.push(`/petsitter?${params.toString()}`)
    setDropdownOpen(false)
  }

  return (
    <div className="relative">
      <div className="border border-black rounded-full px-6 py-2.5 flex items-center justify-between gap-6">
        <div className="flex items-center gap-6 flex-1 min-w-0">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2.5 shrink-0"
          >
            <IoLocationSharp size={20} />
            <span className="font-bold text-[18px] whitespace-nowrap">{location}</span>
            <FaChevronDown size={13} />
          </button>

          <div className="h-9 w-px bg-[#e0e0e0] shrink-0" />

          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={`${location.split(' ').pop()} 근처에서 검색`}
            className="flex-1 text-[16px] text-black/40 bg-transparent outline-none min-w-0 placeholder:text-black/40 font-medium"
          />
        </div>

        <button className="shrink-0 hover:text-[#F77332] transition-colors">
          <IoSearchSharp size={22} />
        </button>
      </div>

      {dropdownOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-[#e6e6e6] rounded-xl shadow-md z-20 py-2 min-w-52">
          {REGIONS.map(region => (
            <button
              key={region}
              onClick={() => handleLocationChange(region)}
              className={`w-full text-left px-5 py-2.5 text-[15px] hover:bg-gray-50 transition-colors ${
                location === region ? 'text-[#F77332] font-bold' : 'text-[#4e4e4e]'
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
