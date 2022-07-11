import React, { useCallback, useState, useMemo, useEffect } from "react";

const useBookStore = () => {
  console.log("&&&&&&&&&&&&&&&& render useBookStore &&&&&&&&&&&&&&&&");

  const [addToCartDate, setAddToCartDate] = useState();

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
    [addToCartDate]
    // ############### If we want client get internal state value, then we have to put that state in dependencies array
    // Then it will cause client rerender, so if select dependencies list wisely
    // If we end up having no different between with vs without useMemo, we had better to go without it
    // However, we can put useMemo and useCallback on complex internal objects to avoid rerendering in that level instead ###############
  );
};
export default useBookStore;
// ############### React.memo is a higher order component. it doesn't not work for hook ###############
// export const memoizedUseHookStore = React.memo(useBookStore);
// ############### useCallback hook must be called in a React function component or a custom React Hook function ###############
// export const memoizedUseHookStore = useCallback(useBookStore, []);
