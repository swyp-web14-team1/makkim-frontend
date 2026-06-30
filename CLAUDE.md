@AGENTS.md

# Makkim 프로젝트

반려동물 보호자와 펫시터를 연결하는 매칭 서비스. 현재 **MVP 단계 프론트엔드만** 개발 중이며, 백엔드 API는 추후 연결 예정이다.

## 기술 스택

- **Framework**: Next.js 16.2.9 (App Router)
- **Runtime**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **State**: Zustand v5
- **Icons**: react-icons v5
- **Package manager**: npm

## 폴더 구조 규칙

```
app/
  (auth)/           # 로그인, 회원가입 관련 라우트 그룹
  (main)/           # 인증 후 접근 가능한 라우트 그룹
  petsitter/        # 펫시터 찾기, 목록, 상세
  reservation/      # 예약 신청, 내역
  review/           # 후기 작성, 조회
  places/           # 장소 탐색
  community/        # 커뮤니티 게시글
  mypage/           # 마이페이지 (프로필, 예약내역, 찜목록)
  layout.tsx
  page.tsx          # 홈 (랜딩)
  globals.css

components/
  common/
    layout/         # Header, Footer, Navigation 등
    ui/             # Button, Input, Modal 등 공용 컴포넌트
  [feature]/        # 기능별 컴포넌트 (petsitter/, review/, ...)

lib/
  api/              # API 호출 함수 (백엔드 연결 시 여기에 작성)
  hooks/            # 커스텀 훅
  store/            # Zustand 스토어
  utils/            # 유틸 함수
  types/            # 타입 정의

public/
  images/           # 정적 이미지
```

## 개발 원칙

### API 연결 대비
백엔드 API 연결 전까지는 `lib/api/` 하위에 함수 시그니처와 Mock 데이터를 먼저 작성한다. 실제 fetch 교체가 한 곳에서 가능하도록 함수를 분리해두는 것이 목표다.

```typescript
// lib/api/petsitter.ts 예시
export async function getPetsitters(params: PetsitterSearchParams) {
  // TODO: replace with real API call
  // return fetch(`${API_BASE}/petsitters?...`)
  return MOCK_PETSITTERS;
}
```

환경변수 `NEXT_PUBLIC_API_BASE_URL`을 기준으로 API URL을 관리한다.

### 스타일링
- Tailwind CSS v4 사용. 클래스 기반 스타일링만 사용한다.
- 브랜드 컬러: `#F77332` (오렌지), `#200F07` (다크브라운), `#878787` (그레이)
- 모바일 퍼스트로 작성하고 `md:`, `lg:` 순서로 반응형 확장한다.

### 타이포그래피 (Pretendard 기준)

**Heading**
| 등급 | 크기 | 행간 |
|------|------|------|
| H1 | 62px | 74px |
| H2 | 40px | 48px |
| H3 | 32px | 38px |
| H4 | 24px | 29px |
| H5 | 20px | 24px |
| H6 | 18px | 21px |

**Body**
| 등급 | 크기 | 행간 |
|------|------|------|
| Large | 20px | 24px |
| Medium | 18px | 21px |
| Normal | 16px | 19px |
| Small | 14px | 17px |

### 컴포넌트
- Server Component 기본. 인터랙션이 필요한 경우에만 `'use client'` 추가.
- 공용 UI 컴포넌트는 `components/common/ui/`에 작성한다.

### 상태 관리
- 서버 데이터는 컴포넌트 내에서 직접 fetch (Server Component) 또는 커스텀 훅.
- 전역 클라이언트 상태(인증 정보, UI 상태 등)는 Zustand 스토어 사용.
- 스토어 파일은 `lib/store/` 하위에 기능별로 분리한다.

## MVP 기능 범위 (US-01 ~ US-07)

| ID | 기능 | 우선순위 | 라우트 |
|----|------|---------|--------|
| US-01 | 카카오 소셜 로그인 | P0 | `/login` |
| US-02 | 기본 프로필 생성/조회 | P1 | `/mypage/profile` |
| US-03 | 펫시터 목록 조회 | P1 | `/petsitter` |
| US-04 | 펫시터 상세 프로필 조회 | P0 | `/petsitter/[id]` |
| US-05 | 예약 신청 | P0 | `/petsitter/[id]/reserve` |
| US-06 | 후기 및 평점 작성/조회 | P0 | `/review/write`, `/review` |
| US-07 | 반려동물 동반 장소 조회 | P1 | `/places` |

US-08 이상은 고도화 단계에서 구현한다.

## 주요 API 엔드포인트 (백엔드 연결 예정)

```
POST /auth/kakao          # 카카오 로그인
GET  /users/me            # 내 프로필 조회
PATCH /users/me           # 프로필 수정
POST /petsitters          # 펫시터 등록
GET  /petsitters          # 펫시터 목록 조회
GET  /petsitters/{id}     # 펫시터 상세 조회
POST /pets                # 반려동물 등록
GET  /pets                # 반려동물 목록 조회
PATCH /pets/{id}          # 반려동물 수정
POST /reservations        # 예약 신청
GET  /reservations        # 예약 내역 조회
PATCH /reservations/{id}  # 예약 승인/거절
POST /reviews             # 후기 작성
GET  /reviews             # 후기 목록 조회
GET  /places              # 장소 목록 조회
GET  /places/{id}         # 장소 상세 조회
```

## 사용자 역할

- **반려동물 보호자**: 펫시터 검색, 예약 신청, 후기 작성
- **펫시터**: 프로필 등록, 예약 확인, 후기 수신
- **일반 사용자**: 장소 탐색, 커뮤니티 조회

## 개발 명령어

```bash
npm run dev    # 개발 서버 (localhost:3000)
npm run build  # 프로덕션 빌드
npm run lint   # ESLint 검사
```
## 변경 이력 관리
기능을 구현하거나 수정할 때마다 CHANGELOG.md 파일에 아래 형식으로 기록을 추가할 것 (기존 내용은 지우지 말고 맨 위에 추가):

## [날짜] 기능명
- 수정/생성 파일: lib/api/petsitter.ts
- 변경 내용: getPetsitters 함수에 Mock 데이터 연결
- 비고: 실제 API 연동 전까지 임시 데이터 사용