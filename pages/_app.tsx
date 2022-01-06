import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThemeProvider attribute='class'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
