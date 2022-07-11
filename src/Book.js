export const Book = ({ title, author, releaseDate }) => {
  console.log("================== render <Book> ==================");
  return (
    <>
      <div>Title: {title}</div>
      <div>Author: {author}</div>
      <div>Release date: {releaseDate.toString()}</div>
      <hr />
    </>
  );
};
