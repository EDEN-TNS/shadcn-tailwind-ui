import { MenuItem, SCContextMenu } from '@/components/custom/contextMenu/SCContextMenu';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SCContextMenu> = {
    title: 'Components/SCContextMenu',
    component: SCContextMenu,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
# 컨텍스트 메뉴 컴포넌트

\`SCContextMenu\` 컴포넌트는 우클릭 또는 트리거 요소 클릭 시 표시되는 컨텍스트 메뉴를 제공합니다.

## 기본 기능
- 우클릭 또는 트리거 요소 클릭으로 메뉴 표시
- 체크박스 및 라디오 버튼 메뉴 항목 지원
- 중첩 서브메뉴 지원
- 키보드 단축키 지원
- 접근성을 고려한 키보드 네비게이션
- 다양한 메뉴 항목 타입 지원 (일반, 체크박스, 라디오, 구분선, 서브메뉴)

## 사용법

\`\`\`jsx
import { SCContextMenu } from '@edentns/shadcn-tailwind-ui';

<SCContextMenu
  trigger={<div>우클릭하세요</div>}
  items={[
    { id: 'edit', label: '편집' },
    { id: 'copy', label: '복사' },
    { id: 'delete', label: '삭제' }
  ]}
  onItemClick={(item) => console.log('클릭된 항목:', item)}
/>
\`\`\`

## 속성

| 속성 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| trigger | React.ReactNode | required | 메뉴를 표시할 트리거 요소 |
| items | MenuItem[] | required | 메뉴 항목 배열 |
| onItemClick | (item: MenuItem) => void | undefined | 메뉴 항목 클릭 시 호출되는 함수 |
| className | string | undefined | 추가 CSS 클래스 |

## MenuItem 타입

| 속성 | 타입 | 설명 |
|------|------|------|
| id | string | 항목의 고유 ID |
| label | string | 항목의 레이블 |
| type | 'item' \| 'checkbox' \| 'radio-group' \| 'separator' \| 'sub' | 항목 타입 |
| disabled | boolean | 항목 비활성화 여부 |
| checked | boolean | 체크박스 항목의 체크 상태 |
| value | string | 라디오 그룹의 선택된 값 |
| items | MenuItem[] | 서브메뉴 또는 라디오 그룹의 하위 항목 |
| shortcut | { key: string, metaKey?: boolean, altKey?: boolean, ctrlKey?: boolean, shiftKey?: boolean, display: string } | 키보드 단축키 정보 |
`,
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SCContextMenu>;

export const Basic: Story = {
    args: {
        trigger: <div className="border p-4">우클릭 또는 클릭하세요</div>,
        items: [
            { id: 'edit', label: '편집' },
            { id: 'copy', label: '복사' },
            { id: 'delete', label: '삭제' },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: '기본적인 컨텍스트 메뉴 예제입니다.',
            },
        },
    },
};

export const WithSeparator: Story = {
    args: {
        trigger: <div className="border p-4">구분선이 있는 메뉴</div>,
        items: [
            { id: 'cut', label: '잘라내기' },
            { id: 'copy', label: '복사' },
            { id: 'paste', label: '붙여넣기' },
            { id: 'separator-1', type: 'separator' },
            { id: 'delete', label: '삭제' },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: '구분선을 포함한 메뉴 예제입니다.',
            },
        },
    },
};

export const WithDisabled: Story = {
    args: {
        trigger: <div className="border p-4">비활성화 항목이 있는 메뉴</div>,
        items: [
            { id: 'edit', label: '편집' },
            { id: 'copy', label: '복사' },
            { id: 'paste', label: '붙여넣기', disabled: true },
            { id: 'delete', label: '삭제' },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: '비활성화된 항목을 포함한 메뉴 예제입니다.',
            },
        },
    },
};

export const WithShortcut: Story = {
    args: {
        trigger: <div className="border p-4">단축키가 있는 메뉴</div>,
        items: [
            {
                id: 'cut',
                label: '잘라내기',
                shortcut: {
                    key: 'x',
                    metaKey: true,
                    display: '⌘X',
                },
            },
            {
                id: 'copy',
                label: '복사하기',
                shortcut: {
                    key: 'c',
                    metaKey: true,
                    display: '⌘C',
                },
            },
            {
                id: 'paste',
                label: '붙여넣기',
                shortcut: {
                    key: 'v',
                    metaKey: true,
                    display: '⌘V',
                },
            },
            { id: 'separator-1', type: 'separator' },
            {
                id: 'delete',
                label: '삭제하기',
                shortcut: {
                    key: 'd',
                    metaKey: true,
                    display: '⌘D',
                },
            },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: '간단한 메뉴 구성 예제입니다.',
            },
        },
    },
};

export const WithCheckboxAndRadio: Story = {
    args: {
        trigger: <div className="border p-4">Checkbox & Radio Menu</div>,
        items: [
            {
                id: 'view',
                type: 'checkbox',
                label: '미리보기',
                checked: true,
            },
            {
                id: 'theme',
                type: 'radio-group',
                label: '테마',
                value: 'light',
                items: [
                    { value: 'light', label: '라이트' },
                    { value: 'dark', label: '다크' },
                ],
            },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: '체크박스와 라디오 버튼을 포함한 메뉴 예제입니다.',
            },
        },
    },
};

export const NestedMenu: Story = {
    args: {
        trigger: <div className="border p-4">Nested Menu</div>,
        items: [
            {
                id: 'file',
                type: 'sub',
                label: '파일',
                items: [
                    {
                        id: 'new',
                        type: 'sub',
                        label: '새로 만들기',
                        items: [
                            { id: 'doc', label: '문서' },
                            { id: 'sheet', label: '스프레드시트' },
                        ],
                    },
                    { id: 'open', label: '열기' },
                ],
            },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: '중첩된 서브메뉴 예제입니다.',
            },
        },
    },
};

export const WithShortcuts: Story = {
    args: {
        trigger: <div className="border p-4">단축키 테스트 (⌘C, ⌘V 를 눌러보세요)</div>,
        items: [
            {
                id: 'copy',
                label: '복사하기',
                shortcut: {
                    key: 'c',
                    metaKey: true,
                    display: '⌘C',
                },
            },
            {
                id: 'paste',
                label: '붙여넣기',
                shortcut: {
                    key: 'v',
                    metaKey: true,
                    display: '⌘V',
                },
            },
        ],
    },
    render: () => {
        const handleItemClick = (item: MenuItem) => {
            alert(`메뉴 클릭: ${item.label}`);
            console.log('메뉴 클릭:', item);
        };

        return (
            <div style={{ padding: '20px' }}>
                <SCContextMenu
                    trigger={<div className="border p-4">단축키 테스트 (⌘C, ⌘V 를 눌러보세요)</div>}
                    items={[
                        {
                            id: 'copy',
                            label: '복사하기',
                            shortcut: {
                                key: 'c',
                                metaKey: true,
                                display: '⌘C',
                            },
                        },
                        {
                            id: 'paste',
                            label: '붙여넣기',
                            shortcut: {
                                key: 'v',
                                metaKey: true,
                                display: '⌘V',
                            },
                        },
                    ]}
                    onItemClick={handleItemClick}
                />
            </div>
        );
    },
};
