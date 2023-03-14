function App() {
  const title = "Blog Post";
  const body = "This is the body of the blog post";
  const comments = [
    { id: 1, text: "This is the First comment" },
    { id: 1, text: "This is the Second comment" },
    { id: 1, text: "This is the Third comment" },
  ];
  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{body}</p>
      <div className="comments">
        <h3>Comments:({comments.length})</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
