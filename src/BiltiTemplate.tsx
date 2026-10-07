import React from 'react';
import type { BiltiData } from './types';

interface BiltiTemplateProps {
  data: BiltiData;
}

export const BiltiTemplate: React.FC<BiltiTemplateProps> = ({ data }) => {
  return (
    <div className="w-[1050px] h-[720px] bg-white border-[2px] border-[#b81118] p-[25px_30px_20px_30px] font-sans text-[#b81118] relative flex flex-col mx-auto print:m-0 print:border-[2px] print:shadow-none shadow-xl box-border">
      
      {/* Header Section */}
      <div className="relative h-[25px] mb-[12px] w-full">
        <div className="absolute top-[3px] left-0 text-[13px] font-normal">Subject to Nagpur Jurisdiction</div>
        <div className="absolute top-[1px] left-[210px] text-[16.5px] font-bold">PAN: BGPPB5172A</div>
        <div className="absolute top-[1px] left-1/2 -translate-x-1/2 text-[18px] font-bold">
          ॥ श्री गणेशाय नमः ॥
        </div>
        <div className="absolute top-[1px] right-0 text-[16.5px] font-bold">Driver Copy</div>
      </div>

      {/* Title Block */}
      <div className="text-center mt-0 mb-[15px]">
        <h1 className="text-[33px] font-[900] tracking-[0.5px] m-[0_0_10px_0] scale-y-[1.05] inline-block whitespace-nowrap">
          SHREE FORWARDING TRANSPORT AGENCY
        </h1>
        <div className="text-[23px] font-bold m-[0_0_6px_0]">Commission Agent</div>
        <div className="text-[14.5px] font-bold m-0">H.O.: Near Pal Petrol Pump, Naka No.5, Pardi, NAGPUR-8.</div>
      </div>

      {/* Right Information Box */}
      <div className="absolute top-[55px] right-[30px] flex flex-col items-center bg-white">
        <div className="bg-[#b81118] text-white border-[2px] border-[#b81118] rounded-[8px] p-[4px_16px_6px_16px] text-[23px] font-normal font-[Tiro_Devanagari_Hindi,serif] mb-[5px] flex items-center justify-center gap-[8px]">
          <span>मंगू</span>
          <span>भैया</span>
        </div>
        <div className="text-[14px] font-bold text-center">
          M.: 9970359331
        </div>
      </div>

      {/* Form Top Details */}
      <div className="flex justify-between items-end mb-[12px]">
        <div className="w-[25%] text-[16px] font-bold flex items-end">
          <span className="whitespace-nowrap">No. :</span>
          <div className="flex-grow ml-[10px] relative">
            <span className="absolute bottom-[2px] left-[10px] text-black text-[18px] font-bold">{data.biltiNumber}</span>
            <div className="border-b border-[#b81118] w-full h-[20px]"></div>
          </div>
        </div>
        <div className="w-[44%] border-[1.5px] border-dashed border-[#b81118] p-[8px_15px] flex items-end -translate-x-[15px]">
          <span className="text-[18px] font-bold whitespace-nowrap">Lorry No.</span>
          <div className="flex-grow ml-[10px] relative">
             <span className="absolute bottom-[2px] left-[10px] text-black text-[18px] font-bold">{data.lorryNumber}</span>
             <div className="border-b border-[#b81118] w-full h-[20px]"></div>
          </div>
        </div>
        <div className="w-[22%] text-[16px] font-bold flex items-end">
          <span className="whitespace-nowrap">Date :</span>
          <div className="flex-grow ml-[10px] relative">
             <span className="absolute bottom-[2px] left-[10px] text-black text-[16px] font-bold">{data.date}</span>
             <div className="border-b border-[#b81118] w-full h-[20px]"></div>
          </div>
        </div>
      </div>

      <div className="text-center text-[13.5px] font-bold mb-[12px]">
        Receiver goods as per details below for carriage subject to conditions Overleaf
      </div>

      {/* Consignor / Consignee Information */}
      <div className="flex flex-col gap-[12px] text-[14px] font-bold mb-[15px]">
        <div className="flex gap-[20px]">
          <div className="flex flex-1 items-end">
            <span className="whitespace-nowrap mr-[8px]">Consignor's</span>
            <div className="flex-grow border-b border-[#b81118] relative h-[20px]">
               <span className="absolute bottom-[2px] left-[10px] text-black font-semibold">{data.consignor}</span>
            </div>
          </div>
          <div className="flex flex-1 items-end">
            <span className="whitespace-nowrap mr-[8px]">Consignee's</span>
            <div className="flex-grow border-b border-[#b81118] relative h-[20px]">
               <span className="absolute bottom-[2px] left-[10px] text-black font-semibold">{data.consignee}</span>
            </div>
          </div>
        </div>
        <div className="flex w-full items-end">
          <span className="whitespace-nowrap mr-[8px]">Through</span>
          <div className="flex-grow border-b border-[#b81118] relative h-[20px]">
               <span className="absolute bottom-[2px] left-[10px] text-black font-semibold">{data.through}</span>
          </div>
        </div>
        <div className="flex gap-[20px]">
          <div className="flex flex-1 items-end">
            <span className="whitespace-nowrap mr-[8px]">From</span>
            <div className="flex-grow border-b border-[#b81118] relative h-[20px]">
               <span className="absolute bottom-[2px] left-[10px] text-black font-semibold">{data.from}</span>
            </div>
          </div>
          <div className="flex flex-1 items-end">
            <span className="whitespace-nowrap mr-[8px]">To</span>
            <div className="flex-grow border-b border-[#b81118] relative h-[20px]">
               <span className="absolute bottom-[2px] left-[10px] text-black font-semibold">{data.to}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Goods Table */}
      <div className="flex-grow flex flex-col mb-0">
        <table className="w-full h-full border-collapse border border-[#b81118] table-fixed">
          <colgroup>
            <col style={{ width: '8%' }} />
            <col style={{ width: '44%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '10%' }} />
            <col style={{ width: '16%' }} />
            <col style={{ width: '12%' }} />
          </colgroup>
          <thead>
            <tr>
              <th className="border border-[#b81118] text-[13px] p-[6px_4px] text-center font-bold leading-[1.2] h-[1%]">No. of<br/>Pack</th>
              <th className="border border-[#b81118] text-[13px] p-[6px_4px] text-center font-bold leading-[1.2] h-[1%]">DESCRIPTION</th>
              <th className="border border-[#b81118] text-[13px] p-[6px_4px] text-center font-bold leading-[1.2] h-[1%]">Weight</th>
              <th className="border border-[#b81118] text-[13px] p-[6px_4px] text-center font-bold leading-[1.2] h-[1%]">Rate</th>
              <th className="border border-[#b81118] text-[13px] p-[6px_4px] text-center font-bold leading-[1.2] h-[1%]">Total Freight</th>
              <th className="border border-[#b81118] text-[13px] p-[6px_4px] text-center font-bold leading-[1.2] h-[1%]">Remark</th>
            </tr>
          </thead>
          <tbody>
            {/* Main Expanding Empty Row */}
            <tr className="h-full">
              <td className="border border-[#b81118] text-center text-black font-semibold align-top p-2">{data.numberOfPacks}</td>
              <td className="border border-[#b81118] text-left text-black font-semibold align-top p-2 whitespace-pre-wrap">{data.description}</td>
              <td className="border border-[#b81118] text-center text-black font-semibold align-top p-2">{data.weight}</td>
              <td className="border border-[#b81118] text-center text-black font-semibold align-top p-2">{data.rate}</td>
              <td className="border border-[#b81118] text-center text-black font-semibold align-top p-2">{data.totalFreight}</td>
              <td className="border border-[#b81118] text-center text-black font-semibold align-top p-2">{data.remark}</td>
            </tr>
            
            {/* Note Row */}
            <tr className="h-[1%]">
              <td colSpan={2} className="border border-[#b81118] p-[10px_15px] align-top">
                <div className="text-[14px] font-bold mb-[6px] font-[Tiro_Devanagari_Hindi,serif]">नोट - माल की पहुँच १० दिन में आ जाने पर पेमेंट मिलेगी</div>
                <div className="text-[12px] font-bold">Any complaint will be not accepted After 15 (Fifteen) DAYS</div>
              </td>
              <td className="border border-[#b81118]"></td>
              <td className="border border-[#b81118]"></td>
              <td className="border border-[#b81118]"></td>
              <td className="border border-[#b81118]"></td>
            </tr>

            {/* Truck Details & Hamali Sections */}
            <tr className="h-[1%]">
              {/* Left side nested form (Borders completely hidden) */}
              <td colSpan={2} rowSpan={3} className="p-[15px_15px_5px_2px] align-top border-l-0 border-b-0 border-[#b81118]">
                <div className="flex items-end mb-[18px]">
                  <div className="text-[14px] font-bold whitespace-nowrap mr-[10px]">Name of Truck Owner</div>
                  <div className="flex-grow border-b border-[#b81118] relative h-[20px]">
                    <span className="absolute bottom-[2px] left-[10px] text-black font-semibold">{data.truckOwner}</span>
                  </div>
                  <div className="text-[14px] font-bold whitespace-nowrap mr-[10px] ml-[15px]">Mob. No.</div>
                  <div className="flex-grow border-b border-[#b81118] relative h-[20px]">
                    <span className="absolute bottom-[2px] left-[10px] text-black font-semibold">{data.truckOwnerMobile}</span>
                  </div>
                </div>
                <div className="flex items-end mb-[18px]">
                  <div className="text-[14px] font-bold whitespace-nowrap mr-[10px]">Name of Truck Driver</div>
                  <div className="flex-grow border-b border-[#b81118] relative h-[20px]">
                    <span className="absolute bottom-[2px] left-[10px] text-black font-semibold">{data.truckDriver}</span>
                  </div>
                  <div className="text-[14px] font-bold whitespace-nowrap mr-[10px] ml-[15px]">Mob. No.</div>
                  <div className="flex-grow border-b border-[#b81118] relative h-[20px]">
                    <span className="absolute bottom-[2px] left-[10px] text-black font-semibold">{data.truckDriverMobile}</span>
                  </div>
                </div>
                <div className="flex items-end mb-[5px]">
                  <div className="text-[14px] font-bold whitespace-nowrap mr-[10px]">Driver Licence No</div>
                  <div className="w-[50%] flex-none border-b border-[#b81118] relative h-[20px]">
                    <span className="absolute bottom-[2px] left-[10px] text-black font-semibold">{data.driverLicence}</span>
                  </div>
                </div>
              </td>
              
              <td colSpan={2} className="border border-[#b81118] text-[14px] font-bold pl-[12px] align-middle">Hamali</td>
              <td className="border border-[#b81118] text-center text-black font-bold p-1">{data.hamali}</td>
              <td className="border border-[#b81118]"></td>
            </tr>
            <tr className="h-[1%]">
              <td colSpan={2} className="border border-[#b81118] text-[14px] font-bold pl-[12px] align-middle">Advance</td>
              <td className="border border-[#b81118] text-center text-black font-bold p-1">{data.advance}</td>
              <td className="border border-[#b81118]"></td>
            </tr>
            <tr className="h-[1%]">
              <td colSpan={2} className="border border-[#b81118] text-[14px] font-bold pl-[12px] align-middle">Balance</td>
              <td className="border border-[#b81118] text-center text-black font-bold p-1">{data.balance}</td>
              <td className="border border-[#b81118]"></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom Signature Space */}
      <div className="flex justify-end mt-[5px] pr-[15px] h-[80px] items-end">
        <div className="flex flex-col items-center">
          <svg className="w-[85px] h-[50px] -mb-[2px]" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
            <path d="M 25,50 L 45,10 L 55,45 M 35,35 L 60,30 M 52,15 C 75,10 75,25 58,28 C 80,28 80,48 50,50 Z M 20,60 L 90,45" stroke="#1a2c7a" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="text-[14.5px] font-normal">For Shree Forwarding Transport Agency</div>
        </div>
      </div>
    </div>
  );
};
