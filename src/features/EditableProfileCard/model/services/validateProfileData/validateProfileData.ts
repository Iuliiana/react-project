/* можно брать данные из state или принимать на вход */
import { Profile } from '@/entities/Profile';
import { ProfileErrorsCode } from '../../consts/profileErrorsCodeConsts';

export const validateProfileData = (profileData?: Profile) => {
    if (!profileData) {
        return [ProfileErrorsCode.EMPTY_DATA];
    }

    const errors: ProfileErrorsCode[] = [];

    if (!profileData.first?.trim() || !profileData.lastname?.trim()) {
        errors.push(ProfileErrorsCode.INCORRECT_USERDATA);
    }

    if (!profileData.username?.trim()) {
        errors.push(ProfileErrorsCode.INCORRECT_USERNAME);
    }

    if (!profileData.city?.trim()) {
        errors.push(ProfileErrorsCode.INCORRECT_CITY);
    }

    if (!profileData.age || !Number.isInteger(profileData.age)) {
        errors.push(ProfileErrorsCode.INCORRECT_AGE);
    }

    return errors;
};
