import { Button } from "flowbite-react";
function C123() {
  return (
        <section key="1" className="bg-[#f0f9ff] py-16">
<div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">聯絡我們</h2>
        <div className="flex justify-center gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
            <MessageCircleIcon className="text-4xl text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">聯繫我們</h3>
            <p>Start a conversation with our team and get the answers you need</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
            <PhoneIcon className="text-4xl text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call us</h3>
            <p>Give us a call at 1 (800) 111-2222 8:30am - 5:30pm PST Monday to Friday</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
            <TwitterIcon className="text-4xl text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Follow us</h3>
            <p>Stay up to date with the latest news and information</p>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Can't find what you're looking for?</h3>
          <Button className="bg-blue-600 text-white">Submit a request</Button>
        </div>
      </div>
    </section>
  )
}

function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

export default C123;
