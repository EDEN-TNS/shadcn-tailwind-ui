import type { Meta, StoryObj } from '@storybook/react';

import { Mail } from 'lucide-react';
import { SCButton } from '@/components/custom/button/SCButton';

const meta: Meta<typeof SCButton> = {
    title: 'Components/SCButton',
    component: SCButton,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: '다양한 스타일과 상태를 지원하는 버튼 컴포넌트',
        docs: {
            description: {
                component: `
# 버튼 컴포넌트

\`SCButton\` 컴포넌트는 사용자 상호작용을 위한 다양한 스타일과 상태를 지원하는 버튼입니다.

## 기본 기능
- 다양한 스타일 변형 지원 (default, primary, destructive, outline, secondary, ghost, link)
- 로딩 상태 표시 기능
- 아이콘 포함 지원
- 비활성화 상태 지원
- 커스텀 로딩 아이콘 및 텍스트 지원

## 사용법

\`\`\`jsx
import { SCButton } from '@edentns/shadcn-tailwind-ui';
import { Mail } from 'lucide-react';

// 기본 버튼
<SCButton>클릭하세요</SCButton>

// 주요 버튼
<SCButton variant="primary">저장</SCButton>

// 아이콘이 있는 버튼
<SCButton>
  <Mail className="mr-2 h-4 w-4" /> 이메일 보내기
</SCButton>

// 로딩 상태 버튼
<SCButton isLoading>처리 중...</SCButton>
\`\`\`

## 속성

| 속성 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| variant | 'default' \| 'primary' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link' | 'default' | 버튼 스타일 변형 |
| size | 'default' \| 'sm' \| 'lg' \| 'icon' | 'default' | 버튼 크기 |
| isLoading | boolean | false | 로딩 상태 표시 여부 |
| loadingText | string | undefined | 로딩 중 표시할 텍스트 |
| loadingIcon | React.ReactNode | undefined | 커스텀 로딩 아이콘 |
| disabled | boolean | false | 버튼 비활성화 여부 |
| className | string | undefined | 추가 CSS 클래스 |
| children | React.ReactNode | required | 버튼 내용 |
                `,
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SCButton>;

export const Default: Story = {
    args: {
        children: '기본 버튼',
    },
};

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: '주요 버튼',
    },
};

export const WithIcon: Story = {
    args: {
        children: (
            <>
                <Mail className="mr-2 h-4 w-4" /> 이메일 보내기
            </>
        ),
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
        children: '로딩 중',
    },
};

export const LoadingWithCustomIcon: Story = {
    args: {
        isLoading: true,
        loadingIcon: <span className="mr-2">🔄</span>,
        loadingText: '처리 중...',
        children: '클릭',
    },
};

export const Variants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <SCButton variant="default">Default</SCButton>
            <SCButton variant="primary">Primary</SCButton>
            <SCButton variant="destructive">Destructive</SCButton>
            <SCButton variant="outline">Outline</SCButton>
            <SCButton variant="secondary">Secondary</SCButton>
            <SCButton variant="ghost">Ghost</SCButton>
            <SCButton variant="link">Link</SCButton>
        </div>
    ),
};
