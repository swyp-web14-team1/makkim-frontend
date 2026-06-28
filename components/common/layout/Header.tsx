'use client'

import Link from 'next/link'
// import Image from 'next/image'
// import { useState } from 'react'
// import { useAuthStore } from '@/store/authStore'
// import { IoNotificationsOutline } from 'react-icons/io5'
// import { IoChatbubbleOutline } from 'react-icons/io5'

export default function Header() {
//   const { isLoggedIn, user, logout } = useAuthStore()
//   const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/50 ">
        <div className="max-w-8xl mx-auto px-30 h-16 flex items-center justify-between">
            <div className='flex gap-30'>
                <Link href="/" className="font-bold text-2xl tracking-tight text-[#F77332]">
                MAKKIM
                </Link>
                <nav className="hidden md:flex items-center gap-18 text-md font-medium text-[#200F07]">
                <Link href="/about" className="hover:text-gray-900">이용방법</Link>
                <Link href="/notice" className="hover:text-gray-900">공지사항</Link>
                <Link href="/community" className="hover:text-gray-900">커뮤니티</Link>
                </nav>
            </div>
        {/* {isLoggedIn && user ? (
          <div className="flex items-center gap-4">
            <Link href="/mypage/dm">
              <IoChatbubbleOutline size={22} className="text-gray-600 hover:text-gray-900" />
            </Link>
            <button>
              <IoNotificationsOutline size={22} className="text-gray-600 hover:text-gray-900" />
            </button>
            <span className="text-sm font-medium text-gray-700">{user.nickname}</span>
            <div className="relative">
              <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                <Image
                  src={user.profileImage}
                  alt="프로필"
                  width={32}
                  height={32}
                  className="rounded-full object-cover cursor-pointer"
                />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 top-10 w-36 bg-white border border-gray-100 rounded-xl shadow-lg py-1 z-50">
                  <Link href="/mypage/activity" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setDropdownOpen(false)}>
                    내 게시물
                  </Link>
                  <Link href="/mypage/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" onClick={() => setDropdownOpen(false)}>
                    내 프로필
                  </Link>
                  <button
                    onClick={() => { logout(); setDropdownOpen(false) }}
                    className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-50"
                  >
                    로그아웃
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : ( */}
          <Link href="/auth/login" className="bg-[#F77332] hover:bg-[#e5621e] text-white px-8 py-1 rounded-full text-md font-medium">
            로그인
          </Link>
        {/* )} */}
      </div>
    </header>
  )
}