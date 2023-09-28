import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type SvgIcon = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface BaseIcon extends SvgIcon {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

interface ClickableIconProps extends BaseIcon {
    isClickable?: boolean;
    onClick?: () => void;
}

interface NonClickableIconProps extends BaseIcon {
    isClickable: false;
}

type IconProps = ClickableIconProps | NonClickableIconProps;

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        isClickable,
        width = 32,
        height = 32,
        ...otherProps
    } = props;

    const icon = (
        <Svg
            className={classNames(cls.Icon, {}, [className])}
            width={width}
            height={height}
            {...otherProps}
            onClick={undefined}
        />
    );

    if (isClickable) {
        return (
            <button
                className={cls.button}
                type="button"
                onClick={props.onClick}
                style={{ height, width }}
            >
                {icon}
            </button>
        );
    }

    return icon;
});
