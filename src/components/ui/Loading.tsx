import React from "react";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        type="button"
        className="bg-indigo-400 h-max w-max rounded-lg text-white font-bold hover:bg-indigo-300 hover:cursor-not-allowed duration-[500ms,800ms]"
        disabled
      >
        <div className="flex items-center justify-center m-[10px]">
          <div className="h-8 w-8 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
          <div className="ml-5"> Procesando... </div>
        </div>
      </button>
    </div>
  );
};
