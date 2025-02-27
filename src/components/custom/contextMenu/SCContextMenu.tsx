import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from '@/components/ui/context-menu';
import React, { useEffect } from 'react';

interface ShortcutKey {
    key: string; // 실제 키 (예: 'b', '[', ']')
    metaKey?: boolean; // Command/Control 키
    shiftKey?: boolean; // Shift 키
    display: string; // 화면에 표시될 텍스트 (예: '⌘[', '⇧⌘S')
}

export interface MenuItem {
    id: string;
    label?: string;
    shortcut?: ShortcutKey; // string 대신 ShortcutKey 타입 사용
    disabled?: boolean;
    type?: 'item' | 'checkbox' | 'separator' | 'sub' | 'radio-group';
    checked?: boolean;
    items?: MenuItem[]; // 서브메뉴 아이템
    value?: string; // radio 아이템용
    inset?: boolean;
}

interface MenuRadioGroup {
    id: string;
    label: string;
    type: 'radio-group';
    value: string;
    items: {
        value: string;
        label: string;
    }[];
}

interface SCContextMenuProps {
    trigger: React.ReactNode;
    items: (MenuItem | MenuRadioGroup)[];
    className?: string;
    onItemClick?: (item: MenuItem) => void;
    onCheckboxChange?: (item: MenuItem, checked: boolean) => void;
    onRadioChange?: (groupId: string, value: string) => void;
}

export const SCContextMenu = ({
    trigger,
    items,
    className,
    onItemClick,
    onCheckboxChange,
    onRadioChange,
}: SCContextMenuProps) => {
    useEffect(() => {
        const findAndTriggerShortcut = (items: (MenuItem | MenuRadioGroup)[], event: KeyboardEvent) => {
            for (const item of items) {
                // radio-group이 아닌 경우에만 서브메뉴 검사
                if ('items' in item && item.items && item.type !== 'radio-group') {
                    const found = findAndTriggerShortcut(item.items, event);
                    if (found) return true;
                }

                // shortcut이 있는 아이템 처리
                if ('shortcut' in item && item.shortcut && !item.disabled) {
                    const { key, metaKey, shiftKey } = item.shortcut;
                    const isCommandOrControl = metaKey && (event.metaKey || event.ctrlKey);

                    if (
                        event.key.toLowerCase() === key.toLowerCase() &&
                        isCommandOrControl &&
                        event.shiftKey === !!shiftKey
                    ) {
                        event.preventDefault();
                        onItemClick?.(item as MenuItem);
                        return true;
                    }
                }
            }
            return false;
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            findAndTriggerShortcut(items, event);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [items, onItemClick]);

    const renderMenuItem = (item: MenuItem | MenuRadioGroup) => {
        switch (item.type) {
            case 'separator':
                return <ContextMenuSeparator key={item.id} />;

            case 'checkbox':
                return (
                    <ContextMenuCheckboxItem
                        key={item.id}
                        checked={item.checked}
                        onCheckedChange={checked => onCheckboxChange?.(item as MenuItem, checked)}
                    >
                        {item.label}
                        {item.shortcut && <ContextMenuShortcut>{item.shortcut.display}</ContextMenuShortcut>}
                    </ContextMenuCheckboxItem>
                );

            case 'sub':
                return (
                    <ContextMenuSub key={item.id}>
                        <ContextMenuSubTrigger inset={item.inset}>{item.label}</ContextMenuSubTrigger>
                        <ContextMenuSubContent className="w-48">
                            {item.items?.map(renderMenuItem)}
                        </ContextMenuSubContent>
                    </ContextMenuSub>
                );

            case 'radio-group':
                const radioGroup = item as MenuRadioGroup;
                return (
                    <ContextMenuRadioGroup
                        key={radioGroup.id}
                        value={radioGroup.value}
                        onValueChange={value => onRadioChange?.(radioGroup.id, value)}
                    >
                        <ContextMenuLabel inset>{radioGroup.label}</ContextMenuLabel>
                        <ContextMenuSeparator />
                        {radioGroup.items.map(radioItem => (
                            <ContextMenuRadioItem key={radioItem.value} value={radioItem.value}>
                                {radioItem.label}
                            </ContextMenuRadioItem>
                        ))}
                    </ContextMenuRadioGroup>
                );

            default:
                return (
                    <ContextMenuItem
                        key={item.id}
                        disabled={item.disabled}
                        inset={item.inset}
                        onClick={() => onItemClick?.(item as MenuItem)}
                    >
                        {item.label}
                        {item.shortcut && <ContextMenuShortcut>{item.shortcut.display}</ContextMenuShortcut>}
                    </ContextMenuItem>
                );
        }
    };

    return (
        <ContextMenu>
            <ContextMenuTrigger className={className}>{trigger}</ContextMenuTrigger>
            <ContextMenuContent className="w-64">{items.map(renderMenuItem)}</ContextMenuContent>
        </ContextMenu>
    );
};
