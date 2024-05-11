const Comments = async ({ commentsPromise }) => {
    const comments = await commentsPromise
  return (
    <div>
      <ul className="text-slate-700">
        {comments.map((comment) => (
          <li className="mb-3" key={comment.id}>
            {comment.id}. {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Comments