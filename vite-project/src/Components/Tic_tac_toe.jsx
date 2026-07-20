import React from "react";
import assets from "../assets/assets.js";

function Tic_tac_toe() {
  return (
    <div className="  bg-cyan-950 min-h-screen ">
      <div className="mt-10">
        <h1 className="text-4xl flex justify-center items-center text-white font-bold mb-10  ">
          Tic Tac Toe
        </h1>

        <div className=" justify-center items-center">
          <div className=" mt-50 flex justify-center gap-4">
            <div className="border-2 p-8 rounded-2xl border-black "> </div>
            <div className="border-2 p-8 rounded-2xl border-black "></div>
            <div className="border-2 p-8 rounded-2xl border-black "></div>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <div className="border-2 p-8 rounded-2xl border-black "> </div>
            <div className="border-2 p-8 rounded-2xl border-black "></div>
            <div className="border-2 p-8 rounded-2xl border-black "></div>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <div className="border-2 p-8 rounded-2xl border-black "> </div>
            <div className="border-2 p-8 rounded-2xl border-black "></div>
            <div className="border-2 p-8 rounded-2xl border-black "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tic_tac_toe;
