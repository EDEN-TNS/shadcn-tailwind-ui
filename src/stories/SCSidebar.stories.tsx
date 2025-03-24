import { Folder, Home, Menu, Settings, Users } from 'lucide-react';
import type { Meta, StoryObj } from '@storybook/react';

import { Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { SCSidebar } from '@/components/custom/sidebar/SCSidebar';
import { SCSidebarProvider } from '@/components/custom/sidebar/SCSidebarProvider';
import { SCSidebarTrigger } from '@/components/custom/sidebar/SCSidebarTrigger';

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
- 커스텀 링크 렌더링 지원 (React Router, Next.js 등)

## 컴포넌트 구조
- \`SCSidebarProvider\`: 사이드바의 상태를 관리하는 컨텍스트 제공자
- \`SCSidebar\`: 메인 사이드바 컴포넌트
- \`SCSidebarTrigger\`: 독립적인 사이드바 토글 버튼 컴포넌트 (SCSidebar 외부에서 사용)

## 사용법

\`\`\`jsx
import { SCSidebarProvider } from '@/components/custom/sidebar/SCSidebarProvider';
import { SCSidebar } from '@/components/custom/sidebar/SCSidebar';
import { SCSidebarTrigger } from '@/components/custom/sidebar/SCSidebarTrigger';
import { Home, Menu, Settings, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

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

// 기본 사용 예시
function MyLayout() {
  return (
    <SCSidebarProvider>
      <div className="flex flex-1 w-full">
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
          renderLink={(href, children) => (
            <Link to={href}>{children}</Link>
          )}
        />
        <main className="relative flex-1">
          <SCSidebarTrigger
            triggerIcon={<Menu className="h-4 w-4" />}
            triggerClassName="absolute left-[-12px] top-4"
          />
          {/* 메인 콘텐츠 */}
        </main>
      </div>
    </SCSidebarProvider>
  );
}

# 사용자 프로필 영역 커스터마이징

사용자 프로필 영역은 다음과 같은 방식으로 커스터마이징할 수 있습니다:

1. **드롭다운 메뉴 사용**
   - \`useDropdownMenu\` prop을 true로 설정하여 드롭다운 메뉴를 활성화합니다.
   - \`onLogout\`, \`onProfileClick\`, \`onSettingsClick\` 핸들러를 제공하여 각 메뉴 항목의 동작을 정의합니다.

2. **클릭 가능한 프로필**
   - \`onUserClick\` 핸들러를 제공하여 프로필 영역 클릭 시의 동작을 정의합니다.

3. **기본 프로필**
   - 아무 핸들러도 제공하지 않으면 기본 상태로 표시됩니다.

# 트리거 버튼 사용하기

트리거 버튼은 \`SCSidebarTrigger\` 컴포넌트를 통해 제공됩니다. 이 컴포넌트는 SCSidebar와 별도로 사용되어 레이아웃의 어디에서든 사이드바를 토글할 수 있습니다.

// 트리거 버튼 커스터마이징
<SCSidebarTrigger
  triggerIcon={<Menu className="h-4 w-4" />}
  triggerClassName="absolute right-4 top-4 bg-background border rounded-full p-1 shadow-sm"
/>

자세한 예제는 아래 스토리들을 참고하세요.

\`\`\`
`,
            },
        },
    },
    argTypes: {
        organization: {
            description: '사이드바에 표시할 조직 정보 객체',
            control: 'object',
            table: {
                category: '데이터',
                type: {
                    summary: 'object',
                    detail: `{
    name: string;
    logo: React.ReactNode;
    subText?: string;
    logoBgColor?: string;
    logoBgColorDark?: string;
    onClick?: () => void;
}`,
                },
            },
        },
        user: {
            description: '사이드바 하단에 표시할 사용자 정보 객체',
            control: 'object',
            table: {
                category: '데이터',
                type: {
                    summary: 'object',
                    detail: `{
    name: string;
    email: string;
    avatar?: string;
    avatarBgColor?: string;
    avatarClassName?: string;
}`,
                },
            },
        },
        menuItems: {
            description: '사이드바에 표시할 메뉴 항목 배열',
            control: 'object',
            table: {
                category: '데이터',
                type: {
                    summary: 'MenuItem[]',
                },
            },
        },
        currentPath: {
            description: '현재 활성화된 경로',
            control: 'text',
            table: {
                category: '상태',
                defaultValue: { summary: '/' },
            },
        },
        size: {
            description: '사이드바의 크기',
            control: 'select',
            options: ['default', 'sm', 'lg'],
            table: {
                category: '스타일',
                defaultValue: { summary: 'default' },
            },
        },
        sections: {
            description: '메뉴 아이템을 그룹화할 섹션 이름 배열',
            control: { type: 'object' },
            table: {
                category: '구조',
            },
        },
        collapsible: {
            description: '사이드바 접기/펼치기 가능 여부',
            control: 'boolean',
            table: {
                category: '동작',
                defaultValue: { summary: 'true' },
            },
        },
        renderLink: {
            description: '메뉴 항목의 링크를 렌더링하는 커스텀 함수',
            table: {
                category: '렌더링',
                type: {
                    summary: '(href: string, children: React.ReactNode) => React.ReactNode',
                },
            },
        },
        onLogout: {
            description: '로그아웃 메뉴 클릭 시 호출될 함수',
            table: {
                category: '이벤트',
                type: { summary: '() => void' },
            },
        },
        onProfileClick: {
            description: '프로필 메뉴 클릭 시 호출될 함수',
            table: {
                category: '이벤트',
                type: { summary: '() => void' },
            },
        },
        onSettingsClick: {
            description: '설정 메뉴 클릭 시 호출될 함수',
            table: {
                category: '이벤트',
                type: { summary: '() => void' },
            },
        },
        useDropdownMenu: {
            description: '사용자 프로필에 드롭다운 메뉴 사용 여부',
            control: 'boolean',
            table: {
                category: 'UI',
                defaultValue: { summary: 'false' },
            },
        },
        onUserClick: {
            description: '사용자 프로필 클릭 시 호출될 함수',
            table: {
                category: '이벤트',
                type: { summary: '() => void' },
            },
        },
    },
    decorators: [
        Story => (
            <SCSidebarProvider>
                <MemoryRouter>
                    <Story />
                </MemoryRouter>
            </SCSidebarProvider>
        ),
    ],
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
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger triggerIcon={<Menu className="h-4 w-4" />} triggerClassName="ml-2 mt-2" />
            </main>
        </div>
    ),
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
        currentPath: '/',
        renderLink: (href, children) => <Link to={href}>{children}</Link>,
    },
};

// 섹션 그룹이 없는 사이드바
export const WithoutSections: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger triggerIcon={<Menu className="h-4 w-4" />} triggerClassName="ml-2 mt-2" />
            </main>
        </div>
    ),
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
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger triggerIcon={<Menu className="h-4 w-4" />} triggerClassName="ml-2 mt-2" />
            </main>
        </div>
    ),
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
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger triggerIcon={<Menu className="h-4 w-4" />} triggerClassName="ml-2 mt-2" />
            </main>
        </div>
    ),
    args: {
        ...WithSections.args,
        currentPath: '/settings/security',
    },
};

export const WithoutSubText: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger triggerIcon={<Menu className="h-4 w-4" />} triggerClassName="ml-2 mt-2" />
            </main>
        </div>
    ),
    args: {
        menuItems: defaultMenuItems,
        sections: ['Platform', 'Projects'],
        organization: {
            name: '샘플 조직',
            logo: '🏢',
        },
        user: {
            name: '홍길동',
            email: 'hong@example.com',
            avatar: 'https://github.com/shadcn.png',
        },
    },
};

export const WithLongSubText: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger triggerIcon={<Menu className="h-4 w-4" />} triggerClassName="ml-2 mt-2" />
            </main>
        </div>
    ),
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

export const CustomLogoBackground: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger triggerIcon={<Menu className="h-4 w-4" />} triggerClassName="ml-2 mt-2" />
            </main>
        </div>
    ),
    args: {
        menuItems: defaultMenuItems,
        sections: ['Platform', 'Projects'],
        organization: {
            name: '샘플 조직',
            logo: '🏢',
            subText: '엔터프라이즈 버전',
            logoBgColor: 'bg-blue-500',
        },
        user: {
            name: '홍길동',
            email: 'hong@example.com',
            avatar: 'https://github.com/shadcn.png',
        },
    },
};

export const NonCollapsible: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1" />
        </div>
    ),
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
        collapsible: false,
    },
};

export const GradientLogoBackground: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger triggerIcon={<Menu className="h-4 w-4" />} triggerClassName="ml-2 mt-2" />
            </main>
        </div>
    ),
    args: {
        menuItems: defaultMenuItems,
        sections: ['Platform', 'Projects'],
        organization: {
            name: '샘플 조직',
            logo: '🏢',
            subText: '엔터프라이즈 버전',
            logoBgColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
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
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger triggerIcon={<Menu className="h-4 w-4" />} triggerClassName="ml-2 mt-2" />
            </main>
        </div>
    ),
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
        ],
        sections: ['Platform', 'Projects', 'Extra', 'More'],
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
        className: 'h-[500px]',
    },
    parameters: {
        docs: {
            description: {
                story: '많은 메뉴 아이템을 포함하여 스크롤 기능을 테스트하는 예제입니다.',
            },
        },
    },
};

export const WithManySubItems: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger triggerIcon={<Menu className="h-4 w-4" />} triggerClassName="ml-2 mt-2" />
            </main>
        </div>
    ),
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
        className: 'h-[500px]',
    },
    parameters: {
        docs: {
            description: {
                story: '많은 서브메뉴 아이템을 포함하여 스크롤 기능을 테스트하는 예제입니다.',
            },
        },
    },
};

// 다양한 트리거 위치 예제들
export const TopRightTrigger: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger
                    triggerIcon={<Menu className="h-4 w-4" />}
                    triggerClassName="absolute right-4 top-4 bg-background border rounded-full p-1 shadow-sm"
                />
            </main>
        </div>
    ),
    args: {
        ...WithSections.args,
        renderLink: (href, children) => <Link to={href}>{children}</Link>,
    },
    parameters: {
        docs: {
            description: {
                story: '트리거 버튼을 우측 상단에 위치시킨 예제입니다.',
            },
        },
    },
};

export const BottomRightTrigger: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger
                    triggerIcon={<Menu className="h-4 w-4" />}
                    triggerClassName="absolute right-4 bottom-4 bg-background border rounded-full p-1 shadow-sm"
                />
            </main>
        </div>
    ),
    args: {
        ...WithSections.args,
        renderLink: (href, children) => <Link to={href}>{children}</Link>,
    },
    parameters: {
        docs: {
            description: {
                story: '트리거 버튼을 우측 하단에 위치시킨 예제입니다.',
            },
        },
    },
};

export const WithoutTrigger: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1" />
        </div>
    ),
    args: {
        ...WithSections.args,
    },
    parameters: {
        docs: {
            description: {
                story: '트리거 버튼 없이 사이드바만 사용하는 예제입니다.',
            },
        },
    },
};

// 모의 Link 컴포넌트 생성
const MockLink = ({ to, children, ...props }: { to: string; children: React.ReactNode; [key: string]: any }) => (
    <a
        href={to}
        onClick={e => {
            e.preventDefault();
            console.log(`Navigate to: ${to}`);
        }}
        {...props}
    >
        {children}
    </a>
);

// React Router Link를 사용하는 예제 추가
export const WithReactRouterLink: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger triggerIcon={<Menu className="h-4 w-4" />} triggerClassName="ml-2 mt-2" />
                <div className="p-4">
                    <h1 className="text-xl font-bold">React Router Link 예제</h1>
                    <p className="mt-2">
                        이 예제에서는 <code>renderLink</code> prop을 사용하여 React Router의 Link 컴포넌트를 사용하는
                        방법을 보여줍니다. 실제 애플리케이션에서는 React Router의 Link 컴포넌트를 사용하여 페이지
                        새로고침 없이 라우팅할 수 있습니다.
                    </p>
                </div>
            </main>
        </div>
    ),
    args: {
        ...WithSections.args,
        renderLink: (href, children) => <MockLink to={href}>{children}</MockLink>,
    },
    parameters: {
        docs: {
            description: {
                story: `
## renderLink 사용 이유

\`renderLink\` prop은 사이드바의 링크 렌더링 방식을 커스터마이징할 수 있게 해줍니다. 이는 다음과 같은 이유로 중요합니다:

1. **SPA 라우팅 지원**: React Router, Next.js, Gatsby 등의 프레임워크에서 페이지 새로고침 없이 라우팅하려면 각 프레임워크의 Link 컴포넌트를 사용해야 합니다.
2. **컴포넌트 재사용성**: 특정 라우팅 라이브러리에 의존하지 않고 다양한 환경에서 재사용할 수 있습니다.
3. **사용자 경험 향상**: 페이지 새로고침 없이 라우팅하면 더 부드러운 사용자 경험을 제공합니다.

## 실제 React Router 사용 예시

\`\`\`jsx
import { Link } from 'react-router-dom';
import { SCSidebar } from '@/components/custom/sidebar/SCSidebar';

function MySidebar() {
  return (
    <SCSidebar
      // ... 다른 props ...
      renderLink={(href, children) => (
        <Link to={href}>{children}</Link>
      )}
    />
  );
}
\`\`\`

## Next.js 사용 예시

\`\`\`jsx
import Link from 'next/link';
import { SCSidebar } from '@/components/custom/sidebar/SCSidebar';

function MySidebar() {
  return (
    <SCSidebar
      // ... 다른 props ...
      renderLink={(href, children) => (
        <Link href={href}>{children}</Link>
      )}
    />
  );
}
\`\`\`
`,
            },
        },
    },
};

const defaultArgs = {
    ...WithSections.args,
    renderLink: (href: string, children: React.ReactNode) => <Link to={href}>{children}</Link>,
};

// Dropdown 메뉴가 있는 사이드바
export const WithDropdownMenu: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger triggerIcon={<Menu className="h-4 w-4" />} triggerClassName="ml-2 mt-2" />
            </main>
        </div>
    ),
    args: {
        ...defaultArgs,
        useDropdownMenu: true,
        onLogout: () => {
            alert('로그아웃 클릭');
        },
        onProfileClick: () => {
            alert('프로필 클릭');
        },
        onSettingsClick: () => {
            alert('설정 클릭');
        },
    },
    parameters: {
        docs: {
            description: {
                story: `
사용자 프로필 영역에 드롭다운 메뉴를 추가한 예제입니다.
드롭다운 메뉴에는 프로필, 설정, 로그아웃 등의 메뉴 항목이 포함됩니다.

\`\`\`tsx
<SCSidebar
    useDropdownMenu
    onLogout={() => {
        console.log('로그아웃');
    }}
    onProfileClick={() => {
        console.log('프로필');
    }}
    onSettingsClick={() => {
        console.log('설정');
    }}
    // ... 기타 props
/>
\`\`\`
`,
            },
        },
    },
};

// 클릭 가능한 사용자 프로필 (Dropdown 없음)
export const WithClickableUserProfile: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger triggerIcon={<Menu className="h-4 w-4" />} triggerClassName="ml-2 mt-2" />
            </main>
        </div>
    ),
    args: {
        ...WithSections.args,
        useDropdownMenu: false,
        onUserClick: () => {
            alert('사용자 프로필 클릭');
        },
    },
    parameters: {
        docs: {
            description: {
                story: `
드롭다운 메뉴 없이 클릭 가능한 사용자 프로필 영역을 가진 예제입니다.
사용자 프로필 영역 클릭 시 \`onUserClick\` 핸들러가 호출됩니다.

\`\`\`tsx
<SCSidebar
    onUserClick={() => {
        console.log('사용자 프로필 클릭');
    }}
    // ... 기타 props
/>
\`\`\`
`,
            },
        },
    },
};

// 기본 사용자 프로필 (클릭 불가)
export const WithDefaultUserProfile: Story = {
    render: args => (
        <div className="flex w-full flex-1">
            <SCSidebar {...args} />
            <main className="relative flex-1">
                <SCSidebarTrigger triggerIcon={<Menu className="h-4 w-4" />} triggerClassName="ml-2 mt-2" />
            </main>
        </div>
    ),
    args: {
        ...defaultArgs,
        useDropdownMenu: false,
    },
    parameters: {
        docs: {
            description: {
                story: `
기본 사용자 프로필 영역을 가진 예제입니다.
클릭이나 드롭다운 메뉴가 없는 기본 상태입니다.

\`\`\`tsx
<SCSidebar
    // ... 기타 props
/>
\`\`\`
`,
            },
        },
    },
};
