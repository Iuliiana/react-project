import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
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
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    className={cls.input}
                    onChange={onSetComment}
                    data-testid="AddCommentForm.Input"
                />
                <Button
                    type="submit"
                    themeButton={ButtonTheme.BACKGROUND_INVERTRD}
                    onClick={onSendCommentHandler}
                    data-testid="AddCommentForm.Button"
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
