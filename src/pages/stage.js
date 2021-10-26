import * as React from "react";
import { graphql } from "gatsby";

const StagePage = ({ data }) => {
  return (
    <main>
      <h1>ステージプログラム</h1>
      <p>一日目</p>
    </main>
  );
};

export const query = graphql`
  query {
    allStageJson {
      edges {
        node {
          dayone {
            content
            time
          }
          daytwo {
            content
            time
          }
        }
      }
    }
  }
`
export default StagePage;
