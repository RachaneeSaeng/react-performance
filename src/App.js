import { useMemo, useState, useCallback } from "react";
import { Book } from "./Book";
import { BookWithMemo } from "./BookWithMemo";

import "./App.css";

function App() {
  const [toggle, setToggle] = useState();

  // ############### Function, Array, Object (Date, ..) parameter treated as different object
  // and always cause memo component to rerender ###############
  // const otherInfo = {
  //   author: "John Doe",
  //   reprintDate: new Date("April 15, 2000")
  // };
  // const chapters = ["Prologue", "Chapter 1", , "Chapter 2"];
  // const releaseDate = new Date("December 15, 1995");
  // const popupTheTitle = title => alert(title);

  // ############### useMemo can solve the issue ###############
  // ############### Note, supplying dependencies parameter = depend on all => no point to useMemo ###############
  // const chapters = useMemo(() => ["Prologue", "Chapter 1", , "Chapter 2"], []);
  // const releaseDate = useMemo(() => new Date("December 15, 1995"), []);
  // const popupTheTitle = useMemo(() => title => alert(title), []);

  // ############### useMemo(() => fn, dependencies) = useCallback(fn, dependencies) ###############
  // const popupTheTitle = useCallback(title => alert(title), []);

  return (
    <>
      {/* ############### Internal state change always cause the component (App) to rerender ############### */}
      <button type="button" onClick={() => setToggle(new Date())}>
        Trigger rerender
      </button>
      <hr />
      {/* ############### Component without memo will always be rerendered when client component rerender ############### */}
      {/* <Book title="Heat" author="John Doe" releaseDate="December 15, 1995" /> */}

      {/* ############### Next time rerendering will not render BookWithMemo anymore ############### */}
      <BookWithMemo
        title="Heat"
        author="John Doe"
        releaseDate="December 15, 1995"
      />

      {/* ############### However explicitly put component will always cause the component to render ############### */}
      {/* <BookWithMemo
        title="Heat"
        author="John Doe"
        releaseDate="December 15, 1995"
      /> */}

      {/* ############### Passing  Function, Array, Object (ie. Date etc.) props cause component to rerender ############### */}
      {/* <BookWithMemo
        title="Heat"
        author="John Doe"
        releaseDate="December 15, 1995"
        otherInfo={otherInfo}
      /> */}
      {/* <BookWithMemo title="Heat" author="John Doe" releaseDate={releaseDate} /> */}
      {/* <BookWithMemo
        title="Heat"
        author="John Doe"
        releaseDate="December 15, 1995"
        chapters={chapters}
      /> */}
      {/* <BookWithMemo
        title="Heat"
        author="John Doe"
        releaseDate="December 15, 1995"
        onClick={popupTheTitle}
      /> */}
    </>
  );
}

export default App;
