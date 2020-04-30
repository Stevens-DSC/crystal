
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <title>Project Crystal</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Main />
        <NextScript />
      </html>
    );
  }
}