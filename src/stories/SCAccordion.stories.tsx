import type { Meta, StoryObj } from '@storybook/react';
import { SCAccordion, SCAccordionComponent } from '@/components/custom/accordion/SCAccordion';

const meta: Meta<typeof SCAccordion> = {
    title: 'Components/SCAccordion',
    component: SCAccordion,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: '접을 수 있는 아코디언 컴포넌트',
    },
};

export default meta;
type Story = StoryObj<typeof SCAccordion>;

const defaultItems = [
    {
        id: '1',
        title: '아코디언 항목 1',
        content: '첫 번째 아코디언의 내용입니다.',
    },
    {
        id: '2',
        title: '아코디언 항목 2',
        content: '두 번째 아코디언의 내용입니다.',
    },
    {
        id: '3',
        title: '아코디언 항목 3',
        content: '세 번째 아코디언의 내용입니다.',
    },
];

// 기본 아코디언 예제
export const Default: Story = {
    args: {
        items: defaultItems,
    },
};

// 다중 선택이 가능한 아코디언 - 여러 항목을 동시에 열 수 있습니다.
export const Multiple: StoryObj<SCAccordionComponent> = {
    args: {
        items: defaultItems,
        type: 'multiple',
        defaultValue: [],
    },
};

export const WithDefaultValue: Story = {
    args: {
        items: defaultItems,
        defaultValue: '1',
    },
};

// 크기별 아코디언 예제 - sm, default, lg 사이즈를 비교할 수 있습니다.
export const Sizes: Story = {
    render: () => (
        <div className="space-y-4">
            <SCAccordion items={defaultItems} size="sm" />
            <SCAccordion items={defaultItems} size="default" />
            <SCAccordion items={defaultItems} size="lg" />
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: '아코디언의 세 가지 크기(sm, default, lg)를 비교할 수 있습니다.',
            },
        },
    },
};

// 커스텀 스타일이 적용된 아코디언
export const CustomStyled: Story = {
    args: {
        customClassName: 'bg-slate-100 rounded-lg p-4',
        items: [
            {
                id: 'custom-1',
                title: '커스텀 스타일 항목 1',
                content: '커스텀 스타일이 적용된 아코디언입니다.',
            },
            {
                id: 'custom-2',
                title: '커스텀 스타일 항목 2',
                content: '원하는 스타일을 customClassName으로 적용할 수 있습니다.',
            },
        ],
    },
};

// 컴포넌트가 포함된 아코디언
export const WithComponents: Story = {
    args: {
        items: [
            {
                id: 'component-1',
                title: '컴포넌트 포함 항목',
                content: (
                    <div className="flex flex-col gap-2">
                        <p>컴포넌트를 포함할 수 있습니다.</p>
                        <button className="rounded bg-blue-500 px-4 py-2 text-white" type="button">
                            버튼 예시
                        </button>
                    </div>
                ),
            },
            {
                id: 'component-2',
                title: '복잡한 내용 항목',
                content: (
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded bg-gray-100 p-4">영역 1</div>
                        <div className="rounded bg-gray-100 p-4">영역 2</div>
                    </div>
                ),
            },
        ],
    },
};
