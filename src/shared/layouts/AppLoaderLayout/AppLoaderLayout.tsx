import { memo } from 'react';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import cls from './AppLoaderLayout.module.scss';
import { MainLayout } from '../MainLayout/MainLayout';

export const AppLoaderLayout = memo(() => (
    <MainLayout
        header={
            <Skeleton
                width="100%"
                height={89}
                className={cls.header}
                radius="16px"
            />
        }
        sidebar={
            <Skeleton
                width="100%"
                height="100%"
                radius="32px"
                className={cls.sidebar}
            />
        }
        content={
            <Card className={cls.content}>
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
