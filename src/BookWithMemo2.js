import { useMemo, useState, useCallback, useEffect } from "react";
import React from "react";
import useBookStore, { memoizedUseHookStore } from "./useBookStore";
import { useBookStoreInContext } from "./useBookStoreInContext";

export const BookWithMemo2 = React.memo(
  ({ title, author, releaseDate, chapters, onClick, otherInfo }) => {
    console.log("================== render <BookWithMemo2> ==================");

    const [toggle, setToggle] = useState();

    // ############### using hook inside context also get the same result,
    // just more parties can cause this component rerender ###############
    const { addToCart, addToCartDate } = useBookStoreInContext();

    useEffect(() => {
      console.log("addToCart in BookWithMemo2 changed");
    }, [addToCart]);

    useEffect(() => {
      console.log("addToCartDate in BookWithMemo2 changed");
    }, [addToCartDate]);

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
        <button type="button" onClick={() => addToCart(title)}>
          Add to cart
        </button>
        <hr />
      </div>
    );
  }
);
