import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Popover } from './Popover';

const children = (
    <div className="src-shared-ui-Stack-Flex-Flex-module__Flex--mO43LCqw src-shared-ui-Stack-Flex-Flex-module__justifyBetween--s13sAOk4 src-shared-ui-Stack-Flex-Flex-module__alignCenter--BKr_P3mS src-shared-ui-Stack-Flex-Flex-module__gap8--RhAIKGQR src-shared-ui-Stack-Flex-Flex-module__directionColumn--OCAXCLkJ src-shared-ui-Stack-Flex-Flex-module__max--kkxp_XMH">
        <div className="src-shared-ui-redesigned-Card-Card-module__Card--tdYKV7Nz src-entities-Notification-ui-NotificationItem-NotificationItem-module__NotificationItemRedesigned--MMY5bVZH src-shared-ui-redesigned-Card-Card-module__p-16--g0_20Z5P src-shared-ui-redesigned-Card-Card-module__standard--GdcjyqvF">
            <div className=" src-shared-ui-redesigned-Text-Text-module__primary--LpZaj8TO src-shared-ui-redesigned-Text-Text-module__left--tEldn6vK src-shared-ui-redesigned-Text-Text-module__size_m--LnP1LwFQ src-shared-ui-redesigned-Text-Text-module__margin_16--aIcGkGXt">
                <h2
                    className="src-shared-ui-redesigned-Text-Text-module__TextTitle--DyBDgXmw src-shared-ui-redesigned-Text-Text-module__TextItem--b2Zx8tpW"
                    data-testid="Text.Head"
                >
                    Уведомление 1
                </h2>
                <p
                    className="src-shared-ui-redesigned-Text-Text-module__TextParagraph--ewcMLUV8 src-shared-ui-redesigned-Text-Text-module__TextItem--b2Zx8tpW"
                    data-testid="Text.Paragraph"
                >
                    Произошло какое-то событие
                </p>
            </div>
        </div>
        <a
            className="src-entities-Notification-ui-NotificationItem-NotificationItem-module__linkRedesigned--ltFz6Gre"
            target="_blank"
            href="http://localhost:3000/admin"
            rel="noreferrer"
        >
            <div className="src-shared-ui-redesigned-Card-Card-module__Card--tdYKV7Nz src-entities-Notification-ui-NotificationItem-NotificationItem-module__NotificationItemRedesigned--MMY5bVZH src-shared-ui-redesigned-Card-Card-module__p-16--g0_20Z5P src-shared-ui-redesigned-Card-Card-module__standard--GdcjyqvF">
                <div className=" src-shared-ui-redesigned-Text-Text-module__primary--LpZaj8TO src-shared-ui-redesigned-Text-Text-module__left--tEldn6vK src-shared-ui-redesigned-Text-Text-module__size_m--LnP1LwFQ src-shared-ui-redesigned-Text-Text-module__margin_16--aIcGkGXt">
                    <h2
                        className="src-shared-ui-redesigned-Text-Text-module__TextTitle--DyBDgXmw src-shared-ui-redesigned-Text-Text-module__TextItem--b2Zx8tpW"
                        data-testid="Text.Head"
                    >
                        Уведомление 2
                    </h2>
                    <p
                        className="src-shared-ui-redesigned-Text-Text-module__TextParagraph--ewcMLUV8 src-shared-ui-redesigned-Text-Text-module__TextItem--b2Zx8tpW"
                        data-testid="Text.Paragraph"
                    >
                        Произошло какое-то событие
                    </p>
                </div>
            </div>
        </a>
        <a
            className="src-entities-Notification-ui-NotificationItem-NotificationItem-module__linkRedesigned--ltFz6Gre"
            target="_blank"
            href="http://localhost:3000/admin"
            rel="noreferrer"
        >
            <div className="src-shared-ui-redesigned-Card-Card-module__Card--tdYKV7Nz src-entities-Notification-ui-NotificationItem-NotificationItem-module__NotificationItemRedesigned--MMY5bVZH src-shared-ui-redesigned-Card-Card-module__p-16--g0_20Z5P src-shared-ui-redesigned-Card-Card-module__standard--GdcjyqvF">
                <div className=" src-shared-ui-redesigned-Text-Text-module__primary--LpZaj8TO src-shared-ui-redesigned-Text-Text-module__left--tEldn6vK src-shared-ui-redesigned-Text-Text-module__size_m--LnP1LwFQ src-shared-ui-redesigned-Text-Text-module__margin_16--aIcGkGXt">
                    <h2
                        className="src-shared-ui-redesigned-Text-Text-module__TextTitle--DyBDgXmw src-shared-ui-redesigned-Text-Text-module__TextItem--b2Zx8tpW"
                        data-testid="Text.Head"
                    >
                        Уведомление 3
                    </h2>
                    <p
                        className="src-shared-ui-redesigned-Text-Text-module__TextParagraph--ewcMLUV8 src-shared-ui-redesigned-Text-Text-module__TextItem--b2Zx8tpW"
                        data-testid="Text.Paragraph"
                    >
                        Произошло какое-то событие
                    </p>
                </div>
            </div>
        </a>
    </div>
);

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {},
    args: {
        btn: <div role="button">test</div>,
        children,
        direction: 'bottom',
    },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
    <Popover {...args} />
);

export const PopoverNormal = Template.bind({});
PopoverNormal.args = {};

export const PopoverDark = Template.bind({});
PopoverDark.args = {};
PopoverDark.decorators = [ThemeDecorator(Theme.DARK)];
