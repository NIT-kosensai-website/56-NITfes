import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
const bOnePage = () => {
  return (
    <div className="h-full bg-gray-200">
      <h1 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pt-8">
        B1グランプリ
      </h1>
      <div className="flex justify-center">
        <StaticImage
          src="../images/b1_grand_prix.png"
          alt="map-image"
          height="10em"
          placeholder="blurred"
        />
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-center">
          <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=XYP-cpVeEkWK4KezivJfyGWTsOtvEkRIrZ5H3M1nxPdUQVM3Vjg5OFhBNkNXQTlCMDhSWFBHR05HRS4u">
            投票はこちらから
          </a>
        </button>
      </div>
      <div className="flex justify-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/6 my-8">
          <Link to="/">トップへ戻る</Link>
        </button>
      </div>
    </div>
  );
};
export default bOnePage;
