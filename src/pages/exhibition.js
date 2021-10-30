import * as React from "react";
import { Link } from "gatsby";
const exhibitionPage = () => {
  return (
    <div className="h-screen bg-gray-200">
      <h1 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pt-8">
        展示
      </h1>
      <div className="flex justify-center rounded border-solid border-2 border-green-500 max-w-sm overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">留学生の部屋</div>
          <p className="text-gray-700 text-base">
            <p>
              沼津高専には、現在、アジアの４ヵ国から来た６名の外国人留学生がいます。
            </p>
            <p>
              ふだん校内や学生寮で姿を見かけることがあっても、留学生たちの母国での暮らしなどはあまり知られていないのではないでしょうか。
              「留学生の部屋」では留学生が自分たちの出身国の紹介をします。
              ぜひお越しください。
            </p>
          </p>
          <div className="px-6 pt-4 pb-2 bg-green-500 rounded-full">
            <p className="text-white text-base">場所：専攻科棟 102</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/6 my-8">
          <Link to="/">トップへ戻る</Link>
        </button>
      </div>
    </div>
  );
};
export default exhibitionPage;
