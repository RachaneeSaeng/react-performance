let renderTimes = 0;

export const Book = ({ title, author, releaseDate }) => {
  ++renderTimes;
  console.log(`Render times of Book component = ${renderTimes}`);

  return (
    <>
      <p>
        <i>{`Render times of Book component = ${renderTimes}`}</i>
      </p>
      <div>Title: {title}</div>
      <div>Author: {author}</div>
      <div>Release date: {releaseDate.toString()}</div>
      <hr />
    </>
  );
};
