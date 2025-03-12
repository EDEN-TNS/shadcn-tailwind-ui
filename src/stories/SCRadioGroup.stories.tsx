import type { Meta, StoryObj } from '@storybook/react';

import { SCButton } from '@/components/custom/button/SCButton';
import { SCCard } from '@/components/custom/card/SCCard';
import { SCLabel } from '@/components/custom/label/SCLabel';
import { SCRadioGroup } from '@/components/custom/radioGroup/SCRadioGroup';

const meta: Meta<typeof SCRadioGroup> = {
    title: 'Components/SCRadioGroup',
    component: SCRadioGroup,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
# 라디오 그룹 컴포넌트

\`SCRadioGroup\` 컴포넌트는 사용자가 여러 옵션 중 하나만 선택할 수 있는 라디오 버튼 그룹을 제공합니다.

## 사용 방법

\`\`\`jsx
import { SCRadioGroup } from '@edentns/shadcn-tailwind-ui';

const options = [
  { value: 'option-one', label: '옵션 1' },
  { value: 'option-two', label: '옵션 2' },
];

<SCRadioGroup defaultValue="option-one" options={options} />
\`\`\`

## 설명이 있는 옵션

\`\`\`jsx
const options = [
  { 
    value: 'light', 
    label: '라이트 모드', 
    description: '밝은 배경의 테마를 사용합니다.' 
  },
  { 
    value: 'dark', 
    label: '다크 모드', 
    description: '어두운 배경의 테마를 사용합니다.' 
  },
];

<SCRadioGroup defaultValue="light" options={options} withDescription />
\`\`\`

## 속성

| 속성 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| options | RadioOption[] | required | 라디오 옵션 배열 |
| defaultValue | string | undefined | 기본 선택 값 |
| value | string | undefined | 현재 선택 값 |
| onValueChange | (value: string) => void | undefined | 값 변경 시 호출되는 함수 |
| disabled | boolean | false | 전체 비활성화 여부 |
| required | boolean | false | 필수 입력 여부 |
| name | string | undefined | 폼 제출 시 사용되는 이름 |
| withDescription | boolean | false | 설명 표시 여부 |
| className | string | undefined | 추가 CSS 클래스 |

## RadioOption 타입

| 속성 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| value | string | required | 항목의 값 |
| label | string | required | 항목의 레이블 |
| id | string | undefined | 항목의 ID (자동 생성됨) |
| disabled | boolean | false | 항목 비활성화 여부 |
| description | string | undefined | 항목 설명 (withDescription이 true일 때 표시) |
`,
            },
        },
    },
    decorators: [
        Story => (
            <div className="sb-unstyled">
                <div className="bg-background p-6 text-foreground">
                    <Story />
                </div>
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof SCRadioGroup>;

export const Docs: Story = {
    args: {
        defaultValue: 'option-one',
        options: [
            { value: 'option-one', label: '옵션 1' },
            { value: 'option-two', label: '옵션 2' },
        ],
    },
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
};

export const Default: Story = {
    args: {
        defaultValue: 'option-one',
        options: [
            { value: 'option-one', label: '옵션 1' },
            { value: 'option-two', label: '옵션 2' },
        ],
    },
};

export const WithDisabledOption: Story = {
    args: {
        defaultValue: 'option-one',
        options: [
            { value: 'option-one', label: '활성화된 옵션' },
            { value: 'option-two', label: '비활성화된 옵션', disabled: true },
        ],
    },
};

export const WithDescriptions: Story = {
    args: {
        defaultValue: 'system',
        withDescription: true,
        options: [
            {
                value: 'light',
                label: '라이트 모드',
                description: '밝은 배경의 테마를 사용합니다.',
            },
            {
                value: 'dark',
                label: '다크 모드',
                description: '어두운 배경의 테마를 사용합니다.',
            },
            {
                value: 'system',
                label: '시스템 설정',
                description: '시스템 테마 설정을 따릅니다.',
            },
        ],
    },
};

export const FormExample: Story = {
    render: () => (
        <SCCard className="mx-auto w-full max-w-md p-6">
            <h3 className="mb-4 text-lg font-medium">알림 설정</h3>
            <form className="space-y-6">
                <div className="space-y-4">
                    <SCLabel>알림 받기</SCLabel>
                    <SCRadioGroup
                        defaultValue="all"
                        options={[
                            { value: 'all', label: '모든 새 메시지' },
                            { value: 'mentions', label: '멘션과 다이렉트 메시지만' },
                            { value: 'none', label: '알림 없음' },
                        ]}
                    />
                </div>
                <SCButton type="submit">저장</SCButton>
            </form>
        </SCCard>
    ),
};

export const PreferenceSelection: Story = {
    render: () => (
        <SCCard className="mx-auto w-full max-w-md p-6">
            <h3 className="mb-4 text-lg font-medium">테마 선택</h3>
            <div className="space-y-4">
                <SCRadioGroup
                    defaultValue="system"
                    withDescription
                    options={[
                        {
                            value: 'light',
                            label: '라이트 모드',
                            description: '밝은 배경의 테마를 사용합니다.',
                        },
                        {
                            value: 'dark',
                            label: '다크 모드',
                            description: '어두운 배경의 테마를 사용합니다.',
                        },
                        {
                            value: 'system',
                            label: '시스템 설정',
                            description: '시스템 테마 설정을 따릅니다.',
                        },
                    ]}
                />
            </div>
        </SCCard>
    ),
};
