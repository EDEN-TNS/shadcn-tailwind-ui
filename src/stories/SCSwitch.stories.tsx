import type { Meta, StoryObj } from '@storybook/react';

import { SCSwitch } from '@/components/custom/switch/SCSwitch';

const meta: Meta<typeof SCSwitch> = {
    title: 'Components/SCSwitch',
    component: SCSwitch,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: '레이블과 설명을 지원하는 스위치 컴포넌트',
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
