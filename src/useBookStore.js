import React, { useCallback, useState, useMemo, useEffect } from "react";

const useBookStore = () => {
  console.log("&&&&&&&&&&&&&&&& render useBookStore &&&&&&&&&&&&&&&&");

  const [addToCartDate, setAddToCartDate] = useState();
  const [internalState, setInternalState] = useState();

  // ############### internal state update cause client to rerender even them do not access the state
  useEffect(() => {
    const id = setInterval(() => {
      setInternalState(!internalState);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  // const addToCart = title => {
  //   console.log(`Thanks for adding ${title} to your cart`);
  //   setAddToCartDate(new Date());
  // };

  const addToCart = useCallback(title => {
    console.log(`Thanks for adding ${title} to your cart`);
    setAddToCartDate(new Date());
  }, []);

  // ############### Without useMemo on return object or useCallback on the object property
  // every internal state change will cause client rerender  ###############
  // return {
  //   addToCartDate,
  //   addToCart
  // };

  // ############### With useMemo or useCallback, client will still be render twice before caching somehow ###############
  return useMemo(
    () => ({
      addToCartDate,
      addToCart
    }),
    []
    // ############### If we want client get internal state value, we must return it
    // Then it will cause client rerender, no matter if you put addToCartDate in deps array or not
    // However, the addToCartDate will not change if we don't put it in deps array
    // If we end up having no different between with vs without useMemo, we had better to go without it
    // However, we can put useMemo and useCallback on complex internal objects to avoid rerendering in that level instead ###############
  );
};
export default useBookStore;
// ############### React.memo is a higher order component. it doesn't not work for hook ###############
// export const memoizedUseHookStore = React.memo(useBookStore);
// ############### useCallback hook must be called in a React function component or a custom React Hook function ###############
// export const memoizedUseHookStore = useCallback(useBookStore, []);
