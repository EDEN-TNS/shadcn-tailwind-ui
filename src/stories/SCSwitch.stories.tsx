import type { Meta, StoryObj } from '@storybook/react';

import { SCSwitch } from '@/components/custom/switch/SCSwitch';

const meta: Meta<typeof SCSwitch> = {
    title: 'Components/SCSwitch',
    component: SCSwitch,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: '레이블과 설명을 지원하는 스위치 컴포넌트',
        docs: {
            description: {
                component: `
# 스위치 컴포넌트

\`SCSwitch\` 컴포넌트는 켜기/끄기 상태를 전환할 수 있는 토글 스위치입니다.

## 기본 기능
- 레이블 텍스트 지원
- 설명 텍스트 지원
- 레이블 위치 조정 가능 (왼쪽, 오른쪽, 상단)
- 에러 상태 표시 기능
- 도움말 텍스트 지원
- 비활성화 상태 지원
- 제어/비제어 컴포넌트 모두 지원

## 사용법

\`\`\`jsx
import { SCSwitch } from '@edentns/shadcn-tailwind-ui';

// 기본 스위치
<SCSwitch label="알림 받기" />

// 설명이 있는 스위치
<SCSwitch 
  label="마케팅 수신 동의" 
  description="새로운 기능과 할인 정보를 이메일로 받아보실 수 있습니다." 
/>

// 에러 상태의 스위치
<SCSwitch 
  label="필수 동의" 
  error={true} 
  helperText="이 항목은 필수입니다." 
/>

// 레이블 위치 변경
<SCSwitch label="왼쪽 레이블" labelPosition="left" />
\`\`\`
`,
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SCSwitch>;

export const Default: Story = {
    args: {
        label: '알림 받기',
    },
};

export const WithDescription: Story = {
    args: {
        label: '마케팅 수신 동의',
        description: '새로운 기능과 할인 정보를 이메일로 받아보실 수 있습니다.',
    },
};

export const WithError: Story = {
    args: {
        label: '에러 상태',
        error: true,
        helperText: '필수 항목입니다.',
    },
};

export const LabelPositions: Story = {
    render: () => (
        <div className="flex flex-col gap-4">
            <SCSwitch label="왼쪽 레이블" labelPosition="left" />
            <SCSwitch label="오른쪽 레이블" labelPosition="right" />
            <SCSwitch label="상단 레이블" labelPosition="top" />
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        label: '비활성화 상태',
        disabled: true,
    },
};
