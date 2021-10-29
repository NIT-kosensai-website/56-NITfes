import * as React from "react";

const bOnePage = () => {
  return (
    <div className="h-screen bg-gray-200">
      <h1 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pt-8">
        B1グランプリ
      </h1>
      <div className="flex justify-center mt-8">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-center">
          <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=XYP-cpVeEkWK4KezivJfyGWTsOtvEkRIrZ5H3M1nxPdUQVM3Vjg5OFhBNkNXQTlCMDhSWFBHR05HRS4u">
            投票はこちらから
          </a>
        </button>
      </div>
    </div>
  );
};
export default bOnePage;
