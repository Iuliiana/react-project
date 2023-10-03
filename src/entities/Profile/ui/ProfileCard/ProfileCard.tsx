import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import { TestsProps } from '@/shared/lib/types/tests';
import { Profile } from '../../model/types/ProfileSchema';
import {
    ProfileCardDeprecated,
    ProfileCardDeprecatedError,
    ProfileCardDeprecatedLoading,
} from '../ProfileCardDeprecated/ProfileCardDeprecated';
import {
    ProfileCardRedesigned,
    ProfileCardRedesignedError,
    ProfileCardRedesignedLoading,
} from '../ProfileCardRedesigned/ProfileCardRedesigned';

export interface ProfileCardProps extends TestsProps {
    data?: Profile;
    readonly?: boolean;
    isLoading?: boolean;
    error?: string;
    className?: string;
    onChangeFirst?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { error, isLoading } = props;

    if (isLoading) {
        return (
            <ToggleFeatureFlag
                feature="isAppRedesigned"
                on={<ProfileCardRedesignedLoading />}
                off={<ProfileCardDeprecatedLoading />}
            />
        );
    }

    if (error) {
        return (
            <ToggleFeatureFlag
                feature="isAppRedesigned"
                on={<ProfileCardRedesignedError />}
                off={<ProfileCardDeprecatedError />}
            />
        );
    }

    return (
        <ToggleFeatureFlag
            feature="isAppRedesigned"
            on={<ProfileCardRedesigned {...props} />}
            off={<ProfileCardDeprecated {...props} />}
        />
    );
};
