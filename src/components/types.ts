import { IconType } from "react-icons";

export interface Article {
    title: string;
    description: string;
    url: string;
    source: {
        name: string;
    };
    urlToImage: string;
}

export interface NewsData {
    articles: Article[];
    article: Article[];
}

export interface User {
    name: {
        first: string,
        last: string,
    };
    login: {
        uuid: string,
        username: string,
    };
    picture: {
        thumbnail: string,
    }
}

export interface UserData {
    results: User[];
}

export type PostType = {
    name: string | null;
    username: string | null;
    userImg?: string;
    imgUrl: string | null;
    content: string | null;
    createdAt: string;
    authorId: string;
    id: string;
    likeCount: number;
    commentCount: number;
    hasLiked?: boolean;
};

export type PostProps = {
    post: PostType;
};

export type CommentType = {
    name: string | null;
    username: string | null;
    userImg?: string;
    id: string;
    postId: string;
    userId: string;
    createdAt: string;
    content: string | null;
    imgUrl: string | null;
};

export type CommentProps = {
    comment: CommentType;
};
export type SidebarMenuItemProps = {
    text: string;
    Icon: IconType;
    active?: boolean;
}
