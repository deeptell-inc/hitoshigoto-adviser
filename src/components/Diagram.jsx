import React from 'react';
import { ArrowRight, ArrowLeft, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const DiagramA = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg max-w-4xl mx-auto text-[0.6rem] sm:text-xs md:text-sm lg:text-base">
      <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-6 border-2 border-green-500 rounded-lg px-3 py-1">ヒトシゴト</div>
      
      <div className="relative w-full mb-6">
        <div className="flex justify-between w-full px-4 sm:px-20 md:px-40">
          <ArrowUpRight className="text-green-500" size={16} />
          <ArrowDownRight className="text-black" size={16} />
        </div>
        
        <div className="flex justify-between w-full">
          <div className="flex flex-col items-center w-1/3">
            <div className="text-base sm:text-lg lg:text-xl font-semibold mb-2 border-2 border-green-500 rounded-lg px-2 py-1">アドバイザー</div>
            <div className="border-2 border-green-500 p-2 rounded">
              <p>クライアントのご紹介</p>
              <p>契約締結</p>
              <p>(当社とアドバイザーが契約)</p>
              <p>アドバイザー費用の請求・支払い</p>
              <p>クライアントの状況確認</p>
              <p>など</p>
            </div>
          </div>
          
          <div className="flex flex-col justify-center items-center w-1/3">
            <ArrowLeft className="text-blue-500" size={16} />
            <div className="border-2 border-blue-500 p-2 rounded mx-2 my-1">
              業務遂行・命令
              <br />
              など
            </div>
            <ArrowRight className="text-blue-500" size={16} />
          </div>
          
          <div className="flex flex-col items-center w-1/3">
            <div className="text-base sm:text-lg lg:text-xl font-semibold mb-2 border-2 border-green-500 rounded-lg px-2 py-1">企業様</div>
            <div className="border-2 border-green-500 p-2 rounded">
              <p>アドバイザーのご紹介</p>
              <p>契約締結（業務委託契約）</p>
              <p>アドバイザー費用の請求・支払い</p>
              <p>アドバイザーの状況確認</p>
              <p>など</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DiagramB = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg max-w-4xl mx-auto text-[0.6rem] sm:text-xs md:text-sm lg:text-base">
      <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-6 border-2 border-green-500 rounded-lg px-3 py-1">他社</div>
      
      <div className="relative w-full mb-6">
        <div className="flex justify-between w-full px-4 sm:px-20 md:px-40">
          <ArrowUpRight className="text-green-500" size={16} />
          <ArrowDownRight className="text-black" size={16} />
        </div>
        
        <div className="flex justify-between w-full">
          <div className="flex flex-col items-center w-1/3">
            <div className="text-base sm:text-lg lg:text-xl font-semibold mb-2 border-2 border-green-500 rounded-lg px-2 py-1">アドバイザー</div>
            <div className="border-2 border-green-500 p-2 rounded">
              <p>クライアントのご紹介</p>
              <p>マッチング</p>
              <p>など</p>
            </div>
          </div>
          
          <div className="flex flex-col justify-center items-center w-1/3">
            <ArrowLeft className="text-blue-500" size={16} />
            <div className="border-2 border-blue-500 p-2 rounded mx-2 my-1">
              <p>業務遂行・命令</p>
              <p>給与支払い</p>
              <p>など</p>
            </div>
            <ArrowRight className="text-blue-500" size={16} />
          </div>
          
          <div className="flex flex-col items-center w-1/3">
            <div className="text-base sm:text-lg lg:text-xl font-semibold mb-2 border-2 border-green-500 rounded-lg px-2 py-1">企業様</div>
            <div className="border-2 border-green-500 p-2 rounded">
              <p>アドバイザーのご紹介</p>
              <p>契約締結（人材紹介契約）</p>
              <p>マッチング</p>
              <p>手数料の請求・支払い</p>
              <p>など</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center px-4">
        契約後も3者間でのやり取りになりますので、長く関わりを持っていただけます。
      </div>
    </div>
  );
};

const Diagram = () => {
  return <div>
    <DiagramA />
    <DiagramB />
  </div>
}

export default Diagram;