import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import "../styles/globals.css";
import SEO from "../../next-seo.config";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const apolloClient = useApollo(pageProps);
  return (
    <>
      <DefaultSeo {...SEO} />
      <ApolloProvider client={apolloClient}>
        <ThemeProvider attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
};

export default App;
