import React from "react";
import JCicon from "../../assets/images/JC-icon.png"
import SMicon from "../../assets/images/SM-icon.png"
import CUicon from "../../assets/images/CU-icon.png"
import UKicon from "../../assets/images/UK-icon.png"
import OAicon from "../../assets/images/OA-icon.png"

function ReviewTable() {
  return (
    <table className="mt-8 w-full border-2 border-gray-100">
        <thead color="">
            <tr className="text-left border-b">
                <th colSpan={4} className="px-5 text-xl py-3">Review Participants (200)</th>
            </tr>
            <tr className="text-gray-400 text-left border-b text-sm">
                <th className="py-3 font-medium px-5">Full Name</th>
                <th className="py-3 font-medium px-5">Department</th>
                <th className="py-3 font-medium px-5">Status</th>
                <th className="py-3 font-medium px-5">Score</th>
            </tr>
        </thead>
        <tbody>
            <tr className="text-left border-b text-sm hover:bg-slate-100 cursor-pointer" >
                <td className="py-3 font-semibold px-5 flex flex-row gap-3">
                    <img src={JCicon} alt="" />
                    <div className="flex flex-col">
                        <span>John Chukwunonso</span>
                        <span className="text-sm text-gray-400">j.chukwunonso@genesystechhub.com</span>
                    </div>
                </td>
                <td className="py-3 font-semibold px-5">Dev Studio</td>
                <td className="py-3 font-semibold px-5">
                    <span className="bg-blue-200 px-1 rounded-sm">Completed</span>
                </td>
                <td className="py-3 font-semibold px-5">3.62</td>
            </tr>
            <tr className="text-left border-b text-sm hover:bg-slate-100 cursor-pointer" >
                <td className="py-3 font-semibold px-5 flex flex-row gap-3">
                    <img src={SMicon} alt="" />
                    <div className="flex flex-col">
                        <span>Sophia Muo</span>
                        <span className="text-sm text-gray-400">s.muo@genesystechhub.com</span>
                    </div>
                </td>
                <td className="py-3 font-semibold px-5">Dev Studio</td>
                <td className="py-3 font-semibold px-5">
                    <span className="bg-blue-200 px-1 rounded-sm">Completed</span>
                </td>
                <td className="py-3 font-semibold px-5">4.10</td>
            </tr>
            <tr className="text-left border-b text-sm hover:bg-slate-100 cursor-pointer" >
                <td className="py-3 font-semibold px-5 flex flex-row gap-3">
                    <img src={CUicon} alt="" />
                    <div className="flex flex-col">
                        <span>Chukwudi Umunakwe</span>
                        <span className="text-sm text-gray-400">c.umunakwe@genesystechhub.com</span>
                    </div>
                </td>
                <td className="py-3 font-semibold px-5">Dev Studio</td>
                <td className="py-3 font-semibold px-5">
                    <span className="bg-blue-200 px-1 rounded-sm">Completed</span>
                </td>
                <td className="py-3 font-semibold px-5">3.70</td>
            </tr>
            <tr className="text-left border-b text-sm hover:bg-slate-100 cursor-pointer" >
                <td className="py-3 font-semibold px-5 flex flex-row gap-3">
                    <img src={UKicon} alt="" />
                    <div className="flex flex-col">
                        <span>Udochi Kaduru</span>
                        <span className="text-sm text-gray-400">u.kaduru@genesystechhub.com</span>
                    </div>
                </td>
                <td className="py-3 font-semibold px-5">Dev Studio</td>
                <td className="py-3 font-semibold px-5">
                    <span className="bg-blue-200 px-1 rounded-sm">Completed</span>
                </td>
                <td className="py-3 font-semibold px-5">5.00</td>
            </tr>
            <tr className="text-left border-b text-sm hover:bg-slate-100 cursor-pointer" >
                <td className="py-3 font-semibold px-5 flex flex-row gap-3">
                    <img src={OAicon} alt="" />
                    <div className="flex flex-col">
                        <span>Onyedikachi Agonsi</span>
                        <span className="text-sm text-gray-400">o.agonsi@genesystechhub.com</span>
                    </div>
                </td>
                <td className="py-3 font-semibold px-5">Dev Studio</td>
                <td className="py-3 font-semibold px-5">
                    <span className="bg-blue-200 px-1 rounded-sm">Completed</span>
                </td>
                <td className="py-3 font-semibold px-5">4.23</td>
            </tr>
            <tr className="text-left border-b text-sm hover:bg-slate-100 cursor-pointer" >
                <td className="py-3 font-semibold px-5 flex flex-row gap-3">
                    <img src={UKicon} alt="" />
                    <div className="flex flex-col">
                        <span>Udochi Kaduru</span>
                        <span className="text-sm text-gray-400">u.kaduru@genesystechhub.com</span>
                    </div>
                </td>
                <td className="py-3 font-semibold px-5">Dev Studio</td>
                <td className="py-3 font-semibold px-5">
                    <span className="bg-blue-200 px-1 rounded-sm">Completed</span>
                </td>
                <td className="py-3 font-semibold px-5">3.56</td>
            </tr>
            <tr className="text-left border-b text-sm hover:bg-slate-100 cursor-pointer" >
                <td className="py-3 font-semibold px-5 flex flex-row gap-3">
                    <img src={UKicon} alt="" />
                    <div className="flex flex-col">
                        <span>Udochi Kaduru</span>
                        <span className="text-sm text-gray-400">u.kaduru@genesystechhub.com</span>
                    </div>
                </td>
                <td className="py-3 font-semibold px-5">Dev Studio</td>
                <td className="py-3 font-semibold px-5">
                    <span className="bg-blue-200 px-1 rounded-sm">Completed</span>
                </td>
                <td className="py-3 font-semibold px-5">3.56</td>
            </tr>
            <tr className="text-left border-b text-sm hover:bg-slate-100 cursor-pointer" >
                <td className="py-3 font-semibold px-5 flex flex-row gap-3">
                    <img src={UKicon} alt="" />
                    <div className="flex flex-col">
                        <span>Udochi Kaduru</span>
                        <span className="text-sm text-gray-400">u.kaduru@genesystechhub.com</span>
                    </div>
                </td>
                <td className="py-3 font-semibold px-5">Dev Studio</td>
                <td className="py-3 font-semibold px-5">
                    <span className="bg-blue-200 px-1 rounded-sm">Completed</span>
                </td>
                <td className="py-3 font-semibold px-5">3.56</td>
            </tr>
            <tr className="text-left border-b text-sm hover:bg-slate-100 cursor-pointer" >
                <td className="py-3 font-semibold px-5 flex flex-row gap-3">
                    <img src={UKicon} alt="" />
                    <div className="flex flex-col">
                        <span>Udochi Kaduru</span>
                        <span className="text-sm text-gray-400">u.kaduru@genesystechhub.com</span>
                    </div>
                </td>
                <td className="py-3 font-semibold px-5">Dev Studio</td>
                <td className="py-3 font-semibold px-5">
                    <span className="bg-blue-200 px-1 rounded-sm">Completed</span>
                </td>
                <td className="py-3 font-semibold px-5">3.56</td>
            </tr>
            <tr className="text-left border-b text-sm hover:bg-slate-100 cursor-pointer" >
                <td className="py-3 font-semibold px-5 flex flex-row gap-3">
                    <img src={UKicon} alt="" />
                    <div className="flex flex-col">
                        <span>Udochi Kaduru</span>
                        <span className="text-sm text-gray-400">u.kaduru@genesystechhub.com</span>
                    </div>
                </td>
                <td className="py-3 font-semibold px-5">Dev Studio</td>
                <td className="py-3 font-semibold px-5">
                    <span className="bg-blue-200 px-1 rounded-sm">Completed</span>
                </td>
                <td className="py-3 font-semibold px-5">3.56</td>
            </tr>
            <tr className="text-left border-b text-sm hover:bg-slate-100 cursor-pointer" >
                <td className="py-3 font-semibold px-5 flex flex-row gap-3">
                    <img src={UKicon} alt="" />
                    <div className="flex flex-col">
                        <span>Udochi Kaduru</span>
                        <span className="text-sm text-gray-400">u.kaduru@genesystechhub.com</span>
                    </div>
                </td>
                <td className="py-3 font-semibold px-5">Dev Studio</td>
                <td className="py-3 font-semibold px-5">
                    <span className="bg-blue-200 px-1 rounded-sm">Completed</span>
                </td>
                <td className="py-3 font-semibold px-5">3.56</td>
            </tr>
            <tr className="text-left border-b text-sm hover:bg-slate-100 cursor-pointer" >
                <td className="py-3 font-semibold px-5 flex flex-row gap-3">
                    <img src={UKicon} alt="" />
                    <div className="flex flex-col">
                        <span>Udochi Kaduru</span>
                        <span className="text-sm text-gray-400">u.kaduru@genesystechhub.com</span>
                    </div>
                </td>
                <td className="py-3 font-semibold px-5">Dev Studio</td>
                <td className="py-3 font-semibold px-5">
                    <span className="bg-blue-200 px-1 rounded-sm">Completed</span>
                </td>
                <td className="py-3 font-semibold px-5">3.56</td>
            </tr>
            <tr className="text-left border-b text-sm hover:bg-slate-100 cursor-pointer" >
                <td className="py-3 font-semibold px-5 flex flex-row gap-3">
                    <img src={UKicon} alt="" />
                    <div className="flex flex-col">
                        <span>Udochi Kaduru</span>
                        <span className="text-sm text-gray-400">u.kaduru@genesystechhub.com</span>
                    </div>
                </td>
                <td className="py-3 font-semibold px-5">Dev Studio</td>
                <td className="py-3 font-semibold px-5">
                    <span className="bg-blue-200 px-1 rounded-sm">Completed</span>
                </td>
                <td className="py-3 font-semibold px-5">3.56</td>
            </tr>
            <tr className="text-left border-b text-sm hover:bg-slate-100 cursor-pointer" >
                <td className="py-3 font-semibold px-5 flex flex-row gap-3">
                    <img src={UKicon} alt="" />
                    <div className="flex flex-col">
                        <span>Udochi Kaduru</span>
                        <span className="text-sm text-gray-400">u.kaduru@genesystechhub.com</span>
                    </div>
                </td>
                <td className="py-3 font-semibold px-5">Dev Studio</td>
                <td className="py-3 font-semibold px-5">
                    <span className="bg-blue-200 px-1 rounded-sm">Completed</span>
                </td>
                <td className="py-3 font-semibold px-5">3.56</td>
            </tr>
            <tr className="text-left border-b text-sm hover:bg-slate-100 cursor-pointer" >
                <td className="py-3 font-semibold px-5 flex flex-row gap-3">
                    <img src={UKicon} alt="" />
                    <div className="flex flex-col">
                        <span>Udochi Kaduru</span>
                        <span className="text-sm text-gray-400">u.kaduru@genesystechhub.com</span>
                    </div>
                </td>
                <td className="py-3 font-semibold px-5">Dev Studio</td>
                <td className="py-3 font-semibold px-5">
                    <span className="bg-blue-200 px-1 rounded-sm">Completed</span>
                </td>
                <td className="py-3 font-semibold px-5">3.56</td>
            </tr>
        </tbody>
    </table>
  );
}

export default ReviewTable;
