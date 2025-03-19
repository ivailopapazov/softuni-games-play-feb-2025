
export default function CommentsCreate({
    onCreate,
}) {
    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" action={onCreate}>
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>
    );
}
