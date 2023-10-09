import { User, UserRole } from '@/entities/User';
import { Theme } from '@/shared/const/theme';
/* eslint-disable max-len */
export const user: User = {
    id: '2',
    username: 'user',
    avatar: 'https://sun9-11.userapi.com/impg/x1BCzJ8lDEad3xAef-dL4MFgA168qasFDpOfFA/4xNFKwt6TDE.jpg?size=523x604&quality=96&sign=89c368a882b478fa487741c3feb4f888&type=album',
    jsonSettings: {
        theme: Theme.DARK,
        isFirstVisit: false,
        isVisitedArticlesPage: true,
    },
    roles: [UserRole.MANAGER],
};
