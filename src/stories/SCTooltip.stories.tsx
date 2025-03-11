import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/button';
import { SCTooltip } from '@/components/custom/tooltip/SCTooltip';

const meta: Meta<typeof SCTooltip> = {
    title: 'Components/SCTooltip',
    component: SCTooltip,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: '요소에 대한 추가 정보를 제공하는 툴팁 컴포넌트',
        docs: {
            description: {
                component: `
# 툴팁 컴포넌트

\`SCTooltip\` 컴포넌트는 사용자가 요소에 마우스를 올리거나 포커스할 때 추가 정보를 표시하는 팝업을 제공합니다.

## 기본 기능
- 커스텀 트리거 요소 지원
- 툴팁 위치 조정 가능 (상단, 하단, 좌측, 우측)
- 툴팁 정렬 방식 지원 (시작, 중앙, 끝)
- 툴팁 표시 지연 시간 설정 가능
- 애니메이션 효과 내장

## 사용법

\`\`\`jsx
import { SCTooltip } from '@edentns/shadcn-tailwind-ui';

// 기본 툴팁
<SCTooltip content="도움말 내용">
  <Button>마우스를 올려보세요</Button>
</SCTooltip>

// 위치가 다른 툴팁
<SCTooltip content="우측에 표시" side="right">
  <Button>우측 툴팁</Button>
</SCTooltip>

// 지연 시간이 있는 툴팁
<SCTooltip content="지연 표시" delayDuration={500}>
  <Button>지연 툴팁</Button>
</SCTooltip>
\`\`\`
`,
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SCTooltip>;

export const Default: Story = {
    args: {
        content: '기본 툴팁입니다.',
        children: <Button>마우스를 올려보세요</Button>,
    },
};

export const Positions: Story = {
    render: () => (
        <div className="flex items-center justify-center gap-4 p-16">
            <SCTooltip content="위쪽 툴팁" side="top">
                <Button>Top</Button>
            </SCTooltip>
            <SCTooltip content="오른쪽 툴팁" side="right">
                <Button>Right</Button>
            </SCTooltip>
            <SCTooltip content="아래쪽 툴팁" side="bottom">
                <Button>Bottom</Button>
            </SCTooltip>
            <SCTooltip content="왼쪽 툴팁" side="left">
                <Button>Left</Button>
            </SCTooltip>
        </div>
    ),
};

export const Alignments: Story = {
    render: () => (
        <div className="flex flex-col items-center gap-4 p-16">
            <SCTooltip content="시작 정렬" align="start">
                <Button className="w-40">Align Start</Button>
            </SCTooltip>
            <SCTooltip content="중앙 정렬" align="center">
                <Button className="w-40">Align Center</Button>
            </SCTooltip>
            <SCTooltip content="끝 정렬" align="end">
                <Button className="w-40">Align End</Button>
            </SCTooltip>
        </div>
    ),
};

export const CustomDelay: Story = {
    args: {
        content: '1초 후에 나타나는 툴팁입니다.',
        children: <Button>지연 시간 1초</Button>,
        delayDuration: 1000,
    },
};

export const CustomContent: Story = {
    args: {
        content: (
            <div className="flex flex-col gap-1">
                <strong className="font-semibold">커스텀 툴팁</strong>
                <p>여러 줄의 내용을</p>
                <p>표시할 수 있습니다.</p>
            </div>
        ),
        children: <Button>커스텀 내용</Button>,
    },
};

export const WithDifferentOffsets: Story = {
    render: () => (
        <div className="flex items-center justify-center gap-4 p-16">
            <SCTooltip content="기본 간격 (4px)" side="top">
                <Button>기본 간격</Button>
            </SCTooltip>
            <SCTooltip content="큰 간격 (8px)" side="top" sideOffset={8}>
                <Button>큰 간격</Button>
            </SCTooltip>
            <SCTooltip content="더 큰 간격 (12px)" side="top" sideOffset={12}>
                <Button>더 큰 간격</Button>
            </SCTooltip>
        </div>
    ),
};
