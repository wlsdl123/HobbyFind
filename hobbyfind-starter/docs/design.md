# HobbyFind UI/UX 디자인 가이드

### **Design Guide v1.0**

> **Design Reference:** Airbnb Design System (톤앤매너와 디자인 원칙 참고)
> **서비스:** HobbyFind
> **Platform:** Web (Next.js + TailwindCSS)

> **참고:** 본 가이드는 Airbnb의 **심플함, 여백 중심 레이아웃, 카드 기반 탐색, 부드러운 인터랙션** 등의 디자인 원칙을 참고한 독립적인 디자인 가이드이며, Airbnb의 디자인을 그대로 복제하는 것이 아니다.

---

# 목차

1. Design System Overview
2. TailwindCSS Color Palette
3. Typography
4. Spacing & Grid System
5. Page Implementations
6. Layout Components
7. Interaction Patterns
8. Breakpoints

---

# 1. Design System Overview

## 1.1 브랜드 아이덴티티

HobbyFind는 **취미를 쉽고 편안하게 탐색하는 경험**을 제공하는 서비스이다.

사용자는 복잡한 기능 없이 카테고리를 선택하고 다양한 취미를 자연스럽게 둘러볼 수 있어야 한다.

### 핵심 가치

* 심플(Simple)
* 직관적(Intuitive)
* 따뜻함(Friendly)
* 탐색 중심(Discovery)
* 높은 가독성(Readable)

---

## 1.2 톤앤매너

Airbnb 디자인 철학을 참고하여 다음 원칙을 적용한다.

| 원칙          | 적용 방식                  |
| ----------- | ---------------------- |
| 넓은 여백       | 콘텐츠 간 충분한 간격 확보        |
| 카드 중심 UI    | 모든 취미를 동일한 카드 컴포넌트로 표현 |
| 부드러운 모서리    | `rounded-2xl` 기본 적용    |
| 최소한의 색상     | 흰색 배경 + 포인트 컬러 중심      |
| 자연스러운 애니메이션 | Hover, Fade, Scale 효과  |
| 직관적인 탐색     | 상단 카테고리 중심 내비게이션       |

---

## 1.3 UI 키 비주얼

```
────────────────────────────────

HobbyFind

당신에게 맞는 새로운 취미를 찾아보세요.

[ 운동형 ] [ 지능형 ] [ 예술형 ]

□□□□□□□□□□□□□□□□□□□□□□□□

취미 카드

□□□□□□□□□□□□□□□□□□□□□□□□

```

---

# 2. TailwindCSS Color Palette

## Brand

```ts
brand: {
50:"#FFF8F7",
100:"#FFEFEA",
200:"#FFD9CF",
300:"#FFB8A5",
400:"#FF8C73",
500:"#FF5A5F",
600:"#E14D52",
700:"#C33F45",
800:"#A13238",
900:"#7E272D"
}
```

> Airbnb의 Coral 계열에서 영감을 받은 따뜻한 브랜드 컬러.

---

## Secondary

```ts
secondary:{
50:"#F6F7F8",
100:"#ECEEF0",
200:"#D8DDE2",
300:"#C1C7CF",
400:"#97A1AE",
500:"#6B7280",
600:"#4B5563",
700:"#374151",
800:"#1F2937",
900:"#111827"
}
```

---

## Success

```ts
green:{
500:"#22C55E"
}
```

---

## Warning

```ts
yellow:{
500:"#F59E0B"
}
```

---

## Error

```ts
red:{
500:"#EF4444"
}
```

---

## Neutral

| Token          | Color     |
| -------------- | --------- |
| Background     | `#FFFFFF` |
| Surface        | `#FFFFFF` |
| Card           | `#FFFFFF` |
| Border         | `#E5E7EB` |
| Divider        | `#F3F4F6` |
| Text Primary   | `#222222` |
| Text Secondary | `#717171` |

---

## 버튼

| 상태       | 색상                        |
| -------- | ------------------------- |
| Primary  | `bg-brand-500 text-white` |
| Hover    | `bg-brand-600`            |
| Disabled | `bg-gray-300`             |

---

# 3. Typography

## Font

```
Pretendard

Noto Sans KR
```

---

| 타입    | 크기   |
| ----- | ---- |
| Hero  | 48px |
| H1    | 36px |
| H2    | 30px |
| H3    | 24px |
| Body  | 16px |
| Small | 14px |

Tailwind

```css
text-5xl
text-4xl
text-3xl
text-base
text-sm
```

---

# 4. Spacing & Grid System

## Spacing

```
4
8
12
16
24
32
48
64
96
```

Tailwind

```
p-4

p-6

p-8

gap-6

gap-8
```

---

## Container

```
max-w-7xl
mx-auto
px-6
```

---

## Grid

### Desktop

```
grid-cols-4
```

### Tablet

```
grid-cols-2
```

### Mobile

```
grid-cols-1
```

---

# 5. Page Implementations

---

# `/`

## 목적

서비스 소개 및 전체 취미 탐색

---

### 레이아웃

```
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

## Hero

```
당신에게 맞는
새로운 취미를 찾아보세요.

운동형 · 지능형 · 예술형

18개의 다양한 취미를
자유롭게 탐색해보세요.
```

Tailwind

```html
<section class="max-w-7xl mx-auto py-20">
```

---

## Category Filter

```
[ 운동형 ]

[ 지능형 ]

[ 예술형 ]
```

Tailwind

```html
flex gap-4
```

---

## Hobby Grid

Desktop

```
□□□□ □□□□ □□□□ □□□□
```

Tablet

```
□□□□ □□□□
□□□□ □□□□
```

Mobile

```
□□□□
□□□□
□□□□
```

---

# `/sports`

상단

```
운동형

건강과 활력을 위한 취미
```

Grid

```
조깅

요가

수영

자전거

클라이밍

댄스
```

---

# `/intellectual`

상단

```
지능형

생각하는 즐거움을 경험하세요.
```

Grid

```
독서

퍼즐

체스

프로그래밍

외국어 학습

사진 촬영
```

---

# `/arts`

상단

```
예술형

창의력을 표현하는 취미
```

Grid

```
그림 그리기

악기 연주

요리

서예

도자기 만들기

정원 가꾸기
```

---

# Hobby Card

구성

```
이미지

취미명

카테고리
```

Tailwind

```html
rounded-2xl
shadow-sm
hover:shadow-xl
transition-all
```

---

# 6. Layout Components

## Header

```
Logo

운동형

지능형

예술형
```

Tailwind

```html
sticky top-0

backdrop-blur-md

border-b
```

---

## Footer

```
© HobbyFind

운동형

지능형

예술형
```

---

## Card

```
Image

Title

Category
```

Tailwind

```html
rounded-2xl

overflow-hidden

bg-white
```

---

## Grid

```css
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4
gap-8
```

---

## Filter

```html
<button class="
rounded-full
px-5
py-3
border
hover:bg-brand-500
hover:text-white">
```

---

# 7. Interaction Patterns

## Button

Hover

```
Scale 102%

Background 변경
```

Tailwind

```css
hover:scale-105
transition
```

---

## Filter

선택 전

```
흰색

회색 Border
```

선택 후

```
Coral

White Text
```

---

## Hobby Card

Hover

```
Scale

Shadow

Image Zoom
```

Tailwind

```css
hover:shadow-xl

hover:-translate-y-1

duration-300
```

---

## Page Transition

Fade

```
Opacity

TranslateY
```

Tailwind 예시

```css
transition-all
duration-300
ease-in-out
```

---

## Mobile

* Hover 효과 제거
* Touch Feedback 적용
* 버튼 높이 48px 이상 유지
* 필터 버튼은 가로 스크롤 가능

---

## Desktop

* Hover 효과 활성화
* 카드 확대 및 그림자 적용
* 마우스 포인터 변경

---

# 8. Breakpoints

| Breakpoint | Width   | 레이아웃                    |
| ---------- | ------- | ----------------------- |
| `sm`       | ≥640px  | 모바일(기본)                 |
| `md`       | ≥768px  | 태블릿, 2열 Grid            |
| `lg`       | ≥1024px | 소형 데스크톱, 3열 Grid        |
| `xl`       | ≥1280px | 일반 데스크톱, 4열 Grid        |
| `2xl`      | ≥1536px | 와이드, 최대 콘텐츠 폭 1280px 유지 |

### 반응형 가이드

| 화면      | Header         | Hero  | Grid | Filter |
| ------- | -------------- | ----- | ---- | ------ |
| Mobile  | 로고 + 가로 스크롤 필터 | 좌측 정렬 | 1열   | 가로 스크롤 |
| Tablet  | 로고 + 필터        | 중앙 정렬 | 2열   | 한 줄 표시 |
| Desktop | 로고 + 필터        | 중앙 정렬 | 3열   | 한 줄 표시 |
| Wide    | 최대 폭 1280px 유지 | 중앙 정렬 | 4열   | 한 줄 표시 |

---

# 디자인 토큰 예시

```ts
export const theme = {
  container: "max-w-7xl mx-auto px-6",
  radius: "rounded-2xl",
  shadow: "shadow-sm hover:shadow-xl",
  button: "bg-brand-500 hover:bg-brand-600 text-white rounded-full px-6 py-3",
  card: "bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",
};


