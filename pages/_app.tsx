import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ThemeProvider } from 'next-themes';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ LocalizationProvider> 
    </ThemeProvider>
  );
}

export default MyApp;
