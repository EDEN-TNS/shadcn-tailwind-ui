import type { Meta, StoryObj } from '@storybook/react';

import { SCBadge } from '@/components/custom/badge/SCBadge';

const meta: Meta<typeof SCBadge> = {
    title: 'Components/SCBadge',
    component: SCBadge,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
# 뱃지 컴포넌트

\`SCBadge\` 컴포넌트는 상태, 카테고리 또는 라벨을 표시하기 위한 작은 UI 요소입니다.

## 기본 기능
- 다양한 스타일 변형 지원 (default, secondary, outline, destructive, primary)
- 간결한 정보 표시에 적합
- 인라인 텍스트나 아이콘과 함께 사용 가능
- 커스텀 스타일링 지원

## 사용법

\`\`\`jsx
import { SCBadge } from '@edentns/shadcn-tailwind-ui';

<SCBadge>기본 뱃지</SCBadge>
<SCBadge variant="secondary">보조 뱃지</SCBadge>
<SCBadge variant="outline">아웃라인 뱃지</SCBadge>
<SCBadge variant="destructive">경고 뱃지</SCBadge>
<SCBadge variant="primary">주요 뱃지</SCBadge>
\`\`\`

## 속성

| 속성 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| variant | 'default' \| 'secondary' \| 'outline' \| 'destructive' \| 'primary' | 'default' | 뱃지 스타일 변형 |
| className | string | undefined | 추가 CSS 클래스 |
| children | React.ReactNode | required | 뱃지 내용 |
                `,
            },
        },
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'secondary', 'outline', 'destructive', 'primary'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof SCBadge>;

export const Default: Story = {
    args: {
        children: '기본 뱃지',
        variant: 'default',
    },
};

export const Secondary: Story = {
    args: {
        children: '보조 뱃지',
        variant: 'secondary',
    },
};

export const Outline: Story = {
    args: {
        children: '아웃라인 뱃지',
        variant: 'outline',
    },
};

export const Destructive: Story = {
    args: {
        children: '경고 뱃지',
        variant: 'destructive',
    },
};

export const Primary: Story = {
    args: {
        children: '주요 뱃지',
        variant: 'primary',
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-2">
            <SCBadge variant="default">기본</SCBadge>
            <SCBadge variant="secondary">보조</SCBadge>
            <SCBadge variant="outline">아웃라인</SCBadge>
            <SCBadge variant="destructive">경고</SCBadge>
            <SCBadge variant="primary">주요</SCBadge>
        </div>
    ),
};
