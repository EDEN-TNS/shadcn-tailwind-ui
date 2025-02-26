import * as React from 'react';
import { ChevronDown } from 'lucide-react';
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
 */
interface SCAccordionProps<T extends 'single' | 'multiple' = 'single'> {
    items: SCAccordionItem[];
    type?: T;
    defaultValue?: T extends 'single' ? string : string[];
    className?: string;
    customClassName?: string;
    size?: keyof typeof SC_ACCORDION_SIZES;
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
const AccordionBase = <T extends SCAccordionType>({
    items,
    type = 'single' as T,
    defaultValue,
    className,
    customClassName,
    size = 'default',
}: SCAccordionProps<T>) => {
    const sizeClasses = React.useMemo(
        () => ({
            default: 'py-4 sm:py-6',
            sm: 'py-2 sm:py-4',
            lg: 'py-6 sm:py-8',
        }),
        [],
    );

    const triggerClasses = cn(
        'flex flex-1 items-center justify-between text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
        sizeClasses[size],
    );

    const contentClasses = cn(
        'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden',
        size === 'sm' ? 'text-xs' : 'text-sm',
    );

    return type === 'single' ? (
        <Accordion
            type="single"
            defaultValue={defaultValue as string}
            className={cn('w-full', customClassName, className)}
        >
            {items.map(item => (
                <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger className={triggerClasses} aria-label={`${item.title} 토글`}>
                        {item.title}
                        <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                    </AccordionTrigger>
                    <AccordionContent className={contentClasses}>
                        <div className="pb-4 pt-0">{item.content}</div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    ) : (
        <Accordion
            type="multiple"
            defaultValue={defaultValue as unknown as string[]}
            className={cn('w-full', customClassName, className)}
        >
            {items.map(item => (
                <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger className={triggerClasses} aria-label={`${item.title} 토글`}>
                        {item.title}
                        <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                    </AccordionTrigger>
                    <AccordionContent className={contentClasses}>
                        <div className="pb-4 pt-0">{item.content}</div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export const SCAccordion = React.memo(AccordionBase) as SCAccordionComponent;

SCAccordion.displayName = 'SCAccordion';
