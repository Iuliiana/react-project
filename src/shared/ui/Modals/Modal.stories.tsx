import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {},
    args: {
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi delectus rem tenetur veniam. Ab adipisci amet animi corporis culpa dicta dolorem dolorum eum exercitationem expedita fugiat fugit id impedit incidunt ipsam labore modi molestias officiis optio perspiciatis praesentium quos rem repellat sequi, soluta suscipit ullam vero? Aperiam dolorem enim hic iure iusto laudantium perferendis quibusdam, sapiente sunt velit! Corporis impedit labore nobis pariatur perferendis perspiciatis rem voluptatum!',
        isOpen: true,
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalPrimary = Template.bind({});
ModalPrimary.args = {};

export const ModalPrimaryDark = Template.bind({});
ModalPrimaryDark.args = {};
ModalPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ModalPrimaryRedesigned = Template.bind({});
ModalPrimaryRedesigned.args = {};
ModalPrimaryRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.LIGHT),
];

export const ModalPrimaryDarkRedesigned = Template.bind({});
ModalPrimaryDarkRedesigned.args = {};
ModalPrimaryDarkRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];
