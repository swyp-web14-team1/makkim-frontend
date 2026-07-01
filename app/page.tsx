import Image from "next/image";
import Link from "next/link";
import { FaCalendarCheck, FaHeart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="w-full bg-white h-screen min-h-[600px] relative overflow-hidden px-6 md:px-24 lg:px-47">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/main-bg1.png"
            alt="Main Background"
            fill
            className="object-cover object-right"
          />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center">
          <div>
            <span className="text-[#F77332] font-semibold text-base md:text-md">이색동물도 OK</span>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold break-keep leading-tight mt-0.5 tracking-tight">
              가장 믿을 수 있는 <br />
              <span className="text-[#F77332]">펫시터</span>를 찾아보세요
            </h1>
            <p className="text-sm md:text-md lg:text-[18px] font-normal break-keep text-[#878787] mt-3 tracking-normal">
              강아지 고양이 앵무새 햄스터 토끼 파충류까지,<br />
              당신의 소중한 반려동물을 전문가에게 안심하고 맡기세요.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 mt-8 lg:mt-10 w-full lg:w-[32%]">
            <Link href="/petsitter" className="flex flex-1 items-center justify-center gap-2 py-2 bg-[#F77332] hover:bg-[#200F07] text-white px-4 rounded-full text-base md:text-md lg:text-lg font-medium whitespace-nowrap md:gap-1 lg:gap-2">
              <IoSearchSharp className="w-4 h-4 lg:w-5 lg:h-5" /> 펫시터 찾기
            </Link>
            <Link href="/mypage/favorites" className="flex flex-1 items-center justify-center gap-2 py-2 text-white px-4 rounded-full text-base md:text-md lg:text-lg font-medium bg-[#F77332] hover:bg-[#200F07] whitespace-nowrap md:gap-1 lg:gap-2">
              <FaHeart className="w-4 h-4" /> 찜 목록
            </Link>
            <Link href="/mypage/reservations" className="flex flex-1 items-center justify-center gap-2 py-2 text-white px-4 rounded-full text-base md:text-md lg:text-lg font-medium bg-[#F77332] hover:bg-[#200F07] whitespace-nowrap md:gap-1 lg:gap-2">
              <FaCalendarCheck className="w-4 h-4 " /> 예약내역
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}