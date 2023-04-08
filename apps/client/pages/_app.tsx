import Head from 'next/head';
import { store } from '../redux/store/store';
import './styles.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>monday.com: Where Teams Get Work Done</title>
        <meta name="description" content="Monday.com mock login page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://monday.com/static/img/favicons/favicon.ico"
        />
      </Head>

      <main className="font-Figtree">
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
