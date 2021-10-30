import * as React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <div className="h-screen bg-gray-200">
      <h1 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pt-8">
        第56回沼津高専高専祭
      </h1>
      <ul className="text-center mt-8 grid grid-cols-1 gap-16 md:gap-6">
        <li className="mt-8">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/6 sm:w-9/12">
            <Link to="/stage">ステージプログラムを見る</Link>
          </button>
        </li>

        <li className="mt-8">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/6 sm:w-9/12">
            <Link to="/map">会場マップを見る</Link>
          </button>
        </li>

        <li className="mt-8">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/6 sm:w-9/12">
            <Link to="/exhibition">展示一覧を見る</Link>
          </button>
        </li>
        <li className="mt-8">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/6 sm:w-9/12">
            <Link to="/b1">B1グランプリ</Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default IndexPage;
