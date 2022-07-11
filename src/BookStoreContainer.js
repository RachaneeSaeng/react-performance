/* eslint-disable react/prop-types */
import React from "react";
import { BookWithMemo } from "./BookWithMemo";
import { BookWithMemo2 } from "./BookWithMemo2";

import { BookStoreProvider } from "./useBookStoreInContext";

export default function BookStoreContainer() {
  return (
    <BookStoreProvider>
      <BookWithMemo
        title="Heat"
        author="John Doe"
        releaseDate="December 15, 1995"
      />
      <BookWithMemo2
        title="Heat"
        author="John Doe"
        releaseDate="December 15, 1995"
      />
    </BookStoreProvider>
  );
}
