import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr"

function Reviews() {
  return (
    <div className="flex flex-row items-center justify-center gap-2 p-6 mb-4">
        <GrFormPrevious className="cursor-pointer" />
        <span className="h-full hover:bg-slate-300 cursor-pointer px-3 py-1 rounded-sm bg-blue-800 text-white">1</span>
        <span className="h-full hover:bg-slate-300 cursor-pointer px-3 py-1 rounded-sm">2</span>
        <span className="h-full hover:bg-slate-300 cursor-pointer px-3 py-1 rounded-sm">3</span>
        <span className="h-full hover:bg-slate-300 cursor-pointer px-3 py-1 rounded-sm">4</span>
        <span className="h-full hover:bg-slate-300 cursor-pointer px-3 py-1 rounded-sm">5</span>
        <span className="h-full hover:bg-slate-300 cursor-pointer px-3 py-1 rounded-sm">...</span>
        <span className="h-full hover:bg-slate-300 cursor-pointer px-3 py-1 rounded-sm">10</span>
        <GrFormNext className="cursor-pointer" />
    </div>
  );
}

export default Reviews;
