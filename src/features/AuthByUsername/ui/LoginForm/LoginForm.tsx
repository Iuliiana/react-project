import { memo } from 'react';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import { loginReducer } from '../../model/slice/loginSlice';
import { LoginFormDeprecated } from '../LoginFormDeprecated/LoginFormDeprecated';
import { LoginFormRedesigned } from '../LoginFormRedesigned/LoginFormRedesigned';

export interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

const asyncReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => (
    <DynamicModuleLoader asyncReducers={asyncReducers} removeAfterUnmount>
        <ToggleFeatureFlag
            feature="isAppRedesigned"
            on={<LoginFormRedesigned {...props} />}
            off={<LoginFormDeprecated {...props} />}
        />
    </DynamicModuleLoader>
));
export default LoginForm;
