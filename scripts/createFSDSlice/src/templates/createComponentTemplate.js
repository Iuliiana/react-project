const toUpperFirstChar = require('../helpers/toUpperFirstChar');

module.exports = function createComponentTemplate(sliceName, isPage) {
    const upperFirstCharName = toUpperFirstChar(sliceName);
    const interfaceName = 'interface';

    return `import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './${upperFirstCharName}.module.scss';

${interfaceName} ${upperFirstCharName}Props {
    className?: string,
}

${!isPage ? 'export' : ''} const ${upperFirstCharName} = memo((props: ${upperFirstCharName}Props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.${upperFirstCharName}, {}, [className])}>
            !!!
        </div>
    );
});
${isPage ? `export default ${upperFirstCharName};` : ''}
`;
};
