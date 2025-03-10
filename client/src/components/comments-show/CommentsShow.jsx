export default function CommentsShow() {
    return (
        <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
                {/* <!-- list all comments for current game (If any) --> */}
                <li className="comment">
                    <p>Content: I rate this one quite highly.</p>
                </li>
                <li className="comment">
                    <p>Content: The best game.</p>
                </li>
            </ul>
            {/* <!-- Display paragraph: If there are no games in the database --> */}
            <p className="no-comment">No comments.</p>
        </div>
    );
}
