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

  const [addedToCart, setAddedToCart] = useState();

  // const addToCart = title => {
  //   console.log(`Thanks for adding ${title} to your cart`);
  //   addedToCart(title);
  // };

  const addToCart = useCallback(title => {
    console.log(`Thanks for adding ${title} to your cart`);
    // addedToCart(title);
  }, []);

  // const value = {
  //     addToCartDate,
  //     addToCart
  //   };

  const value = useMemo(
    () => ({
      addedToCart,
      addToCart
    }),
    []
  );

  return <BookStoreContext.Provider {...props} value={value} />;
};
export const useBookStoreInContext = () => useContext(BookStoreContext);
