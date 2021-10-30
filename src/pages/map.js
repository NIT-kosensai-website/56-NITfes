import * as React from "react";
import { Link } from "gatsby";
const mapPage = () => {
  return (
    <div className="h-screen bg-gray-200">
      <div className="flex justify-center py-8">
        <p className="text-lg">少女画像準備中...</p>
      </div>
      <div className="flex justify-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/6 my-8">
          <Link to="/">トップへ戻る</Link>
        </button>
      </div>
    </div>
  );
};
export default mapPage;
