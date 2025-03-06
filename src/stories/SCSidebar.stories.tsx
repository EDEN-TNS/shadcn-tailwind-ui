import { Folder, Home, Menu, PanelLeft, Settings, Users } from 'lucide-react';
import type { Meta, StoryObj } from '@storybook/react';

import { SCSidebar } from '@/components/custom/sidebar/SCSidebar';

const meta: Meta<typeof SCSidebar> = {
    title: 'Components/SCSidebar',
    component: SCSidebar,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: '섹션과 서브메뉴를 지원하는 사이드바 컴포넌트',
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
# 사이드바 컴포넌트

\`SCSidebar\` 컴포넌트는 웹 애플리케이션의 네비게이션을 위한 사이드바를 제공합니다.

## 기본 기능
- 섹션별 메뉴 그룹화 지원
- 서브메뉴 지원
- 아이콘 지원
- 현재 경로 하이라이팅
- 사용자 프로필 표시
- 조직 정보 표시
- 반응형 디자인 지원
- 커스텀 토글 아이콘 지원
- 토글 버튼 위치 조정 가능

## 사용법

\`\`\`jsx
import { SCSidebar } from '@edentns/shadcn-tailwind-ui';
import { Home, Menu, Settings, Users } from 'lucide-react';

const menuItems = [
  {
    icon: Home,
    label: '대시보드',
    href: '/',
    section: 'Platform',
  },
  {
    icon: Settings,
    label: '설정',
    section: 'Platform',
    items: [
      { label: '일반', href: '/settings/general' },
      { label: '보안', href: '/settings/security' },
    ],
  },
  {
    icon: Users,
    label: '팀',
    href: '/teams',
    section: 'Projects',
  },
];

// 섹션 그룹이 있는 사이드바
<SCSidebar
  menuItems={menuItems}
  sections={['Platform', 'Projects']}
  organization={{
    name: '샘플 조직',
    logo: '🏢',
  }}
  user={{
    name: '홍길동',
    email: 'hong@example.com',
    avatar: 'https://github.com/shadcn.png',
  }}
  currentPath="/settings/security"
  triggerIcon={<Menu className="h-4 w-4" />}
  triggerClassName="absolute top-4 right-[-12px]"
/>

// 섹션 그룹이 없는 사이드바
<SCSidebar
  menuItems={menuItems}
  organization={{
    name: '샘플 조직',
    logo: '🏢',
  }}
  user={{
    name: '홍길동',
    email: 'hong@example.com',
    avatar: 'https://github.com/shadcn.png',
  }}
  currentPath="/settings/security"
/>
\`\`\`
`,
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof SCSidebar>;

const defaultMenuItems = [
    {
        icon: Home,
        label: '대시보드',
        href: '/',
        section: 'Platform',
    },
    {
        icon: Settings,
        label: '설정',
        section: 'Platform',
        items: [
            { label: '일반', href: '/settings/general' },
            { label: '보안', href: '/settings/security' },
        ],
    },
    {
        icon: Folder,
        label: '프로젝트',
        href: '/projects',
        section: 'Projects',
    },
    {
        icon: Users,
        label: '팀',
        href: '/teams',
        section: 'Projects',
    },
];

// 섹션 그룹이 있는 사이드바
export const WithSections: Story = {
    args: {
        menuItems: defaultMenuItems,
        sections: ['Platform', 'Projects'],
        organization: {
            name: '샘플 조직',
            logo: '🏢',
            subText: '엔터프라이즈 버전',
        },
        user: {
            name: '홍길동',
            email: 'hong@example.com',
            avatar: 'https://github.com/shadcn.png',
        },
    },
};

// 섹션 그룹이 없는 사이드바
export const WithoutSections: Story = {
    args: {
        menuItems: defaultMenuItems,
        organization: {
            name: '샘플 조직',
            logo: '🏢',
            subText: '엔터프라이즈 버전',
        },
        user: {
            name: '홍길동',
            email: 'hong@example.com',
            avatar: 'https://github.com/shadcn.png',
        },
    },
};

export const WithoutUser: Story = {
    args: {
        menuItems: defaultMenuItems,
        sections: ['Platform', 'Projects'],
        organization: {
            name: '샘플 조직',
            logo: '🏢',
            subText: '엔터프라이즈 버전',
        },
    },
};

export const WithCurrentPath: Story = {
    args: {
        ...WithSections.args,
        currentPath: '/settings/security',
    },
};

// subText가 없는 조직 예제
export const WithoutSubText: Story = {
    args: {
        menuItems: defaultMenuItems,
        sections: ['Platform', 'Projects'],
        organization: {
            name: '샘플 조직',
            logo: '🏢',
            // subText 없음
        },
        user: {
            name: '홍길동',
            email: 'hong@example.com',
            avatar: 'https://github.com/shadcn.png',
        },
    },
};

// 다양한 subText 길이 예제
export const WithLongSubText: Story = {
    args: {
        menuItems: defaultMenuItems,
        sections: ['Platform', 'Projects'],
        organization: {
            name: '샘플 조직',
            logo: '🏢',
            subText: '매우 긴 서브텍스트가 있는 엔터프라이즈 버전 - 텍스트가 잘리는지 확인',
        },
        user: {
            name: '홍길동',
            email: 'hong@example.com',
            avatar: 'https://github.com/shadcn.png',
        },
    },
};

// 커스텀 로고 배경색 예제
export const CustomLogoBackground: Story = {
    args: {
        menuItems: defaultMenuItems,
        sections: ['Platform', 'Projects'],
        organization: {
            name: '샘플 조직',
            logo: '🏢',
            subText: '엔터프라이즈 버전',
            logoBgColor: 'bg-blue-500', // 커스텀 로고 배경색 적용
        },
        user: {
            name: '홍길동',
            email: 'hong@example.com',
            avatar: 'https://github.com/shadcn.png',
        },
    },
};

// 사이드바 접기/펴기 기능 비활성화 예제
export const NonCollapsible: Story = {
    args: {
        menuItems: defaultMenuItems,
        sections: ['Platform', 'Projects'],
        organization: {
            name: '샘플 조직',
            logo: '🏢',
            subText: '엔터프라이즈 버전',
        },
        user: {
            name: '홍길동',
            email: 'hong@example.com',
            avatar: 'https://github.com/shadcn.png',
        },
        collapsible: false, // 사이드바 접기/펴기 기능 비활성화
    },
};

// 토글 버튼 숨김 예제
export const HiddenToggle: Story = {
    args: {
        menuItems: defaultMenuItems,
        sections: ['Platform', 'Projects'],
        organization: {
            name: '샘플 조직',
            logo: '🏢',
            subText: '엔터프라이즈 버전',
        },
        user: {
            name: '홍길동',
            email: 'hong@example.com',
            avatar: 'https://github.com/shadcn.png',
        },
        hideToggle: true, // 토글 버튼 숨김
    },
};

// 그라데이션 로고 배경색 예제
export const GradientLogoBackground: Story = {
    args: {
        menuItems: defaultMenuItems,
        sections: ['Platform', 'Projects'],
        organization: {
            name: '샘플 조직',
            logo: '🏢',
            subText: '엔터프라이즈 버전',
            logoBgColor: 'bg-gradient-to-r from-purple-500 to-pink-500', // 그라데이션 배경색 적용
        },
        user: {
            name: '홍길동',
            email: 'hong@example.com',
            avatar: 'https://github.com/shadcn.png',
        },
    },
};

// 많은 메뉴 아이템으로 스크롤 테스트를 위한 예제
export const WithManyItems: Story = {
    args: {
        menuItems: [
            ...defaultMenuItems,
            // 추가 메뉴 아이템들
            {
                icon: Home,
                label: '메뉴 아이템 1',
                href: '/item1',
                section: 'Extra',
            },
            {
                icon: Settings,
                label: '메뉴 아이템 2',
                href: '/item2',
                section: 'Extra',
            },
            {
                icon: Folder,
                label: '메뉴 아이템 3',
                href: '/item3',
                section: 'Extra',
            },
            {
                icon: Users,
                label: '메뉴 아이템 4',
                href: '/item4',
                section: 'Extra',
            },
            {
                icon: Home,
                label: '메뉴 아이템 5',
                href: '/item5',
                section: 'More',
            },
            {
                icon: Settings,
                label: '메뉴 아이템 6',
                href: '/item6',
                section: 'More',
            },
            {
                icon: Folder,
                label: '메뉴 아이템 7',
                href: '/item7',
                section: 'More',
            },
            {
                icon: Users,
                label: '메뉴 아이템 8',
                href: '/item8',
                section: 'More',
            },
            {
                icon: Home,
                label: '메뉴 아이템 9',
                href: '/item9',
                section: 'Even More',
            },
            {
                icon: Settings,
                label: '메뉴 아이템 10',
                href: '/item10',
                section: 'Even More',
            },
            {
                icon: Folder,
                label: '메뉴 아이템 11',
                href: '/item11',
                section: 'Even More',
            },
            {
                icon: Users,
                label: '메뉴 아이템 12',
                href: '/item12',
                section: 'Even More',
            },
        ],
        sections: ['Platform', 'Projects', 'Extra', 'More', 'Even More'],
        organization: {
            name: '샘플 조직',
            logo: '🏢',
            subText: '엔터프라이즈 버전',
        },
        user: {
            name: '홍길동',
            email: 'hong@example.com',
            avatar: 'https://github.com/shadcn.png',
        },
        // 스토리북에서 사이드바 높이를 제한하여 스크롤이 필요하게 만듭니다
        className: 'h-[500px]', // 높이를 제한하여 스크롤이 필요하게 함
    },
    parameters: {
        docs: {
            description: {
                story: '많은 메뉴 아이템을 포함하여 스크롤 기능을 테스트하는 예제입니다. 사이드바 내용이 넘칠 경우 자동으로 스크롤이 생성됩니다.',
            },
        },
    },
};

// 서브메뉴가 많은 아이템으로 스크롤 테스트를 위한 예제
export const WithManySubItems: Story = {
    args: {
        menuItems: [
            {
                icon: Settings,
                label: '설정',
                section: 'Platform',
                items: Array.from({ length: 15 }, (_, i) => ({
                    label: `설정 항목 ${i + 1}`,
                    href: `/settings/item${i + 1}`,
                })),
            },
            ...defaultMenuItems.filter(item => item.label !== '설정'),
        ],
        sections: ['Platform', 'Projects'],
        organization: {
            name: '샘플 조직',
            logo: '🏢',
            subText: '엔터프라이즈 버전',
        },
        user: {
            name: '홍길동',
            email: 'hong@example.com',
            avatar: 'https://github.com/shadcn.png',
        },
        // 스토리북에서 사이드바 높이를 제한하여 스크롤이 필요하게 만듭니다
        className: 'h-[500px]', // 높이를 제한하여 스크롤이 필요하게 함
    },
    parameters: {
        docs: {
            description: {
                story: '많은 서브메뉴 아이템을 포함하여 스크롤 기능을 테스트하는 예제입니다. 서브메뉴가 펼쳐질 때 내용이 넘칠 경우 자동으로 스크롤이 생성됩니다.',
            },
        },
    },
};

// 커스텀 토글 아이콘 예제
export const CustomTriggerIcon: Story = {
    args: {
        ...WithSections.args,
        triggerIcon: <Menu className="h-4 w-4" />,
        triggerClassName: 'ml-2 mt-2',
    },
    parameters: {
        docs: {
            description: {
                story: '사용자 정의 토글 아이콘을 사용하는 예제입니다. triggerIcon 속성을 통해 원하는 아이콘을 지정할 수 있습니다.',
            },
        },
    },
};

// 커스텀 토글 위치 예제
export const CustomTriggerPosition: Story = {
    args: {
        ...WithSections.args,
        triggerClassName: 'absolute top-4 right-[-12px] bg-background border rounded-full p-1 shadow-sm',
    },
    parameters: {
        docs: {
            description: {
                story: '사용자 정의 토글 위치와 스타일을 사용하는 예제입니다. triggerClassName 속성을 통해 위치와 스타일을 조정할 수 있습니다.',
            },
        },
    },
};

// 하단 토글 위치 예제
export const BottomTriggerPosition: Story = {
    args: {
        ...WithSections.args,
        triggerIcon: <Menu className="h-4 w-4" />,
        triggerClassName: 'absolute bottom-4 right-[-12px] bg-background border rounded-full p-1 shadow-sm',
    },
    parameters: {
        docs: {
            description: {
                story: '토글 버튼을 사이드바 하단에 위치시키는 예제입니다. triggerClassName을 사용하여 위치를 조정했습니다.',
            },
        },
    },
};
