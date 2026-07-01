## [2026-07-01] 홈 히어로 섹션 세로 정렬 수정 (데스크톱 화면 높이 대응)

- 수정/생성 파일: `app/page.tsx`
- 변경 내용: 히어로 텍스트/버튼 영역에 고정 `pt-53 md:pt-56 lg:pt-72` 값을 쓰던 것을, `h-full flex flex-col justify-center` 래퍼로 교체하여 뷰포트 높이에 관계없이 항상 세로 중앙 정렬되도록 수정. `h-screen`에 `min-h-[600px]` 안전 최소값 추가
- 비고: 노트북처럼 해상도 너비는 데스크톱과 비슷해도 높이가 작은 화면에서 breakpoint가 md/lg로 잡히면서 고정 padding-top이 과도하게 적용되어 콘텐츠가 화면 아래로 밀려 보이던 문제. Playwright로 1366×768(노트북), 1920×1080(데스크톱) 스크린샷 확인 완료

## [2026-06-30] 펫시터 찾기 서버사이드 페이지네이션 적용

- 수정/생성 파일:
  - `lib/api/petsitter.ts` — Mock 데이터 12명으로 확장, 페이지네이션 반환값 추가
  - `app/petsitter/page.tsx` — 서버 컴포넌트로 전환, searchParams(page/category/location) 기반 데이터 페칭
  - `components/petsitter/CategoryFilter.tsx` — useState 제거, useRouter+useSearchParams로 URL 업데이트
  - `components/petsitter/SearchBar.tsx` — useState 제거, useRouter+useSearchParams로 URL 업데이트
  - `components/petsitter/Pagination.tsx` — 신규 생성, URL searchParams 기반 페이지 이동
- 변경 내용: 스크롤 대신 페이지네이션 방식으로 변경. 카테고리/지역/페이지 상태를 URL searchParams로 관리하여 실제 API 연결 시 서버 페이지네이션으로 쉽게 전환 가능한 구조
- 비고: 실제 API 연결 시 `lib/api/petsitter.ts`의 TODO 주석 위치에서 `GET /petsitters?page=N&category=X&perPage=6` 호출로 교체

## [2026-06-30] 펫시터 찾기 페이지 구현

- 수정/생성 파일:
  - `app/globals.css` — Pretendard 폰트 적용 (CDN link 방식)
  - `app/layout.tsx` — Pretendard 폰트 link 태그 추가
  - `next.config.ts` — picsum.photos 이미지 도메인 허용
  - `lib/types/petsitter.ts` — Petsitter, AnimalCategory 타입 정의
  - `lib/api/petsitter.ts` — Mock 데이터 6명, getPetsitters/getPetsitterById 함수
  - `components/petsitter/PetsitterCard.tsx` — 펫시터 카드 컴포넌트 (찜, 별점, 태그, 연락하기)
  - `components/petsitter/CategoryFilter.tsx` — 동물 카테고리 탭 필터
  - `components/petsitter/SearchBar.tsx` — 지역 선택 드롭다운 + 검색 인풋
  - `app/petsitter/page.tsx` — 펫시터 찾기 메인 페이지 (카테고리 필터링 포함)
- 변경 내용: 피그마 디자인(node 256:300) 기반으로 펫시터 찾기 페이지 전체 구현
- 비고: 실제 API 연동 전까지 Mock 데이터 사용. `lib/api/petsitter.ts`에서 TODO 주석 위치에 fetch 교체 예정
