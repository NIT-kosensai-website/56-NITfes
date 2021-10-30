import * as React from "react";
import { Link } from "gatsby";
const exhibitionPage = () => {
  return (
    <div className="h-screen bg-gray-200">
      <h1 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pt-8">
        展示
      </h1>
      <div className="flex justify-center">
        <div className="rounded border-solid border-2 border-green-500 max-w-sm overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">留学生の部屋</div>
            <p className="text-base">
              <p>
                沼津高専には、現在、アジアの4ヵ国から来た6名の外国人留学生がいます。
              </p>
              <p>
                ふだん校内や学生寮で姿を見かけることがあっても、留学生たちの母国での暮らしなどはあまり知られていないのではないでしょうか。
                「留学生の部屋」では留学生が自分たちの出身国の紹介をします。
                ぜひお越しください。
              </p>
            </p>
            <div className="px-6 pt-4 pb-2">
              <p className="text-white text-base bg-green-500 rounded-full">
                場所：専攻科棟 102
              </p>
            </div>
          </div>
        </div>
        <div className="rounded border-solid border-2 border-green-500 max-w-sm overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">暇人同好会</div>
            <div className="font-bold text-xl mb-3 text-green-600">
              輪ゴム銃
            </div>
            <p className="text-base">
              <p>
                射撃携帯切り替え式複合ゴム銃 Shortbread Ⅵ
                製作キットの販売を行います。
              </p>
              <ul>
                <li>発射方法：瞬間開放式＆回転翼式</li>
                <li>劇初寄港：シングルアクション</li>
                <li>
                  射撃方法：SA単発精密射撃・SAセミオート・ラピッドファイア
                </li>
              </ul>
              <p>今年度で開発を始めてから5年になります。</p>
              <p>
                特許を取得した新たな機能も追加しますので、ぜひ作りに来てください。
              </p>
            </p>
            <div className="font-bold text-xl mb-3 text-green-600">
              ボードゲーム
            </div>
            <p className="text-base">
              <p>オリジナルボードゲームの対戦・販売を行っています・</p>
              <p>高専祭限定となっていますので、ぜひお越しください。</p>
            </p>
            <div className="px-6 pt-4 pb-2">
              <p className="text-white text-base bg-green-500 rounded-full">
                場所：講義棟地下 S2教室
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="rounded border-solid border-2 border-green-500 max-w-sm overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">茶道同好会</div>
            <p className="text-base">
              <p>
                毎週寮食堂の小部屋で活動しています、茶道同好会です。今年のお茶会ではコロナかということで昨年に引き続き、例年通りの生菓子ではなくお干菓子をお茶請けとしてお出しいたしまｓ。お茶碗ではなく紙コップでの提供となり残念でありますが、ぜひお抹茶を味わってみてください。一席(お茶1杯とお菓子1つ)200円となります。
              </p>
              <p>
                また、畳の上で風炉での薄茶点前の実演も行います。部員一同、練習を重ねてきました。ぜひ見に来てみてください。
              </p>
            </p>
            <div className="px-6 pt-4 pb-2">
              <p className="text-white text-base bg-green-500 rounded-full">
                場所：屋外出店
              </p>
            </div>
          </div>
        </div>
      <div className="flex justify-center py-8">
        <p className="text-lg">記事準備中...</p>
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
