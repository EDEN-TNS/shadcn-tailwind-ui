import type { Meta, StoryObj } from '@storybook/react';

import { SCSelect } from '@/components/custom/select/SCSelect';

const meta: Meta<typeof SCSelect> = {
    title: 'Components/SCSelect',
    component: SCSelect,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
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
