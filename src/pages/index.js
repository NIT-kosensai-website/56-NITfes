import * as React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <h1 className="text-lg">10/30,10/31 第56回高専祭</h1>
      <ul>
        <li>
          <Link to="/stagePage">ステージプログラムを見る</Link>
        </li>
        <li>
          <Link to="/mapPage">開場マップを見る</Link>
        </li>
        <li>
          <Link to="/stagePage">ステージ企画</Link>
        </li>
        <li>
          <Link to="/exhibitionsPage">展示一覧を見る</Link>
        </li>
        <li>
          <Link to="/bOnePage">B1グランプリ</Link>
        </li>
      </ul>
    </main>
  );
};

export default IndexPage;
