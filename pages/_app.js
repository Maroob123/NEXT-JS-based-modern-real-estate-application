import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from '@chakra-ui/react'
import "../styles/globals.css";

import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps, cookies }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  return (
    <>
      <Head></Head>
      <ChakraProvider
      colorModeManager={
        typeof cookies === 'string'
          ? cookieStorageManagerSSR(cookies)
          : localStorageManager
      }
    >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
MyApp.getInitialProps = ({ req }) => {
  return {
    // first time users will not have any cookies and you may not return
    // undefined here, hence ?? is necessary
    cookies:  req ? req.headers.cookie : '',
  }
}
