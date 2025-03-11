import * as React from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import { cn } from '@/lib/utils';

// 상수 정의
const SC_ACCORDION_SIZES = {
    default: 'default',
    sm: 'sm',
    lg: 'lg',
} as const;

/**
 * 아코디언 아이템의 구조를 정의하는 인터페이스
 * @interface SCAccordionItem
 * @property {string} id - 아이템의 고유 식별자
 * @property {string} title - 아코디언 헤더에 표시될 제목
 * @property {React.ReactNode} content - 아코디언 내용
 */
interface SCAccordionItem {
    id: string;
    title: string;
    content: React.ReactNode;
}

/**
 * 아코디언 컴포넌트의 props 인터페이스
 * @interface SCAccordionProps
 * @template T - 'single' | 'multiple' 타입
 * @property {SCAccordionItem[]} items - 아코디언 아이템 배열
 * @property {T} [type='single'] - 단일/다중 선택 모드
 * @property {string | string[]} [defaultValue] - 기본 선택값
 * @property {string} [className] - 추가 스타일 클래스
 * @property {keyof typeof SC_ACCORDION_SIZES} [size='default'] - 아코디언 크기
 * @property {boolean} [collapsible=true] - 모든 항목을 닫을 수 있는지 여부
 */
interface SCAccordionProps<T extends 'single' | 'multiple' = 'single'> {
    items: SCAccordionItem[];
    type?: T;
    defaultValue?: T extends 'single' ? string : string[];
    className?: string;
    customClassName?: string;
    size?: keyof typeof SC_ACCORDION_SIZES;
    collapsible?: boolean;
}

export type SCAccordionType = 'single' | 'multiple';
export type SCAccordionComponent = (<T extends SCAccordionType = 'single'>(
    props: SCAccordionProps<T>,
) => React.ReactElement) & {
    displayName?: string;
};

/**
 * SCAccordion 컴포넌트는 접을 수 있는 아코디언 UI를 제공합니다.
 * @param items - 아코디언 아이템 배열
 * @param type - 단일/다중 선택 여부
 * @param size - 아코디언 크기
 */
const SCAccordionBase = <T extends SCAccordionType>({
    items,
    type = 'single' as T,
    defaultValue,
    className,
    customClassName,
    size = 'default',
    collapsible = true,
}: SCAccordionProps<T>) => {
    const sizeClasses = React.useMemo(
        () => ({
            default: 'py-4',
            sm: 'py-2',
            lg: 'py-6',
        }),
        [],
    );

    const triggerClasses = cn(sizeClasses[size], size === 'sm' ? 'text-sm' : 'text-base');

    const contentClasses = cn(size === 'sm' ? 'text-sm' : 'text-base');

    return type === 'single' ? (
        <Accordion
            type="single"
            defaultValue={defaultValue as string}
            collapsible={collapsible}
            className={cn('w-full', customClassName, className)}
        >
            {items.map(item => (
                <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger className={triggerClasses}>{item.title}</AccordionTrigger>
                    <AccordionContent className={contentClasses}>{item.content}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    ) : (
        <Accordion
            type="multiple"
            defaultValue={defaultValue as string[]}
            className={cn('w-full', customClassName, className)}
        >
            {items.map(item => (
                <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger className={triggerClasses}>{item.title}</AccordionTrigger>
                    <AccordionContent className={contentClasses}>{item.content}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export const SCAccordion = React.memo(SCAccordionBase) as SCAccordionComponent;

SCAccordion.displayName = 'SCAccordion';
