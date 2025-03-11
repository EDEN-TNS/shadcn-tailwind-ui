import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOut, Settings, User } from 'lucide-react';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
} from '@/components/ui/sidebar';

import { ChevronRight } from 'lucide-react';
import React from 'react';
import { SCAvatar } from '@/components/custom/avatar/SCAvatar';
import { SCScrollArea } from '@/components/custom/scrollArea/SCScrollArea';
import { cn } from '@/lib/utils';

const SC_SIDEBAR_SIZES = {
    default: 'w-64',
    sm: 'w-48',
    lg: 'w-72',
} as const;

interface MenuItem {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    href?: string;
    section?: string;
    isActive?: boolean;
    items?: {
        label: string;
        href: string;
    }[];
}

interface SCSidebarProps {
    organization?: {
        name: string;
        logo: React.ReactNode;
        subText?: string;
        logoBgColor?: string;
    };
    user?: {
        name: string;
        email: string;
        avatar?: string;
        avatarBgColor?: string;
        avatarClassName?: string;
    };
    menuItems: MenuItem[];
    className?: string;
    currentPath?: string;
    size?: keyof typeof SC_SIDEBAR_SIZES;
    sections?: string[];
    collapsible?: boolean;
    hideToggle?: boolean;
    triggerIcon?: React.ReactNode;
    triggerClassName?: string;
    renderLink?: (href: string, children: React.ReactNode, className?: string) => React.ReactNode;
    onLogout?: () => void;
    onProfileClick?: () => void;
    onSettingsClick?: () => void;
    useDropdownMenu?: boolean;
    onUserClick?: () => void;
}

// 내부 헬퍼 컴포넌트 추가
const LinkWrapper = ({ href, children, isActive }: { href: string; children: React.ReactNode; isActive?: boolean }) => {
    return (
        <a href={href} className={cn('flex w-full items-center text-foreground no-underline', isActive && 'bg-accent')}>
            {children}
        </a>
    );
};

export const SCSidebar = React.memo(
    ({
        organization,
        user,
        menuItems,
        className,
        currentPath = '/',
        size = 'default',
        sections,
        collapsible = true,
        renderLink,
        onLogout,
        onProfileClick,
        onSettingsClick,
        useDropdownMenu = false,
        onUserClick,
    }: SCSidebarProps) => {
        const isActive = React.useCallback(
            (href?: string, items?: { href: string }[]) => {
                if (items) {
                    return items.some(item => item.href === currentPath);
                }
                return href === currentPath;
            },
            [currentPath],
        );

        const renderMenuItem = React.useCallback(
            (item: MenuItem) => {
                const active = isActive(item.href, item.items);
                return (
                    <Collapsible key={item.label} asChild defaultOpen={active} className="group/collapsible">
                        <SidebarMenuItem className={!item.items && currentPath === item.href ? 'bg-accent' : ''}>
                            {item.items ? (
                                <>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton
                                            tooltip={item.label}
                                            className={active ? 'bg-accent' : ''}
                                            aria-expanded={active}
                                        >
                                            {React.createElement(item.icon, {
                                                className: 'h-4 w-4',
                                            })}
                                            <span>{item.label}</span>
                                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            {item.items.map(subItem => (
                                                <SidebarMenuSubItem
                                                    key={subItem.label}
                                                    className={currentPath === subItem.href ? 'bg-accent' : ''}
                                                >
                                                    <SidebarMenuSubButton asChild>
                                                        {renderLink ? (
                                                            // 커스텀 Link 컴포넌트를 렌더링하되, 원본 스타일 속성을 전달
                                                            React.cloneElement(
                                                                renderLink(
                                                                    subItem.href,
                                                                    <span>{subItem.label}</span>,
                                                                ) as React.ReactElement,
                                                                {
                                                                    className:
                                                                        'flex w-full items-center text-foreground no-underline',
                                                                    style: { color: 'inherit', textDecoration: 'none' },
                                                                },
                                                            )
                                                        ) : (
                                                            <LinkWrapper
                                                                href={subItem.href}
                                                                isActive={currentPath === subItem.href}
                                                            >
                                                                <span>{subItem.label}</span>
                                                            </LinkWrapper>
                                                        )}
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </>
                            ) : (
                                <SidebarMenuButton
                                    tooltip={item.label}
                                    aria-current={currentPath === item.href ? 'page' : undefined}
                                >
                                    {React.createElement(item.icon, {
                                        className: 'h-4 w-4',
                                    })}
                                    {renderLink ? (
                                        // 커스텀 Link 컴포넌트를 렌더링하되, 원본 스타일 속성을 전달
                                        React.cloneElement(
                                            renderLink(
                                                item.href ?? '',
                                                <span>{item.label}</span>,
                                            ) as React.ReactElement,
                                            {
                                                className: 'flex w-full items-center text-foreground no-underline',
                                                style: { color: 'inherit', textDecoration: 'none' },
                                            },
                                        )
                                    ) : (
                                        <LinkWrapper href={item.href ?? '#'} isActive={currentPath === item.href}>
                                            <span>{item.label}</span>
                                        </LinkWrapper>
                                    )}
                                </SidebarMenuButton>
                            )}
                        </SidebarMenuItem>
                    </Collapsible>
                );
            },
            [isActive, currentPath, renderLink],
        );

        return (
            <Sidebar
                collapsible={collapsible ? 'icon' : 'none'}
                className={cn('h-screen border-r', SC_SIDEBAR_SIZES[size], className)}
            >
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size="lg">
                                <div
                                    className={cn(
                                        'flex size-8 shrink-0 items-center justify-center rounded-lg text-sidebar-primary-foreground',
                                        organization?.logoBgColor ? organization.logoBgColor : 'bg-sidebar-primary',
                                    )}
                                >
                                    <div className="flex size-4 items-center justify-center">{organization?.logo}</div>
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">{organization?.name}</span>
                                    {organization?.subText && (
                                        <span className="truncate text-xs text-muted-foreground">
                                            {organization?.subText}
                                        </span>
                                    )}
                                </div>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>

                <SidebarContent>
                    <SCScrollArea className="h-full">
                        {sections ? (
                            sections.map(section => (
                                <SidebarGroup key={section}>
                                    <SidebarGroupLabel>{section}</SidebarGroupLabel>
                                    <SidebarMenu>
                                        {menuItems.filter(item => item.section === section).map(renderMenuItem)}
                                    </SidebarMenu>
                                </SidebarGroup>
                            ))
                        ) : (
                            <SidebarGroup>
                                <SidebarMenu>{menuItems.map(renderMenuItem)}</SidebarMenu>
                            </SidebarGroup>
                        )}
                    </SCScrollArea>
                </SidebarContent>

                <SidebarFooter>
                    {user && (
                        <SidebarMenu>
                            <SidebarMenuItem>
                                {useDropdownMenu ? (
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <SidebarMenuButton size="lg">
                                                <SCAvatar
                                                    src={user.avatar}
                                                    alt={user.name}
                                                    className={cn('h-8 w-8', user.avatarClassName)}
                                                    fallbackClassName={user.avatarBgColor}
                                                />
                                                <div className="grid flex-1 text-left text-sm leading-tight">
                                                    <span className="truncate font-semibold">{user.name}</span>
                                                    <span className="truncate text-xs text-muted-foreground">
                                                        {user.email}
                                                    </span>
                                                </div>
                                            </SidebarMenuButton>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent side="top" className="w-56">
                                            {onProfileClick && (
                                                <DropdownMenuItem onClick={onProfileClick}>
                                                    <User className="mr-2 h-4 w-4" />
                                                    프로필
                                                </DropdownMenuItem>
                                            )}
                                            {onSettingsClick && (
                                                <DropdownMenuItem onClick={onSettingsClick}>
                                                    <Settings className="mr-2 h-4 w-4" />
                                                    설정
                                                </DropdownMenuItem>
                                            )}
                                            {onLogout && (
                                                <>
                                                    {(onProfileClick || onSettingsClick) && <DropdownMenuSeparator />}
                                                    <DropdownMenuItem onClick={onLogout}>
                                                        <LogOut className="mr-2 h-4 w-4" />
                                                        로그아웃
                                                    </DropdownMenuItem>
                                                </>
                                            )}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                ) : (
                                    <SidebarMenuButton size="lg" onClick={onUserClick}>
                                        <SCAvatar
                                            src={user.avatar}
                                            alt={user.name}
                                            className={cn('h-8 w-8', user.avatarClassName)}
                                            fallbackClassName={user.avatarBgColor}
                                        />
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-semibold">{user.name}</span>
                                            <span className="truncate text-xs text-muted-foreground">{user.email}</span>
                                        </div>
                                    </SidebarMenuButton>
                                )}
                            </SidebarMenuItem>
                        </SidebarMenu>
                    )}
                </SidebarFooter>
                <SidebarRail />
            </Sidebar>
        );
    },
);

SCSidebar.displayName = 'SCSidebar';
