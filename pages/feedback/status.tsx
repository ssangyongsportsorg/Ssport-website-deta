import Head from 'next/head';

const status = () => (
  <>
    <Head>
      <style>{`
        body, html {
          margin: 0;
          padding: 0;
          overflow: hidden;
          height: 100%;
        }
        #iframe-container {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          z-index: 999999;
        }
        `}</style>
    </Head>
    <div id="iframe-container">
      <iframe src="https://feedback.ssangyongsports.eu.org/s/clufnf4ri0000ahstpq70gczz" frameBorder="0" />
    </div>
  </>
);

export default status;