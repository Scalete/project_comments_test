export interface IUser {
    _id?: string;
    image: {
      png: string;
      webp: string;
    };
    username: string;
}
  
export interface IComment {
    _id?: string;
    content: string;
    date_comment: string;
    score: number;
    user: IUser;
    replies: IReply[];
}

export interface IReply {
    _id?: string;
    content: string;
    date_comment: string;
    score: number;
    replyingTo?: string;
    user: IUser;
}

export interface ICommentAndReplyProps {
  comment?: IComment;
  reply?: IReply;
}