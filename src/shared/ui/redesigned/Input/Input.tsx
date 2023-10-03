import {
    ChangeEvent,
    FC,
    InputHTMLAttributes,
    memo,
    MutableRefObject,
    ReactElement,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type InputPropsType = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;
interface InputProps extends InputPropsType {
    className?: string;
    onChange?: (value: string) => void;
    value?: string | number;
    autoFocus?: boolean;
    readonly?: boolean;
    addonRight?: ReactElement;
    addonLeft?: ReactElement;
    labelText?: string;
}
export const Input: FC<InputProps> = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        readonly,
        addonRight,
        addonLeft,
        labelText,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const ref = useRef() as MutableRefObject<HTMLInputElement>;

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const mods = {
        [cls.readonly]: readonly,
        [cls.focused]: isFocused,
        [cls.withAddonLeft]: Boolean(addonLeft),
        [cls.withAddonRight]: Boolean(addonRight),
    };

    const input = (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.Input}
                onFocus={onFocus}
                onBlur={onBlur}
                readOnly={readonly}
                placeholder={placeholder}
                {...otherProps}
            />
            {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
        </div>
    );

    if (labelText) {
        return (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label
                className={classNames(cls.labelWrapper, {
                    [cls.readonlyLabel]: readonly,
                    [cls.focusedLabel]: isFocused,
                })}
            >
                {labelText}
                {input}
            </label>
        );
    }

    return input;
});
