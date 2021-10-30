import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
const mapPage = () => {
  return (
    <div className="h-full bg-gray-200">
      <div className="flex justify-center">
        <StaticImage
          src="../images/map.png"
          alt="map-image"
          placeholder="blurred"
        />
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
