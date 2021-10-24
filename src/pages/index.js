import * as React from "react"
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <main>
      <h1 className="text-lg">10/30,10/31 第56回高専祭</h1>
      <Link to="/stagePage">ステージプログラムを見る</Link>
      <Link to="/mapPage">開場マップを見る</Link>
      <Link to="/stagePage">ステージ企画</Link>
      <Link to="/exhibitionsPage">展示一覧を見る</Link>
      <Link to="/bOnePage">B1グランプリ</Link>
    </main>
  )
}

export default IndexPage
