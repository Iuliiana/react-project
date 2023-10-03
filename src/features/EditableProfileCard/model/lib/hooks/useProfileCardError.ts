import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ProfileErrorsCode } from '../../consts/profileErrorsCodeConsts';
import { getProfileValidateErrors } from '../../selectors/getProfileValidateErrors/getProfileValidateErrors';

export const useProfileCardError = () => {
    const validateErrors = useSelector(getProfileValidateErrors);
    const { t } = useTranslation('profile');
    const errorsMap = {
        [ProfileErrorsCode.INCORRECT_USERDATA]: t(
            'Введите корректные пользовательские данные',
        ),
        [ProfileErrorsCode.INCORRECT_AGE]: t('Введите корректный возраст'),
        [ProfileErrorsCode.INCORRECT_CITY]: t('Введите корректный город'),
        [ProfileErrorsCode.INCORRECT_USERNAME]: t('Введите корректный логин'),
        [ProfileErrorsCode.EMPTY_DATA]: t(
            'Вы пытаетесь отправить пустой профиль',
        ),
        [ProfileErrorsCode.SERVER_ERROR]: t(
            'Ошибка при обновлении данных. Попробуйте ещё раз.',
        ),
    };

    return {
        validateErrors,
        errorsMap,
    };
};
