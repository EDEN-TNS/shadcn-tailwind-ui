import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { SCCombobox } from '@/components/custom/combobox/SCCombobox';

const meta: Meta<typeof SCCombobox> = {
    title: 'Components/SCCombobox',
    component: SCCombobox,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: '검색 기능을 지원하는 드롭다운 선택 컴포넌트',
        docs: {
            description: {
                component: `
# 콤보박스 컴포넌트

\`SCCombobox\` 컴포넌트는 드롭다운 목록에서 항목을 선택하고 검색할 수 있는 입력 요소입니다.

## 기본 기능
- 드롭다운 목록에서 항목 선택 지원
- 검색 기능으로 항목 필터링 지원
- 커스텀 플레이스홀더 텍스트 지원
- 검색 결과 없음 메시지 커스터마이징
- 제어/비제어 컴포넌트 모두 지원
- 키보드 네비게이션 지원

## 사용법

\`\`\`jsx
import { SCCombobox } from '@edentns/shadcn-tailwind-ui';

const options = [
  { value: 'apple', label: '사과' },
  { value: 'banana', label: '바나나' },
  { value: 'orange', label: '오렌지' },
];

// 기본 콤보박스
<SCCombobox options={options} placeholder="과일을 선택하세요" />

// 기본값이 있는 콤보박스
<SCCombobox options={options} value="apple" />

// 커스텀 텍스트가 있는 콤보박스
<SCCombobox 
  options={options}
  placeholder="과일을 선택하세요"
  searchPlaceholder="과일 검색..."
  emptyText="검색 결과가 없습니다"
/>
\`\`\`

## 속성

| 속성 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| options | { value: string; label: string }[] | required | 선택 가능한 옵션 배열 |
| value | string | undefined | 현재 선택된 값 (제어 컴포넌트용) |
| defaultValue | string | undefined | 초기 선택 값 |
| onValueChange | (value: string) => void | undefined | 값 변경 시 호출되는 함수 |
| placeholder | string | '선택하세요...' | 선택 전 표시되는 텍스트 |
| searchPlaceholder | string | '검색...' | 검색 입력란 플레이스홀더 |
| emptyText | string | '결과 없음' | 검색 결과가 없을 때 표시되는 텍스트 |
| disabled | boolean | false | 비활성화 여부 |
| className | string | undefined | 추가 CSS 클래스 |
`,
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SCCombobox>;

const options = [
    { value: 'apple', label: '사과' },
    { value: 'banana', label: '바나나' },
    { value: 'orange', label: '오렌지' },
    { value: 'grape', label: '포도' },
];

// 기본 콤보박스
export const Default: Story = {
    args: {
        options,
        placeholder: '선택하세요...',
    },
};

// 기본값이 있는 콤보박스
export const WithValue: Story = {
    args: {
        options,
        value: 'apple',
    },
};

// 상태 관리가 포함된 제어 컴포넌트 예제
export const Controlled: Story = {
    render: function ControlledExample() {
        const [value, setValue] = React.useState('apple');
        return (
            <div className="space-y-2">
                <p className="text-sm text-muted-foreground">선택된 값: {value}</p>
                <SCCombobox options={options} value={value} onValueChange={setValue} />
            </div>
        );
    },
};

// 커스텀 텍스트
export const CustomPlaceholders: Story = {
    args: {
        options,
        placeholder: '과일을 선택하세요',
        searchPlaceholder: '과일 검색...',
        emptyText: '검색 결과가 없습니다',
    },
};
