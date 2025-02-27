<br />

<p align="center">
  <img src="https://github.com/EDEN-TNS/assets-ui/blob/main/images/eden-tns-logo.png?raw=true" alt="EdenTNS Logo" width="500" />
</p>

<br />

<p align="center" style="display: flex; gap: 4px; justify-content: center; margin-bottom: 20px;">
  <a href="https://www.npmjs.com/package/@edentns/shadcn-tailwind-ui">
        <img src="https://badgen.net/npm/v/@edentns/shadcn-tailwind-ui" alt="Latest release" />
    </a>
    <a href="https://github.com/EDEN-TNS/shadcn-tailwind-ui/blob/main/LICENSE">
        <img src="https://badgen.net/badge/license/MIT/blue" alt="GitHub license" />
    </a>
    <a href="https://github.com/EDEN-TNS">
        <img
            src="https://img.shields.io/badge/%3C/%3E%20with%20by-EDENTNS-FF0000?style=flat-square&logo=code&logoColor=white"
            alt="with by EDENTNS"
        />
    </a>
</p>

# @edentns/shadcn-tailwind-ui

shadcn UI를 기반으로 제작된 React 컴포넌트 라이브러리입니다.

## 🎨 Features

- 🎨 shadcn UI 기반의 커스텀 디자인
- ⚛️ React 18+ 지원
- 🎭 Tailwind CSS를 통한 스타일링
- 📦 Vite를 통한 번들링

## 💾 Installation

```bash
npm install @edentns/shadcn-tailwind-ui

or

yarn add @edentns/shadcn-tailwind-ui
```

## 🔨 Usage

[`storybook`](https://67beae8d6c317a64d5e86707-mmrtmdvnes.chromatic.com/)

## 📙 Project Structure and Directory Description

```bash
📦src
┣ 📂assets              // 이미지, 아이콘 등 정적 리소스 파일
┣ 📂components          // 컴포넌트 모음
┃ ┣ 📂custom           // 커스텀 컴포넌트 (shadcn/ui 기반으로 확장된 컴포넌트)
┃ ┃ ┣ 📂accordion      // 아코디언 관련 커스텀 컴포넌트
┃ ┃ ..... // 커스텀 컴포넌트
┃ ┗ 📂ui               // 기본 UI 컴포넌트 (shadcn/ui 원본 컴포넌트)
┃ ┃ ┣ 📜accordion.tsx  // 아코디언 기본 컴포넌트
┃ ┃ ..... // shadcn/ui 기본 컴포넌트
┣ 📂hooks              // 커스텀 React 훅
┃ ┗ 📜use-mobile.tsx   // 모바일 환경 감지 훅
┣ 📂lib                // 유틸리티 함수 및 헬퍼 라이브러리
┃ ┗ 📜utils.ts         // 공통 유틸리티 함수
┣ 📂stories            // Storybook 문서화 파일
┃ ┣ 📂assets           // Storybook에서 사용되는 리소스
┃ ┣ 📜Home.mdx         // Storybook 메인 페이지
┃ ┣ 📜SCAccordion.stories.tsx // 아코디언 컴포넌트 스토리
┃ .....
┣ 📂styles             // 전역 스타일 및 테마 관련 파일
┃ ┗ 📜globals.css      // 전역 CSS 스타일
┣ 📜index.ts           // 라이브러리 진입점 및 컴포넌트 export
┗ 📜vite-env.d.ts      // Vite 타입 정의 파일
```

<br>

## 📜 License

This software is licensed under the MIT © [`EdenTNS`](https://edentns.com/)
