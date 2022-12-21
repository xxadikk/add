import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { ACTIONS, JSON_API_PRODUCTS } from "../../helpers/consts";

export const productsContext = createContext();
export const useProducts = () => useContext(productsContext);

const INIT_STATE = {
  products: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const [moreProducts, setMoreProducts] = useState([]);

  async function addProducts(newProduct) {
    try {
      await axios.post(JSON_API_PRODUCTS, newProduct);
    } catch (error) {
      console.log(error);
    }
    getProducts();
    getCard();
  }
  async function getProducts() {
    const { data } = await axios(JSON_API_PRODUCTS);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
    getCard();
  }

  async function getCard() {
    const res = await axios(JSON_API_PRODUCTS);
    setMoreProducts(res.data);
    getProducts();
  }
  useEffect(() => {
    getCard();
    getProducts();
  }, []);

  const values = {
    addProducts,
    state,
    moreProducts,
  };

  return (
    <productsContext.Provider value={values}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
