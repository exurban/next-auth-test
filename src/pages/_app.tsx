import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";
import CarouselLayout from "../components/CarouselLayout";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const apolloClient = useApollo(pageProps);
  const router = useRouter();
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider attribute="class">
          {router.pathname.startsWith(`/carousel/`) ? (
            <CarouselLayout>
              <Component {...pageProps} />
            </CarouselLayout>
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
};

export default App;
