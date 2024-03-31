import Head from 'next/head';

const Status = () => (
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
        @media (max-width: 768px) {
          #iframe-container {
            position: relative;
            height: auto;
            min-height: 100vh;
          }
          #iframe-container iframe {
            width: 100%;
            height: 100%;
            min-height: 100vh;
          }
        }
        `}</style>
    </Head>
    <div id="iframe-container">
      <iframe src="https://feedback.ssangyongsports.eu.org/s/clufnf4ri0000ahstpq70gczz" frameBorder="0" />
    </div>
  </>
);

export default Status;