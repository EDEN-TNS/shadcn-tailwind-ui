import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { SCInput } from '@/components/custom/input/SCInput';
import { SCLabel } from '@/components/custom/label/SCLabel';

const meta: Meta<typeof SCLabel> = {
    title: 'Components/SCLabel',
    component: SCLabel,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: '폼 요소에 사용되는 레이블 컴포넌트',
        docs: {
            description: {
                component: `
# 레이블 컴포넌트

\`SCLabel\` 컴포넌트는 폼 요소에 연결되는 레이블을 제공합니다.

## 기본 기능
- 폼 요소와 연결을 위한 htmlFor 속성 지원
- 에러 상태 표시 기능
- 필수 입력 표시 지원
- 커스텀 스타일링 지원
- 다양한 폼 요소와 함께 사용 가능

## 사용법

\`\`\`jsx
import { SCLabel } from '@edentns/shadcn-tailwind-ui';
import { SCInput } from '@edentns/shadcn-tailwind-ui';

// 기본 레이블
<SCLabel htmlFor="email">이메일</SCLabel>
<SCInput id="email" type="email" />

// 에러 상태 레이블
<SCLabel htmlFor="email" error={true}>이메일</SCLabel>
<SCInput id="email" type="email" error={true} />

// 커스텀 스타일 레이블
<SCLabel htmlFor="name" className="text-blue-500">이름</SCLabel>
<SCInput id="name" />
\`\`\`

## 속성

| 속성 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| htmlFor | string | undefined | 연결할 폼 요소의 ID |
| error | boolean | false | 에러 상태 표시 여부 |
| className | string | undefined | 추가 CSS 클래스 |
| children | React.ReactNode | required | 레이블 내용 |
`,
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SCLabel>;

export const Default: Story = {
    args: {
        children: '기본 레이블',
        htmlFor: 'input',
    },
};

export const Required: Story = {
    args: {
        children: '이메일',
        htmlFor: 'email',
    },
};

export const WithError: Story = {
    args: {
        children: '에러 상태 레이블',
        htmlFor: 'error-input',
        error: true,
    },
};

export const WithCustomClass: Story = {
    args: {
        children: '커스텀 스타일 레이블',
        htmlFor: 'custom-input',
        className: 'text-blue-500 font-bold',
    },
};

export const WithInput: Story = {
    render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <SCLabel htmlFor="email">이메일</SCLabel>
            <SCInput type="email" id="email" placeholder="이메일을 입력하세요" />
        </div>
    ),
};

export const RequiredWithInput: Story = {
    render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <SCLabel htmlFor="email">이메일</SCLabel>
            <SCInput type="email" id="email" placeholder="이메일을 입력하세요" required />
        </div>
    ),
};

export const ErrorWithInput: Story = {
    render: function ErrorWithInput() {
        const [value, setValue] = React.useState('invalid-email');
        const hasError = !value.includes('@');

        return (
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <SCLabel htmlFor="email" error={hasError}>
                    이메일
                </SCLabel>
                <SCInput
                    type="email"
                    id="email"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    error={hasError}
                    helperText={hasError ? '올바른 이메일 형식이 아닙니다.' : undefined}
                />
            </div>
        );
    },
};
