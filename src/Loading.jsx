import React from "react";

function Loading() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="relative ml-80">
        <div className="w-40 h-40 border-rose-200 border-4 rounded-full" />
        <div className="w-40 h-40 border-rose-700 border-t-4 animate-spin rounded-full absolute left-0 top-0" />
      </div>
      <div className="relative ml-20">
        <div className="w-20 h-20 border-rose-200 border-4 rounded-full" />
        <div className="w-20 h-20 border-rose-700 border-t-4 animate-spin rounded-full absolute left-0 top-0" />
      </div>
      <div className="relative">
        <div className="w-10 h-10 border-rose-200 border-4 rounded-full" />
        <div className="w-10 h-10 border-rose-700 border-t-4 animate-spin rounded-full absolute left-0 top-0" />
      </div>
    </div>
  );
}

export default Loading;
