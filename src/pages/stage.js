import * as React from "react";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";

const StagePage = () => {
  const jsonmapping = useStaticQuery(graphql`
    query {
      allstagedayoneJson {
        edges {
          node {
            head
            content {
              Stime
              Etime
              content
            }
          }
        }
      }
    }
  `);
  const jsonmapdata = jsonmapping.allstageday1Json.edges;
  return (
    <div className="h-full bg-gray-200">
      <div className="max-w-screen-sm mx-auto">
        <h1 className="text-2xl text-center pt-8">ステージプログラム</h1>
        <h2 className="text-2xl text-center pt-8">1日目</h2>
        <table className="mx-auto">
          <thead>
            <tr>
              {jsonmapdata.head.map((e) => (
                <th>{e}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td class="border px-4 py-2">9:30~9:40</td>
              <td class="border px-4 py-2">オープニング</td>
            </tr>
            <tr className="bg-green-200">
              <td class="border px-4 py-2">9:40~10:00</td>
              <td class="border px-4 py-2">ダンス</td>
            </tr>
            <tr className="bg-white">
              <td class="border px-4 py-2">10:00~10:30</td>
              <td class="border px-4 py-2">大道芸</td>
            </tr>
            <tr className="bg-green-200">
              <td class="border px-4 py-2">10:30~11:30</td>
              <td class="border px-4 py-2">スマブラ</td>
            </tr>
            <tr className="bg-white">
              <td class="border px-4 py-2">11:30~11:50</td>
              <td class="border px-4 py-2">吹奏楽</td>
            </tr>
            <tr className="bg-green-200">
              <td class="border px-4 py-2">11:50~13:10</td>
              <td class="border px-4 py-2">昼休憩</td>
            </tr>
            <tr className="bg-white">
              <td class="border px-4 py-2">13:10~14:00</td>
              <td class="border px-4 py-2">バンド</td>
            </tr>
            <tr className="bg-green-200">
              <td class="border px-4 py-2">14:00~14:30</td>
              <td class="border px-4 py-2">マリオカート</td>
            </tr>
            <tr className="bg-white">
              <td class="border px-4 py-2">14:30~15:00</td>
              <td class="border px-4 py-2">長対決</td>
            </tr>
            <tr className="bg-green-200">
              <td class="border px-4 py-2">15:00~15:10</td>
              <td class="border px-4 py-2">エンディング</td>
            </tr>
          </tbody>
        </table>
        <h2 className="text-2xl text-center mt-8">2日目</h2>
        <table className="mx-auto">
          <thead>
            <tr>
              <th>時間</th>
              <th>企画内容</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white">
              <td class="border px-4 py-2">9:30~9:40</td>
              <td class="border px-4 py-2">オープニング</td>
            </tr>
            <tr className="bg-green-200">
              <td class="border px-4 py-2">9:40~9:55</td>
              <td class="border px-4 py-2">長ムービー</td>
            </tr>
            <tr class="bg-white">
              <td class="border px-4 py-2">9:55~10:15</td>
              <td class="border px-4 py-2">ダンス</td>
            </tr>
            <tr className="bg-green-200">
              <td class="border px-4 py-2">10:15~11:35</td>
              <td class="border px-4 py-2">スマブラ</td>
            </tr>
            <tr className="bg-white">
              <td class="border px-4 py-2">12:00~13:00</td>
              <td class="border px-4 py-2">昼休憩</td>
            </tr>
            <tr className="bg-green-200">
              <td class="border px-4 py-2">13:00~13:30</td>
              <td class="border px-4 py-2">のど自慢</td>
            </tr>
            <tr className="bg-white">
              <td class="border px-4 py-2">13:30~14:00</td>
              <td class="border px-4 py-2">IPPONグランプリ</td>
            </tr>
            <tr className="bg-green-200">
              <td class="border px-4 py-2">14:00~14:30</td>
              <td class="border px-4 py-2">長対決</td>
            </tr>
            <tr className="bg-white">
              <td class="border px-4 py-2">14:30~14:50</td>
              <td class="border px-4 py-2">吹奏楽</td>
            </tr>
            <tr className="bg-green-200">
              <td class="border px-4 py-2">14:50~15:00</td>
              <td class="border px-4 py-2">エンディング</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/6 my-8">
          <Link to="/">トップへ戻る</Link>
        </button>
      </div>
    </div>
  );
};

export default StagePage;
