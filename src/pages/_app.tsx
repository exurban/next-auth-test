import { AppProps } from 'next/app';
import { Provider as AuthProvider } from 'next-auth/client';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const apolloClient = useApollo(pageProps);

  return (
    <>
      <AuthProvider session={pageProps.session}>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider attribute="class">
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </ApolloProvider>
      </AuthProvider>
    </>
  );
};

export default App;
