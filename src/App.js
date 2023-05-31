import { useMemo, useState, useCallback, useEffect } from "react";
import { Book } from "./Book";
import { BookWithMemo } from "./BookWithMemo";

import "./App.css";
import BookStoreContainer from "./BookStoreContainer";

let renderTimes = 0;

function App() {
  ++renderTimes;
  console.log(`Render times of App component = ${renderTimes}`);

  // let title = "Cat";
  const [title, setTitle] = useState("Cat");
  const [toggle, setToggle] = useState();

  // ############### Function, Array, Object (Date, ..) parameter treated as different object and always cause memo component to rerender ###############
  // const otherInfo = {
  //   author: "John Doe",
  //   reprintDate: new Date("April 15, 2000")
  // };
  // const chapters = ["Prologue", "Chapter 1", , "Chapter 2"];
  // const releaseDate = new Date("December 15, 1995");
  // const popupTheTitle = title => alert(title);

  // ############### useMemo can solve the issue ###############
  // ############### Note, not supplying dependencies array = depend on all => no point to useMemo ###############
  const otherInfo = useMemo(
    () => ({
      author: "John Doe",
      reprintDate: new Date("April 15, 2000")
    }),
    [toggle]
  );

  const aFunction = () => {
    console.log("perform expensive operations");
    alert(title);
  };

  const chapters = useMemo(() => ["Prologue", "Chapter 1", , "Chapter 2"], []);
  const releaseDate = useMemo(() => new Date("December 15, 1995"), []);
  //const popupTheTitle = useMemo(() => aFunction, []);

  // ############### useMemo(() => fn, dependencies) = useCallback(fn, dependencies) ###############
  // in which case that we want a reset a new function definition? -> when the function that use global values
  const popupTheTitle = useCallback(aFunction, [title]);

  const functionA = useCallback(() => {
    const x = 10;
  }, []);

  useEffect(() => {
    console.log("[A] execute this because functionA ref changed");
  }, [functionA]);

  useEffect(() => {
    console.log("[B] execute this because functionA ref changed");
  }, [functionA]);

  return (
    <>
      <p>
        <i>{`Render times of App component = ${renderTimes}`}</i>
      </p>

      <h3>{title}</h3>

      {/* <button type="button" onClick={() => (title = "Dog")}>
        Change local var title
      </button> */}

      <button type="button" onClick={() => setTitle("Dog")}>
        Change Title state
      </button>

      <button type="button" onClick={() => setToggle(toggle => !toggle)}>
        Change Toggle state
      </button>

      <hr />

      {/* ############### Component will always be rerendered when parent component rerender ############### */}
      {/* <Book title={title} author="John Doe" releaseDate="December 15, 1995" /> */}

      {/* ############### Next time rerendering of parent will not rerender BookWithMemo if the passing props not change ############### */}
      {/* <BookWithMemo
        title={title}
        author="John Doe"
        releaseDate="December 15, 1995"
      /> */}

      {/* ############### Passing  Function, Array, Object (ie. Date etc.) props cause component to rerender always ############### */}
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
      <BookWithMemo
        title="Heat"
        author="John Doe"
        releaseDate="December 15, 1995"
        onClick={popupTheTitle}
      />
      {/* <BookStoreContainer /> */}
    </>
  );
}

export default App;
