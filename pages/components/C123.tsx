import { Button } from "flowbite-react";
function C123() {
  return (
        <section key="1" className="bg-[#f0f9ff] py-16">
<div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">聯絡我們</h2>
        <div className="flex justify-center gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
            
            <h3 className="text-xl font-semibold mb-2">聯繫我們</h3>
            <p>我們團隊會用最快的速度回覆你的問題。</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
            
            <h3 className="text-xl font-semibold mb-2">與我們在線聊天</h3>
            <p>與客服線上進行對話</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
            
            <h3 className="text-xl font-semibold mb-2">論壇</h3>
            <p>在論壇與大家討論問題。</p>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">想要查看工單狀態?</h3>
          <Button className="bg-blue-600 text-white">立刻前往查看</Button>
        </div>
      </div>
    </section>
  )
}

export default C123;
