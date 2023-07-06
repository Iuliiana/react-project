import { UserRole } from 'entities/User';
import { Notification } from '../types/notification';

export const notificationItemHref: Notification = {
    id: '2',
    title: 'Уведомление 2',
    description: 'Произошло какое-то событие',
    href: 'https://localhost:3000',
    user: {
        id: '1',
        username: 'admin',
        // password: '123',
        roles: [UserRole.ADMIN, UserRole.MANAGER],
        avatar: 'https://sun1-95.userapi.com/s/v1/ig2/xzx1BbeV9lr8KAWLbMiKM6fnfCD0H2p8R8xUUx25QcZHh4a8H4hjFSGrBKDd7O-_BkZmwM2-eokVbZWliFqknf47.jpg?size=400x400&quality=95&crop=95,79,426,426&ava=1',
    },
};

export const notificationItem: Notification = {
    id: '2',
    title: 'Уведомление 2',
    description: 'Произошло какое-то событие',
    user: {
        id: '1',
        username: 'admin',
        // password: '123',
        roles: [UserRole.ADMIN, UserRole.MANAGER],
        avatar: 'https://sun1-95.userapi.com/s/v1/ig2/xzx1BbeV9lr8KAWLbMiKM6fnfCD0H2p8R8xUUx25QcZHh4a8H4hjFSGrBKDd7O-_BkZmwM2-eokVbZWliFqknf47.jpg?size=400x400&quality=95&crop=95,79,426,426&ava=1',
    },
};
