import { Head, Html, Main, NextScript } from 'next/document';

import { AppConfig } from '@/utils/app-config';

export default function Document() {
  return (
    <Html lang={AppConfig.locale}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
