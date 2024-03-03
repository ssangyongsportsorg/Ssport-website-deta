import Link from 'next/link'
import { Alert } from 'flowbite-react';
import Head from 'next/head'
import Script from 'next/script';
const p = () => {
  return (

<main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
  <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <header className="mb-4 lg:mb-6 not-format">        
  <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">感謝你聯繫雙龍體育</h1>
        <Alert color="success" onDismiss={() => alert('Alert dismissed!')}>
      <span className="font-medium">消息通知</span> 
           <a id="footer-badge" href="https://status.ssangyongsports.eu.org">
        載入狀態中
      </a>

       <script
        dangerouslySetInnerHTML={{
          __html: `
            function updateFooterBadge(status) {
              const badge = document.getElementById('footer-badge');
              badge.textContent = status === 'UP' ? '依照狀態頁消息，我們團隊可正常收到你的聯繫' : '不好意思，我們團隊可能無法正常收到你的消息，因為狀態頁出現錯誤';
              badge.className = status.toLowerCase();
            }

            fetch('https://status.ssangyongsports.eu.org/summary.json')
              .then(response => response.json())
              .then(data => {
                const status = data.page.status;
                updateFooterBadge(status);
                badge.href = data.page.url;
              })
              .catch(error => {
                console.error('無法讀取系統狀態', error);
              });
          `,
        }}
      ></script>  
  </Alert>           
   <p>你被跳轉至此頁面代表我們以收到你的聯繫嘍！</p>
     <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">何時回覆？</h1>
   <p>我們團隊會在一個禮拜內回覆你
如果特殊假期（過年、端午節等國定假日）或假日可能會一個禮拜後回覆
請不要一直重發聯繫，這只會延長回覆時間喔！</p>
  <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">如何在此工單新增問題呢？</h1>
   <p>直接回覆電子郵件</p>

  <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">等了很久都沒回覆該如何？</h1>
   <p>請在此寄送郵件，有可能是你的郵件不小心被略過了或者是你違反了我們的回覆規定：<Link href="/docs/contact/nreply">詳細說明</Link>
<h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">詳細說明</h1>
   <p>可上我們的幫助中心聯繫類別查看</p><Link href="/docs/contact/">聯繫類別</Link>
感謝🙏你的等待以及聯繫
</p> 
  <Head>
        <title>感謝你的聯繫</title>
        <meta name="description" content="感謝你的聯繫" />
      </Head>
  
      </header>
    </article> 
  </div>
</main>

 );
}

export default p;
