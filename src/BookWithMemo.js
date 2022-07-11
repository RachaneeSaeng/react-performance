import { useMemo, useState, useCallback, useEffect } from "react";
import React from "react";
import useBookStore, { memoizedUseHookStore } from "./useBookStore";

export const BookWithMemo = React.memo(
  ({ title, author, releaseDate, chapters, onClick, otherInfo }) => {
    console.log("================== render <BookWithMemo> ==================");

    const [toggle, setToggle] = useState();


    return (
      <div>
        <button type="button" onClick={() => setToggle(new Date())}>
          Rerender this book
        </button>
        <div>Title: {title}</div>
        <div>author: {author}</div>
        <div>Release date: {releaseDate.toString()}</div>
        {chapters && chapters.length > 0 && (
          <ul>
            {chapters.map(chapter => (
              <li key={chapter}>Chapter: {chapter}</li>
            ))}
          </ul>
        )}
        <hr />
      </div>
    );
  }
);
