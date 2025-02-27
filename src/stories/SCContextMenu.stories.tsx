import type { Meta, StoryObj } from '@storybook/react';

import type { MenuItem } from '@/components/custom/contextMenu/SCContextMenu';
import { SCContextMenu } from '@/components/custom/contextMenu/SCContextMenu';

const meta: Meta<typeof SCContextMenu> = {
    title: 'Components/SCContextMenu',
    component: SCContextMenu,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
## 사용법
컨텍스트 메뉴 아이템은 다음과 같은 구조로 정의합니다:

\`\`\`typescript
interface MenuItem {
  id: string;          // 고유 식별자
  label?: string;      // 메뉴 텍스트
  shortcut?: string;   // 단축키 (예: "⌘[")
  disabled?: boolean;  // 비활성화 여부
  type?: 'item' | 'checkbox' | 'separator' | 'sub' | 'radio-group';
  checked?: boolean;   // checkbox 타입일 때 체크 상태
  items?: MenuItem[];  // 서브메뉴 아이템
  value?: string;      // radio 아이템용
  inset?: boolean;     // 들여쓰기 여부
}
\`\`\`
                `,
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SCContextMenu>;

const defaultItems = [
    {
        id: 'back',
        label: 'Back',
        shortcut: {
            key: '[',
            metaKey: true,
            display: '⌘[',
        },
        inset: true,
    },
    {
        id: 'forward',
        label: 'Forward',
        shortcut: {
            key: ']',
            metaKey: true,
            display: '⌘]',
        },
        disabled: true,
        inset: true,
    },
    {
        id: 'reload',
        label: 'Reload',
        shortcut: {
            key: 'r',
            metaKey: true,
            display: '⌘R',
        },
        inset: true,
    },
    {
        id: 'more-tools',
        label: 'More Tools',
        type: 'sub' as const,
        inset: true,
        items: [
            {
                id: 'save',
                label: 'Save Page As...',
                shortcut: {
                    key: 's',
                    metaKey: true,
                    shiftKey: true,
                    display: '⇧⌘S',
                },
            },
            {
                id: 'shortcut',
                label: 'Create Shortcut...',
            },
            {
                id: 'separator1',
                type: 'separator' as const,
            },
            {
                id: 'dev-tools',
                label: 'Developer Tools',
            },
        ],
    },
    {
        id: 'separator2',
        type: 'separator' as const,
    },
    {
        id: 'bookmark-bar',
        type: 'checkbox' as const,
        label: 'Show Bookmarks Bar',
        shortcut: {
            key: 'b',
            metaKey: true,
            shiftKey: true,
            display: '⌘⇧B',
        },
        checked: true,
    },
    {
        id: 'full-urls',
        type: 'checkbox' as const,
        label: 'Show Full URLs',
        checked: false,
    },
    {
        id: 'separator3',
        type: 'separator' as const,
    },
    {
        id: 'people',
        type: 'radio-group' as const,
        label: 'People',
        value: 'pedro',
        items: [
            { value: 'pedro', label: 'Pedro Duarte' },
            { value: 'colm', label: 'Colm Tuite' },
        ],
    },
];

export const Basic: Story = {
    args: {
        trigger: (
            <div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                우클릭 하세요
            </div>
        ),
        items: defaultItems,
    },
    parameters: {
        docs: {
            description: {
                story: '기본적인 컨텍스트 메뉴 예제입니다.',
            },
            source: {
                code: `
const items = [
    {
        id: 'back',
        label: 'Back',
        shortcut: '⌘[',
        inset: true,
    },
    {
        id: 'more-tools',
        label: 'More Tools',
        type: 'sub',
        items: [
            {
                id: 'save',
                label: 'Save Page As...',
                shortcut: '⇧⌘S',
            },
            // ... more items
        ],
    },
    // ... more items
];

<SCContextMenu
    trigger={<div>우클릭 하세요</div>}
    items={items}
    onItemClick={(item) => console.log(\`Clicked: \${item.id}\`)}
/>`,
                language: 'tsx',
            },
        },
    },
};

export const SimpleMenu: Story = {
    args: {
        trigger: <div className="border p-4">Simple Menu</div>,
        items: [
            {
                id: 'edit',
                label: '수정하기',
                shortcut: {
                    key: 'e',
                    metaKey: true,
                    display: '⌘E',
                },
            },
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
