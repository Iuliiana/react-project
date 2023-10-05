import { memo } from 'react';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { StickyContentLayout } from '../StickyContentLayout/StickyContentLayout';

export const PageLoaderLayout = memo(() => (
    <StickyContentLayout
        content={
            <Card>
                <VStack gap="16" max>
                    <Skeleton width="100%" height={32} />
                    <Skeleton width="100%" height={32} />
                    <Skeleton width="100%" height={32} />
                    <Skeleton width="100%" height={80} />
                    <Skeleton width="100%" height={500} />
                </VStack>
            </Card>
        }
    />
));
