import { DropdownDirection } from '@/shared/lib/types/ui';
import popupsCls from './Popups.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
    'top left': popupsCls.topLeft,
    'top right': popupsCls.topRight,
    'bottom right': popupsCls.bottomRight,
    'bottom left': popupsCls.bottomLeft,
    bottom: popupsCls.bottom,
};
