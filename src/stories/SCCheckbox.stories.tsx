import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { SCCheckbox } from '@/components/custom/checkbox/SCCheckbox';

const meta: Meta<typeof SCCheckbox> = {
    title: 'Components/SCCheckbox',
    component: SCCheckbox,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: '레이블을 지원하는 체크박스 컴포넌트',
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
