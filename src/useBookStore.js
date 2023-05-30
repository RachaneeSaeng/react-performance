import React, { useCallback, useState, useMemo, useEffect } from "react";

const useBookStore = () => {
  console.log("&&&&&&&&&&&&&&&& render useBookStore &&&&&&&&&&&&&&&&");

  const [addedToCart, setAddedToCart] = useState();
  const [, setInternalState] = useState();

  // ############### internal state update cause client to rerender even they do not access the state
  useEffect(() => {
    const id = setInterval(() => {
      setInternalState(internalState => !internalState);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  // const addToCart = title => {
  //   console.log(`Thanks for adding ${title} to your cart`);
  //   setAddedToCart(title);
  // };

  const addToCart = useCallback(title => {
    console.log(`Thanks for adding ${title} to your cart`);
    setAddedToCart(title);
  }, []);

  // ############### Without useMemo on return object or useCallback on the object property
  // the value of Function, Array, Object (Date, ..) will change everytime of rerendering ###############
  // return {
  //   addToCartDate,
  //   addToCart
  // };

  // ############### With useMemo or useCallback, return values will changed only when the deps change ###############
  return useMemo(
    () => ({
      addedToCart,
      addToCart
    }),
    []
  );
};
export default useBookStore;
// ############### React.memo is a higher order component. it doesn't not work for hook ###############
// export const memoizedUseHookStore = React.memo(useBookStore);
// ############### useCallback hook must be called in a React function component or a custom React Hook function ###############
// export const memoizedUseHookStore = useCallback(useBookStore, []);
