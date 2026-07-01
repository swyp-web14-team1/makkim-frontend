## [2026-07-01] 펫시터 카드 데스크톱/태블릿 최종 반응형 정리

- 수정/생성 파일: `components/petsitter/PetsitterCard.tsx`
- 변경 내용:
  - 데스크톱·태블릿(md 이상): `[container-type:size]` + `clamp(최소, Ncqh, 원래크기)`로 텍스트/이미지가 컨테이너 크기에 비례해 변하되 원래 크기를 상한으로, 정해진 최소값 아래로는 내려가지 않도록 범위를 좁게 제한(급격한 크기 변화 방지). 프로필 이미지·이름·별점·설명·위치 모두 이 방식 적용
  - 태그+버튼 줄은 `flex-nowrap`으로 항상 한 줄 유지(넘치는 태그는 숨김) — 태그가 2줄로 줄바꿈되면서 고정 높이 영역 밖으로 잘려나가던 구조적 버그 수정
  - 이름 줄도 `truncate`로 줄바꿈 대신 말줄임 처리
  - 모바일은 기존처럼 고정 크기 + 설명/태그 제외 유지 (변경 없음)
- 비고: 820×900(태블릿), 1024×700, 1280×720, 1366×768, 1440×800, 1536×864, 1920×1080, 2560×1300, 1200×600(매우 낮음)까지 폭넓게 Playwright로 확인. 모든 해상도에서 스크롤 없음 + 카드 내용 전부 표시(잘림 없음) 확인

## [2026-07-01] 펫시터 찾기 모바일 레이아웃 분리 (뷰포트 고정은 md 이상만)

- 수정/생성 파일:
  - `app/petsitter/page.tsx` — `h-screen`/`overflow-hidden`/`grid-rows-*`로 화면에 맞춰 줄이는 처리를 `md:` 이상에서만 적용, 모바일(기본)은 `min-h-screen` + 자연스러운 세로 스크롤로 전환
  - `components/petsitter/CategoryFilter.tsx` — `overflow-x-auto` 가로 스크롤 제거, `flex-wrap`으로 카테고리 칩이 줄바꿈되도록 변경
- 변경 내용: `grid-rows-6`이 모바일 1열 레이아웃에 그대로 적용되면서 카드 6개를 좁은 세로 공간에 욱여넣어 대부분 내용이 잘려 보이던 문제 수정. 데스크톱/노트북(md 이상)에서는 기존처럼 화면 높이에 맞춰 스크롤 없이 표시되고, 모바일은 카드가 원래 크기로 전부 보이며 페이지가 자연스럽게 스크롤됨
- 비고: Playwright로 390×844(모바일, 세로 스크롤 있음/가로 스크롤 없음), 820×900(태블릿), 1366×768(노트북, 스크롤 없음)에서 확인

## [2026-07-01] 펫시터 카드 컨테이너 쿼리 스케일링 되돌림 (고정 크기로 복귀)

- 수정/생성 파일: `components/petsitter/PetsitterCard.tsx`
- 변경 내용: 화면 크기와 무관하게 항상 원래 고정 px 크기(이름 18px, 별점/태그 14px, 설명/위치 12px, 프로필 이미지 120px 등)로 되돌림. `cqh`/`cqw` 기반 스케일링은 기본 화면에서도 크기가 달라 보이는 부작용이 있어 제거
- 비고: 화면이 낮아 카드가 넘치면 `overflow-hidden`으로 잘리고 스크롤은 발생하지 않는 것으로 충분하다는 방향으로 정리(모든 요소가 항상 다 보일 필요는 없음). `h-full`만 유지해 그리드 셀에 맞춰 카드가 채워지도록 함. Playwright로 1920×1080(정상 크기), 1366×650(낮은 화면)에서 폰트 크기 정상 + 스크롤 없음 확인

## [2026-07-01] 펫시터 카드 태그/버튼 영역 사라짐 수정 (완전 반응형으로 전환)

- 수정/생성 파일: `components/petsitter/PetsitterCard.tsx`
- 변경 내용: 이전 버전은 프로필+정보 영역이 필요한 높이를 다 못 채우면 `overflow-hidden`이 하단 태그/버튼 영역 전체를 잘라내는 구조였음. 이를 `grid grid-rows-[3fr_1fr]`로 바꿔 프로필+정보(75%)와 태그+버튼(25%) 영역이 항상 각자의 비율만큼 공간을 보장받도록 함. 프로필 이미지는 `aspect-square h-full`로 행 높이에 맞춰 자연스럽게 커지고/작아지고, 아이콘은 `size` prop 대신 `text-[Ncqh]`로 em 기반 스케일링, 태그·버튼 padding도 `cqw`/`cqh` 단위로 전환
- 비고: 극단적으로 낮은 화면(1440×450)에서도 모든 섹션(이미지·이름·태그·버튼)이 사라지지 않고 비율대로 계속 축소되며 표시됨을 Playwright로 확인 (1600×1000, 1366×768, 1366×650, 1440×550, 1440×450)

## [2026-07-01] 펫시터 카드 내부 요소 컨테이너 쿼리 기반 스케일링

- 수정/생성 파일: `components/petsitter/PetsitterCard.tsx`
- 변경 내용: 카드 루트에 `[container-type:size]` 적용, 프로필 이미지·폰트 크기·padding·gap을 `cqh`(컨테이너 높이 기준) 단위 + `clamp()`로 전환. 그리드 행 높이가 화면 높이에 따라 줄어들 때 카드 내부 요소가 overflow-hidden으로 잘리는 대신 비율에 맞춰 함께 축소되도록 함
- 비고: 노트북처럼 실제 사용 가능 높이가 낮은 경우(예: 1366×650) 카드 텍스트가 중간에 잘리던 문제 해결. 극단적으로 낮은 높이(~550px)에서는 태그/버튼 영역이 생략될 수 있으나 실사용 범위 밖의 케이스. Playwright로 1600×1000, 1366×768, 1366×650, 1440×550에서 확인

## [2026-07-01] 헤더 페이지별 스타일 분기

- 수정/생성 파일: `components/common/layout/Header.tsx`
- 변경 내용: `usePathname`으로 현재 경로 확인 후, 홈(`/`)은 기존 반투명(`bg-white/50`) 스타일 유지, 그 외 페이지는 흰 배경 + 하단 회색 보더(`bg-white border-b border-[#e5e5e5]`)로 분기
- 비고: 홈은 히어로 이미지 위에 오버레이되는 디자인이라 반투명 유지, 나머지 페이지는 배경 위 텍스트 대비를 위해 불투명 흰 배경 필요

## [2026-07-01] 펫시터 찾기 페이지 뷰포트 맞춤 (스크롤 제거)

- 수정/생성 파일:
  - `app/petsitter/page.tsx` — 전체 레이아웃을 `h-screen flex flex-col`로 전환, 카드 그리드를 `flex-1 min-h-0` + 반응형 `grid-rows-*`로 남는 세로 공간에 맞춰 축소되도록 변경
  - `components/petsitter/Pagination.tsx` — `fixed bottom-8` 제거, 일반 flex 흐름으로 전환
  - `components/petsitter/PetsitterCard.tsx` — `h-full` 추가하여 그리드 셀 높이에 맞춰 카드가 채워지도록 변경
- 변경 내용: 페이지당 6개로 페이지네이션되는 구조라 페이지 자체가 스크롤될 필요가 없다고 판단, 뷰포트 높이에 맞춰 카드 영역이 줄어들도록 하여 어떤 화면 높이에서도(노트북 포함) 스크롤 없이 한 화면에 표시되도록 함
- 비고: 화면이 매우 낮으면 카드 설명 텍스트 일부가 잘릴 수 있음(트레이드오프로 확인 후 진행). Playwright로 1366×768, 1920×1080, 1440×700에서 스크롤 없음 확인

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
