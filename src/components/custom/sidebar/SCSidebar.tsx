import { ChevronRight, Menu } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
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
    SidebarProvider,
    SidebarRail,
    SidebarTrigger,
    useSidebar,
} from '@/components/ui/sidebar';

import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import React from 'react';
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
        avatar: string;
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
}

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
        hideToggle = false,
        triggerIcon,
        triggerClassName,
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
            (item: MenuItem) => (
                <Collapsible
                    key={item.label}
                    asChild
                    defaultOpen={isActive(item.href, item.items)}
                    className="group/collapsible"
                >
                    <SidebarMenuItem>
                        {item.items ? (
                            <>
                                <CollapsibleTrigger asChild>
                                    <SidebarMenuButton
                                        tooltip={item.label}
                                        className={isActive(item.href, item.items) ? 'bg-accent' : ''}
                                        aria-expanded={isActive(item.href, item.items)}
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
                                            <SidebarMenuSubItem key={subItem.label}>
                                                <SidebarMenuSubButton asChild>
                                                    <a
                                                        href={subItem.href}
                                                        className={currentPath === subItem.href ? 'bg-accent' : ''}
                                                    >
                                                        <span>{subItem.label}</span>
                                                    </a>
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
                                <span>{item.label}</span>
                            </SidebarMenuButton>
                        )}
                    </SidebarMenuItem>
                </Collapsible>
            ),
            [isActive, currentPath],
        );

        // 커스텀 트리거 컴포넌트
        const CustomTrigger = React.useCallback(() => {
            const { toggleSidebar } = useSidebar();
            return (
                <Button
                    onClick={toggleSidebar}
                    data-sidebar="trigger"
                    variant="ghost"
                    size="icon"
                    className={cn('h-7 w-7', triggerClassName)}
                >
                    {triggerIcon}
                    <span className="sr-only">Toggle Sidebar</span>
                </Button>
            );
        }, [triggerClassName, triggerIcon]);

        return (
            <SidebarProvider defaultOpen>
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
                                        <div className="flex size-4 items-center justify-center">
                                            {organization?.logo}
                                        </div>
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
                                    <SidebarMenuButton size="lg">
                                        <Avatar className="h-8 w-8">
                                            <img src={user.avatar} alt={user.name} />
                                        </Avatar>
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-semibold">{user.name}</span>
                                            <span className="truncate text-xs text-muted-foreground">{user.email}</span>
                                        </div>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        )}
                    </SidebarFooter>
                    <SidebarRail />
                </Sidebar>
                {!hideToggle &&
                    collapsible &&
                    (triggerIcon ? <CustomTrigger /> : <SidebarTrigger className={triggerClassName} />)}
            </SidebarProvider>
        );
    },
);

SCSidebar.displayName = 'SCSidebar';
