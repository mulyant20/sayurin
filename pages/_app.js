import { ProductContextProvider } from "../context/ProductContextProvider";
import { UserAuthContextProvider } from "../context/UserAuthContextProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserAuthContextProvider>
      <ProductContextProvider>
        <Component {...pageProps} />
      </ProductContextProvider>
    </UserAuthContextProvider>
  );
}

export default MyApp;
