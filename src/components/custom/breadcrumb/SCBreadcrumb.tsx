import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ChevronDown, ChevronRight, MoreHorizontal } from 'lucide-react';
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';
import React from 'react';
import { cn } from '@/lib/utils';

export interface BreadcrumbItemProps {
    label: string;
    href?: string;
    isCurrentPage?: boolean;
    dropdownItems?: Array<{ label: string; href: string }>;
}

export interface SCBreadcrumbProps {
    items: BreadcrumbItemProps[];
    separator?: React.ReactNode;
    maxItems?: number;
    className?: string;
    responsive?: boolean;
}

export const SCBreadcrumb = ({
    items,
    separator = <ChevronRight className="h-4 w-4" />,
    maxItems = 0,
    className,
    responsive = false,
}: SCBreadcrumbProps) => {
    // 표시할 아이템 결정
    const shouldCollapse = maxItems > 0 && items.length > maxItems;
    const visibleItems = shouldCollapse
        ? [
              ...items.slice(0, 1),
              { label: 'ellipsis', href: '', isCurrentPage: false },
              ...items.slice(items.length - (maxItems - 1), items.length),
          ]
        : items;

    // 생략된 아이템들
    const collapsedItems = shouldCollapse ? items.slice(1, items.length - (maxItems - 1)) : [];

    return (
        <Breadcrumb className={cn(className)}>
            <BreadcrumbList>
                {visibleItems.map((item, index) => {
                    // 생략 표시 처리
                    if (item.label === 'ellipsis') {
                        return (
                            <React.Fragment key="ellipsis">
                                <BreadcrumbItem>
                                    {responsive ? (
                                        <>
                                            {/* 데스크탑에서는 드롭다운 메뉴 */}
                                            <div className="hidden md:flex">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="icon" className="h-auto p-0">
                                                            <BreadcrumbEllipsis className="h-4 w-4" />
                                                            <span className="sr-only">더 보기</span>
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="start">
                                                        {collapsedItems.map((item, i) => (
                                                            <DropdownMenuItem key={i} asChild>
                                                                <BreadcrumbLink href={item.href || '#'}>
                                                                    {item.label}
                                                                </BreadcrumbLink>
                                                            </DropdownMenuItem>
                                                        ))}
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>

                                            {/* 모바일에서는 드로어 */}
                                            <div className="flex md:hidden">
                                                <Drawer>
                                                    <DrawerTrigger asChild>
                                                        <Button variant="ghost" size="icon" className="h-auto p-0">
                                                            <MoreHorizontal className="h-4 w-4" />
                                                            <span className="sr-only">더 보기</span>
                                                        </Button>
                                                    </DrawerTrigger>
                                                    <DrawerContent>
                                                        <div className="p-4">
                                                            <h4 className="mb-4 text-sm font-medium">경로 이동</h4>
                                                            <div className="space-y-2">
                                                                {collapsedItems.map((item, i) => (
                                                                    <DrawerClose key={i} asChild>
                                                                        <Button
                                                                            variant="ghost"
                                                                            className="w-full justify-start"
                                                                            asChild
                                                                        >
                                                                            <a href={item.href || '#'}>{item.label}</a>
                                                                        </Button>
                                                                    </DrawerClose>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </DrawerContent>
                                                </Drawer>
                                            </div>
                                        </>
                                    ) : (
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon" className="h-auto p-0">
                                                    <BreadcrumbEllipsis className="h-4 w-4" />
                                                    <span className="sr-only">더 보기</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="start">
                                                {collapsedItems.map((item, i) => (
                                                    <DropdownMenuItem key={i} asChild>
                                                        <BreadcrumbLink href={item.href || '#'}>
                                                            {item.label}
                                                        </BreadcrumbLink>
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    )}
                                </BreadcrumbItem>
                                <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
                            </React.Fragment>
                        );
                    }

                    // 드롭다운 메뉴가 있는 아이템
                    if (item.dropdownItems && item.dropdownItems.length > 0) {
                        return (
                            <React.Fragment key={index}>
                                <BreadcrumbItem>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium">
                                            {item.label}
                                            <ChevronDown className="h-4 w-4" />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="start">
                                            {item.dropdownItems.map((dropdownItem, i) => (
                                                <DropdownMenuItem key={i} asChild>
                                                    <BreadcrumbLink href={dropdownItem.href}>
                                                        {dropdownItem.label}
                                                    </BreadcrumbLink>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </BreadcrumbItem>
                                {index < visibleItems.length - 1 && (
                                    <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>
                                )}
                            </React.Fragment>
                        );
                    }

                    // 일반 아이템
                    return (
                        <React.Fragment key={index}>
                            <BreadcrumbItem>
                                {item.isCurrentPage ? (
                                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink href={item.href || '#'}>{item.label}</BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                            {index < visibleItems.length - 1 && <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>}
                        </React.Fragment>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
};
