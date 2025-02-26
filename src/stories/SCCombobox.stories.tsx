import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { SCCombobox } from '@/components/custom/combobox/SCCombobox';

const meta: Meta<typeof SCCombobox> = {
    title: 'Components/SCCombobox',
    component: SCCombobox,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: '검색 기능을 지원하는 드롭다운 선택 컴포넌트',
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
