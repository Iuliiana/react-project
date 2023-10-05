import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { HStack } from '@/shared/ui/Stack';
import cls from './AddCommentForm.module.scss';
import { getAddCommentFormText } from '../model/selectors/addCommentFormSelectors';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../model/slice/addCommentFormSlice';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducersList: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const dispatch = useAppDispatch();

    const onSetComment = useCallback(
        (text: string) => {
            dispatch(addCommentFormActions.setText(text));
        },
        [dispatch],
    );

    const onSendCommentHandler = useCallback(() => {
        onSendComment(text || '');
        onSetComment('');
    }, [onSendComment, onSetComment, text]);

    return (
        <DynamicModuleLoader asyncReducers={reducersList}>
            <ToggleFeatureFlag
                feature="isAppRedesigned"
                on={
                    <HStack
                        max
                        align="center"
                        gap="16"
                        className={classNames('', {}, [className])}
                    >
                        <Input
                            placeholder={t('Введите текст комментария')}
                            value={text}
                            onChange={onSetComment}
                            data-testid="AddCommentForm.Input"
                        />
                        <Button
                            type="submit"
                            variant="outline"
                            onClick={onSendCommentHandler}
                            data-testid="AddCommentForm.Button"
                        >
                            {t('Отправить')}
                        </Button>
                    </HStack>
                }
                off={
                    <div
                        className={classNames(cls.AddCommentForm, {}, [
                            className,
                        ])}
                    >
                        <InputDeprecated
                            placeholder={t('Введите текст комментария')}
                            value={text}
                            className={cls.input}
                            onChange={onSetComment}
                            data-testid="AddCommentForm.Input"
                        />
                        <ButtonDeprecated
                            type="submit"
                            themeButton={ButtonTheme.BACKGROUND_INVERTRD}
                            onClick={onSendCommentHandler}
                            data-testid="AddCommentForm.Button"
                        >
                            {t('Отправить')}
                        </ButtonDeprecated>
                    </div>
                }
            />
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
