import React, {
  useMemo,
  useState,
  createContext,
  useContext,
  useCallback
} from "react";

export const BookStoreContext = createContext();

export const BookStoreProvider = props => {
  console.log("&&&&&&&&&&&&&&&& render useBookStoreInContext &&&&&&&&&&&&&&&&");

  const [addToCartDate, setAddToCartDate] = useState();

  // const addToCart = title => {
  //   console.log(`Thanks for adding ${title} to your cart`);
  //   setAddToCartDate(new Date());
  // };

  const addToCart = useCallback(title => {
    console.log(`Thanks for adding ${title} to your cart`);
    // setAddToCartDate(new Date());
  }, []);

  // const value = {
  //     addToCartDate,
  //     addToCart
  //   };

  const value = useMemo(
    () => ({
      addToCartDate,
      addToCart
    }),
    []
  );

  return <BookStoreContext.Provider {...props} value={value} />;
};
export const useBookStoreInContext = () => useContext(BookStoreContext);
