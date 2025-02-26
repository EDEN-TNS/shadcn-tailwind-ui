![Image](https://github.com/user-attachments/assets/9d95c55e-e5d9-4030-a061-20b4177eab6f)

<br />

# @edentns/shadcn-tailwind-ui

shadcn UI를 기반으로 제작된 React 컴포넌트 라이브러리입니다.

## 🎨 Features

- 🎨 shadcn UI 기반의 커스텀 디자인
- ⚛️ React 18+ 지원
- 🎭 Tailwind CSS를 통한 스타일링
- 📦 Rollup을 통한 번들링

## 💾 Installation

```bash
npm install @edentns/shadcn-tailwind-ui

Or

yarn add @edentns/shadcn-tailwind-ui
```

## 🔨 Usage

```tsx
import { SCButton } from '@edentns/shadcn-tailwind-ui';

<SCButton>Click me</SCButton>;
```

## 📙 Project Structure and Directory Description

```bash
📦src
┣ 📂assets               # 이미지, 폰트 등 정적 리소스 파일들을 저장하는 폴더
┣ 📂components           # 리액트 컴포넌트들을 저장하는 폴더
┃ ┣ 📂custom             # 커스텀으로 만든 shadcn/ui 기반 컴포넌트들
┃ ┃ ┣ 📂accordion        # 아코디언 커스텀 컴포넌트
┃ ┃ ┣ 📂alertDialog      # 알럿 다이얼로그 커스텀 컴포넌트
┃ ┃ ┣ 📂button           # 버튼 커스텀 컴포넌트
┃ ┃ ┣ 📂checkbox         # 체크박스 커스텀 컴포넌트
┃ ┃ ┣ 📂combobox         # 콤보박스 커스텀 컴포넌트
┃ ┃ ┣ 📂input            # 인풋 커스텀 컴포넌트
┃ ┃ ┣ 📂sidebar          # 사이드바 커스텀 컴포넌트
┃ ┃ ┗ 📂switch           # 스위치 커스텀 컴포넌트
┃ ┗ 📂ui                 # shadcn/ui의 기본 컴포넌트들
┃   ┣ 📜accordion.tsx    # 아코디언 기본 컴포넌트
┃   ┣ 📜alert-dialog.tsx # 알럿 다이얼로그 기본 컴포넌트
┃   ┣ 📜avatar.tsx       # 아바타 기본 컴포넌트
┃   # ... 기타 기본 UI 컴포넌트들
┣ 📂hooks                 # 커스텀 훅들을 저장하는 폴더
┃ ┗ 📜use-mobile.tsx      # 모바일 환경 감지 훅
┣ 📂lib                   # 유틸리티 함수들을 저장하는 폴더
┃ ┗ 📜utils.ts            # 공통으로 사용되는 유틸리티 함수들
┣ 📂stories               # Storybook 관련 파일들을 저장하는 폴더
┃ ┣ 📂assets              # Storybook에서 사용되는 정적 리소스들
┃ ┣ 📜SCAccordion.stories.tsx   # 아코디언 컴포넌트의 스토리
┃ ┣ 📜SCAlertDialog.stories.tsx # 알럿 다이얼로그 컴포넌트의 스토리
┃ # ... 기타 컴포넌트 스토리들
┣ 📂styles               # 전역 스타일 파일들을 저장하는 폴더
┃ ┗ 📜globals.css        # 전역으로 적용되는 CSS
┣ 📜index.ts             # 라이브러리의 진입점 파일
┗ 📜vite-env.d.ts        # Vite 환경에서 사용되는 타입 선언 파일
```

<br>

## 📜 License

This software is licensed under the MIT © [`EdenTNS`](https://edentns.com/)
