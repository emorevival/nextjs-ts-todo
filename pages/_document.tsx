import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel='stylesheet'
            href='https://unpkg.com/@themesberg/flowbite@1.3.0/dist/flowbite.min.css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script src='https://unpkg.com/@themesberg/flowbite@1.3.0/dist/flowbite.bundle.js' />
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script src='https://unpkg.com/@themesberg/flowbite@1.3.0/dist/datepicker.bundle.js' />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
