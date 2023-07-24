import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';

export const testProfile: Profile = {
    id: '1',
    first: 'Джейн',
    lastname: 'Доу',
    age: 28,
    currency: Currency.USD,
    country: Country.Canada,
    city: 'Moscow',
    username: 'admin',
    avatar: 'https://cs13.pikabu.ru/avatars/658/x658267-1013849002.png',
};
