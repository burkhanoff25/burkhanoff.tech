import {useQuery} from "@tanstack/react-query";
import {comments} from "@/lib/comments/comments";
import {CommentType} from "@/types/Comments/Comment.type";
import {Comment} from "@/components/Comments/Comment/Comment";
import classes from './ChildCommentList.module.css';
import CommentSkeleton from "@/components/Comments/CommentSkeleton/CommentSkeleton";
import {nanoid} from "nanoid";

export function ChildCommentList({
    uuid,
    childComments,
    level
}: {
    uuid: string,
    childComments: number,
    level: number,
}) {
    const {
        data,
        error,
        status,
    } = useQuery({
        queryKey: ["comments", uuid],
        queryFn: retrieveChildComments,
    });

    async function retrieveChildComments() {
        return await comments.getChildren({ uuid: uuid });
    }

    const commentGroup: CommentType[] | null = data?.data ?? [];

    const commentSkeletons = Array.from({ length: childComments }).map(() => {
        return (
            // Использую nanoid() вместо переданного uuid, т.к. после загрузки комментариев <Skeleton /> почему-то остаются
            <CommentSkeleton key={nanoid()} />
        );
    });

    const childCommentSection = status === 'pending' ? (
        commentSkeletons
    ) : status === 'error' ? (
        <>Error: {error.message}</>
    ) : (
        commentGroup.map((comment) => {
            return (
                <Comment key={comment.uuid} comment={comment} isChild level={level + 1} />
            );
        })
    );


    const isHeavilyNested = level % 7 === 0;

    return (
        <div className={`${classes.comments} ${isHeavilyNested && classes.heavilyNestedComments}`}>
            {childCommentSection}
        </div>
    );
}