import { ICover } from './cover.interface';
import { ITag } from './tag.interface';
import { IUser } from './user.interface';

export interface IPhoto {
    cover_photo: ICover,
    curated: boolean,
    description: string,
    featured: boolean,
    id: number,
    links: Object,
    preview_photos: Object,
    private: boolean,
    published_at: Date,
    shared_key: string,
    tags: ITag[],
    title: string,
    total_photos: number,
    updated_at: Date,
    user: IUser
}