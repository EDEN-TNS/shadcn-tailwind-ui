import type { Meta, StoryObj } from '@storybook/react';

import { SCSelect } from '@/components/custom/select/SCSelect';

const meta: Meta<typeof SCSelect> = {
    title: 'Components/SCSelect',
    component: SCSelect,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
# 셀렉트 컴포넌트

\`SCSelect\` 컴포넌트는 드롭다운 목록에서 옵션을 선택할 수 있는 UI 요소입니다.

## 기본 기능
- 단일 옵션 선택 지원
- 옵션 그룹화 지원
- 스크롤 가능한 드롭다운 지원
- 비활성화 상태 지원
- 커스텀 플레이스홀더 지원
- 다양한 옵션 형식 지원

## 사용법

\`\`\`jsx
import { SCSelect } from '@edentns/shadcn-tailwind-ui';

const options = [
  { value: 'apple', label: '사과' },
  { value: 'banana', label: '바나나' },
  { value: 'orange', label: '오렌지' },
];

// 기본 셀렉트
<SCSelect options={options} placeholder="과일을 선택하세요" />

// 그룹화된 옵션
const groupedOptions = [
  { value: 'kr-seoul', label: '서울', group: '한국' },
  { value: 'kr-busan', label: '부산', group: '한국' },
  { value: 'jp-tokyo', label: '도쿄', group: '일본' },
];

<SCSelect options={groupedOptions} placeholder="도시를 선택하세요" />

// 스크롤 가능한 드롭다운
<SCSelect 
  options={manyOptions} 
  scrollable={true} 
  maxHeight={200} 
/>
\`\`\`
`,
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SCSelect>;

const basicOptions = [
    { value: 'apple', label: '사과' },
    { value: 'banana', label: '바나나' },
    { value: 'orange', label: '오렌지' },
];

const groupedOptions = [
    { value: 'kr-seoul', label: '서울', group: '한국 Group' },
    { value: 'kr-busan', label: '부산', group: '한국 Group' },
    { value: 'jp-tokyo', label: '도쿄', group: '일본 Group' },
    { value: 'jp-osaka', label: '오사카', group: '일본 Group' },
];

const manyOptions = Array.from({ length: 50 }, (_, i) => ({
    value: `option-${i}`,
    label: `옵션 ${i + 1}`,
}));

export const Basic: Story = {
    args: {
        options: basicOptions,
        placeholder: '과일을 선택하세요',
    },
};

export const Grouped: Story = {
    args: {
        options: groupedOptions,
        placeholder: '도시를 선택하세요',
    },
};

export const Scrollable: Story = {
    args: {
        options: manyOptions,
        placeholder: '옵션을 선택하세요',
        scrollable: true,
        maxHeight: 200,
    },
};

export const Disabled: Story = {
    args: {
        options: basicOptions,
        placeholder: '선택 불가',
        disabled: true,
    },
};
