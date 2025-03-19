import styles from './CommentsShow.module.css';

export default function CommentsView({
    comments,
}) {
    return (
        <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
                {comments.length > 0
                    ? comments.map(({ _id, comment, pending, author }) => (
                        <li key={_id} className={`comment ${pending ? styles['comment-pending'] : ''}`.trim()}>
                            <p>{author.email}: {comment}</p>
                        </li>
                    ))
                    : <p className="no-comment">No comments.</p>
                }
            </ul>
        </div>
    );
}
