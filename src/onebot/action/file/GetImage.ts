import { GetFileBase } from './GetFile';
import { ActionName } from '@/onebot/action/router';


export default class GetImage extends GetFileBase {
    actionName = ActionName.GetImage;
}