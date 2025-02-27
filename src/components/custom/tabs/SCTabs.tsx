import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import React from 'react';

interface TabItem {
    value: string;
    label: string;
    content: React.ReactNode;
    disabled?: boolean;
}

interface SCTabsProps {
    items: TabItem[];
    defaultValue?: string;
    className?: string;
    onChange?: (value: string) => void;
}

export const SCTabs = React.memo(({ items, defaultValue, className, onChange }: SCTabsProps) => {
    return (
        <Tabs defaultValue={defaultValue || items[0]?.value} className={className} onValueChange={onChange}>
            <TabsList>
                {items.map(tab => (
                    <TabsTrigger key={tab.value} value={tab.value} disabled={tab.disabled}>
                        {tab.label}
                    </TabsTrigger>
                ))}
            </TabsList>
            {items.map(tab => (
                <TabsContent key={tab.value} value={tab.value}>
                    {tab.content}
                </TabsContent>
            ))}
        </Tabs>
    );
});

SCTabs.displayName = 'SCTabs';
