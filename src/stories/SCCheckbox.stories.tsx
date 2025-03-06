import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { SCCheckbox } from '@/components/custom/checkbox/SCCheckbox';

const meta: Meta<typeof SCCheckbox> = {
    title: 'Components/SCCheckbox',
    component: SCCheckbox,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: '레이블을 지원하는 체크박스 컴포넌트',
        docs: {
            description: {
                component: `
# 체크박스 컴포넌트

\`SCCheckbox\` 컴포넌트는 사용자가 여러 옵션 중에서 선택할 수 있는 체크박스 입력 요소입니다.

## 기본 기능
- 레이블 텍스트 지원
- 체크/언체크 상태 관리
- 비활성화 상태 지원
- 필수 입력 표시 지원
- 제어/비제어 컴포넌트 모두 지원
- 커스텀 스타일링 지원

## 사용법

\`\`\`jsx
import { SCCheckbox } from '@edentns/shadcn-tailwind-ui';

// 기본 체크박스
<SCCheckbox label="동의합니다" />

// 기본값이 체크된 체크박스
<SCCheckbox label="기본 체크됨" defaultChecked={true} />

// 비활성화된 체크박스
<SCCheckbox label="비활성화" disabled={true} />

// 필수 입력 체크박스
<SCCheckbox label="필수 항목" required={true} />
\`\`\`

## 속성

| 속성 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| label | string | undefined | 체크박스 레이블 |
| checked | boolean | undefined | 체크 상태 (제어 컴포넌트용) |
| defaultChecked | boolean | false | 초기 체크 상태 |
| onCheckedChange | (checked: boolean) => void | undefined | 체크 상태 변경 시 호출되는 함수 |
| disabled | boolean | false | 비활성화 여부 |
| required | boolean | false | 필수 입력 여부 |
| className | string | undefined | 추가 CSS 클래스 |
`,
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SCCheckbox>;

export const Default: Story = {
    args: {
        label: '체크박스',
    },
};

export const WithoutLabel: Story = {
    args: {},
};

export const Checked: Story = {
    args: {
        label: '체크된 상태',
        checked: true,
    },
};

export const Disabled: Story = {
    args: {
        label: '비활성화 상태',
        disabled: true,
    },
};

export const DisabledChecked: Story = {
    args: {
        label: '비활성화 및 체크 상태',
        disabled: true,
        defaultChecked: true,
    },
};

// 기본값이 체크된 체크박스
export const DefaultChecked: Story = {
    args: {
        label: '기본값이 체크된 체크박스',
        defaultChecked: true,
    },
};

// 필수 입력 체크박스
export const Required: Story = {
    args: {
        label: '필수 입력 항목',
        required: true,
    },
};

// 제어 컴포넌트
export const Controlled: Story = {
    render: () => {
        const [checked, setChecked] = React.useState(false);
        return (
            <SCCheckbox
                label="제어 컴포넌트"
                checked={checked}
                onCheckedChange={checked => setChecked(checked === true)}
            />
        );
    },
};
