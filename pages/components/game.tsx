import Link from 'next/link';
import styles from './Button.module.css';
import a from './a.module.css';
import Image from 'next/image';
function game() {
  return ( 
<section className="bg-white dark:bg-gray-900 antialiased">
<Image
          className="w-full"
          src="/home2.png"
          alt="dashboard image"
        />
  <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
        賽程
      </h2>
      <div className="mt-4">
        <a
          href="#"
          title=""
          className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
         最近的比賽
          <svg
            aria-hidden="true"
            className="w-5 h-5 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
    <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
      <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
          <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
            2024 6/1
          </p>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            <a href="#" className="hover:underline">
              勇士vs公鹿
            </a>
          </h3>
        </div>
        
        <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
          <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
            2024 6/2
          </p>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            <a href="#" className="hover:underline">
              火箭vs76人
            </a>
          </h3>
        </div>
      </div>
    </div>
  </div>
</section>

 )
}

export default game;
