# Information Architecture (IA)

# HobbyFind

> **문서 버전:** v1.0
> **서비스명:** HobbyFind
> **서비스 타입:** Web Service
> **기술 스택:** Next.js (App Router 기준)
> **이용 조건:** 비로그인 사용자 이용 가능

---

# 목차

1. 전체 사이트맵 (Site Map)
2. 사용자 흐름 (User Flow)
3. 페이지 간 이동 구조 (Navigation Structure)
4. 페이지 계층 구조 (Page Hierarchy)
5. 페이지별 콘텐츠 구성 (Content Organization)
6. 상호작용 패턴 (Interaction Patterns)
7. URL 구조 (URL Structure)
8. 컴포넌트 계층 구조 (Component Hierarchy)
9. Header / Footer 구성
10. Next.js 기반 구현 고려사항

---

# 1. 전체 사이트맵 (Site Map)

```text
HobbyFind

├── /
│   ├── Top Bar
│   ├── Hero Section
│   ├── Category Filter
│   └── Hobby Grid (전체 취미)
│
├── /sports
│   ├── Top Bar
│   ├── Category Header
│   └── Hobby Grid (운동형)
│
├── /intellectual
│   ├── Top Bar
│   ├── Category Header
│   └── Hobby Grid (지능형)
│
└── /arts
    ├── Top Bar
    ├── Category Header
    └── Hobby Grid (예술형)
```

---

# 2. 사용자 흐름 (User Flow)

## 전체 취미 탐색

```text
서비스 접속

↓

루트 페이지

↓

Hero 확인

↓

전체 취미 탐색

↓

원하는 취미 확인
```

---

## 카테고리 탐색

```text
루트 페이지

↓

Top Bar 카테고리 선택

↓

카테고리 페이지 이동

↓

해당 취미 탐색
```

---

## 카테고리 변경

```text
운동형

↓

Top Bar

↓

예술형 선택

↓

예술형 페이지
```

---

# 3. 페이지 간 이동 구조 (Navigation Structure)

## Top Bar

모든 페이지에서 동일하게 제공한다.

| 메뉴  | 이동 경로           |
| --- | --------------- |
| 로고  | `/`             |
| 운동형 | `/sports`       |
| 지능형 | `/intellectual` |
| 예술형 | `/arts`         |

---

## 페이지 이동 흐름

```text
                로고
                  │
                  ▼
             루트 페이지
        ┌────────┼────────┐
        ▼        ▼        ▼
    운동형    지능형    예술형
      │          │         │
      └──────────┼─────────┘
                 │
             Top Bar
                 │
            다른 카테고리 이동
```

---

# 4. 페이지 계층 구조 (Page Hierarchy)

```text
Level 1
│
└── 루트 (/)
        │
        ├── 운동형 (/sports)
        ├── 지능형 (/intellectual)
        └── 예술형 (/arts)
```

| 계층      | 페이지                   |
| ------- | --------------------- |
| Level 1 | 루트 페이지 (`/`)          |
| Level 2 | 운동형 (`/sports`)       |
| Level 2 | 지능형 (`/intellectual`) |
| Level 2 | 예술형 (`/arts`)         |

---

# 5. 페이지별 콘텐츠 구성 (Content Organization)

## 루트 페이지 (`/`)

### 목적

전체 취미 탐색

### 콘텐츠 구성

| 영역      | 내용             |
| ------- | -------------- |
| Top Bar | 로고, 카테고리 필터    |
| Hero    | 서비스 소개 문구      |
| Main    | 전체 취미 카드(Grid) |
| Footer  | 기본 링크          |

### 화면 구조

```text
Header

↓

Hero

↓

Category Filter

↓

Hobby Grid

↓

Footer
```

---

## 운동형 페이지 (`/sports`)

### 목적

운동형 취미만 탐색

### 콘텐츠

| 영역              | 내용          |
| --------------- | ----------- |
| Top Bar         | 공통 Header   |
| Category Header | 운동형 제목 및 소개 |
| Hobby Grid      | 운동형 취미 6개   |
| Footer          | 공통 Footer   |

### 표시 취미

* 조깅 / 러닝
* 요가
* 수영
* 자전거
* 클라이밍
* 댄스

---

## 지능형 페이지 (`/intellectual`)

### 콘텐츠

| 영역              | 내용        |
| --------------- | --------- |
| Top Bar         | 공통 Header |
| Category Header | 지능형 소개    |
| Hobby Grid      | 지능형 취미 6개 |
| Footer          | 공통 Footer |

### 표시 취미

* 독서
* 퍼즐
* 체스
* 프로그래밍
* 외국어 학습
* 사진 촬영

---

## 예술형 페이지 (`/arts`)

### 콘텐츠

| 영역              | 내용        |
| --------------- | --------- |
| Top Bar         | 공통 Header |
| Category Header | 예술형 소개    |
| Hobby Grid      | 예술형 취미 6개 |
| Footer          | 공통 Footer |

### 표시 취미

* 그림 그리기
* 악기 연주
* 요리
* 서예
* 도자기 만들기
* 정원 가꾸기

---

# 6. 상호작용 패턴 (Interaction Patterns)

## 카테고리 선택

사용자 동작

```
카테고리 클릭
```

결과

```
카테고리 페이지 이동
```

---

## 카드 Hover

Desktop

* 카드 확대(Scale 1.03)
* 그림자 증가

Mobile

* Hover 없음
* Touch Feedback

---

## 카드 클릭

카드 선택

↓

선택 상태 표시

> **참고:** 취미 상세 페이지는 제공하지 않으므로 카드 클릭 시 별도 페이지 이동은 발생하지 않는다.

---

## Header

로고 클릭

↓

루트 페이지 이동

---

# 7. URL 구조 (URL Structure)

| URL             | 설명     |
| --------------- | ------ |
| `/`             | 루트 페이지 |
| `/sports`       | 운동형    |
| `/intellectual` | 지능형    |
| `/arts`         | 예술형    |

### URL 설계 원칙

* 모두 소문자 사용
* 직관적인 경로 구성
* 카테고리별 독립 URL 제공
* Next.js App Router 구조에 적합

---

# 8. 컴포넌트 계층 구조 (Component Hierarchy)

```text
App

├── RootLayout
│
├── Header
│   ├── Logo
│   └── Category Navigation
│
├── Hero
│
├── CategoryHeader
│
├── HobbyGrid
│   ├── HobbyCard
│   ├── HobbyCard
│   └── HobbyCard
│
├── Footer
│
└── Common
    ├── Container
    ├── Button
    ├── Grid
    ├── Badge
    └── Typography
```

---

# 9. Header / Footer 구성

## Header (Top Bar)

모든 페이지 공통

| 요소  | 설명              |
| --- | --------------- |
| 로고  | HobbyFind       |
| 운동형 | `/sports`       |
| 지능형 | `/intellectual` |
| 예술형 | `/arts`         |

### 레이아웃

```text
Logo                         운동형  지능형  예술형
```

---

## Footer

모든 페이지 공통

### 포함 요소

| 항목        | 내용              |
| --------- | --------------- |
| Copyright | © HobbyFind     |
| 홈         | `/`             |
| 운동형       | `/sports`       |
| 지능형       | `/intellectual` |
| 예술형       | `/arts`         |

### 레이아웃

```text
────────────────────────

© HobbyFind

홈
운동형
지능형
예술형
```

---

# 10. Next.js 기반 구현 고려사항

## 권장 디렉터리 구조

```text
app
│
├── page.tsx                  (/)
│
├── sports
│      └── page.tsx
│
├── intellectual
│      └── page.tsx
│
├── arts
│      └── page.tsx
│
├── layout.tsx
│
├── components
│      ├── Header.tsx
│      ├── Hero.tsx
│      ├── Footer.tsx
│      ├── HobbyGrid.tsx
│      ├── HobbyCard.tsx
│      └── CategoryHeader.tsx
│
└── data
       └── hobbies.ts
```

## 데이터 구조

취미 목록은 정적 데이터 파일(`data/hobbies.ts`)로 관리하며, 다음의 **고정된 18개 취미**만 사용한다.

* **운동형:** 조깅/러닝, 요가, 수영, 자전거, 클라이밍, 댄스
* **지능형:** 독서, 퍼즐, 체스, 프로그래밍, 외국어 학습, 사진 촬영
* **예술형:** 그림 그리기, 악기 연주, 요리, 서예, 도자기 만들기, 정원 가꾸기

## 구현 고려사항

| 항목     | 내용                                                 |
| ------ | -------------------------------------------------- |
| 라우팅    | Next.js App Router 기반 정적 라우팅                       |
| 데이터 관리 | 정적 TypeScript 데이터 사용(데이터베이스 없음)                    |
| 반응형    | Mobile First, CSS Grid 기반 레이아웃                     |
| 이미지    | `next/image`를 활용한 최적화                              |
| SEO    | 각 페이지별 `title`, `description` 설정 및 시맨틱 HTML 적용     |
| 접근성    | 키보드 탐색, `aria-label`, 이미지 `alt` 속성, 명확한 포커스 스타일 제공 |

---

# IA 요약

| 페이지             | 주요 콘텐츠                    | 이동 가능 페이지                           |
| --------------- | ------------------------- | ----------------------------------- |
| `/`             | Hero, 카테고리 필터, 전체 취미 Grid | `/sports`, `/intellectual`, `/arts` |
| `/sports`       | 운동형 소개, 운동형 취미 Grid       | `/`, `/intellectual`, `/arts`       |
| `/intellectual` | 지능형 소개, 지능형 취미 Grid       | `/`, `/sports`, `/arts`             |
| `/arts`         | 예술형 소개, 예술형 취미 Grid       | `/`, `/sports`, `/intellectual`     |


