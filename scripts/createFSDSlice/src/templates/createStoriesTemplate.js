const toUpperFirstChar = require('../helpers/toUpperFirstChar');

module.exports = function createStoriesTemplate(layer, sliceName, isPage) {
    const upperFirstCharName = toUpperFirstChar(sliceName);

    const componentImport = isPage
        ? `import ${upperFirstCharName} from './${upperFirstCharName}';`
        : `import { ${upperFirstCharName} } from './${upperFirstCharName}';`;

    return `import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
// import { StoreDecorator } from 'shared/configs/storybook/StoreDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
${componentImport}

export default {
    title: '${layer}/${upperFirstCharName}',
    component: ${upperFirstCharName},
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ${upperFirstCharName}>;

const Template: ComponentStory<typeof ${upperFirstCharName}> = (args) => <${upperFirstCharName} {...args} />;

export const ${upperFirstCharName}Normal = Template.bind({});
${upperFirstCharName}Normal.args = {};

export const ${upperFirstCharName}Dark = Template.bind({});
${upperFirstCharName}Dark.args = {};
${upperFirstCharName}Dark.decorators = [ThemeDecorator(Theme.DARK)];
// StoreDecorator({})
`;
};
