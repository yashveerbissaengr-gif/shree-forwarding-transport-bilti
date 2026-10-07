import React from 'react';
import type { BiltiData } from './types';

interface BiltiEditorProps {
  data: BiltiData;
  onChange: (field: keyof BiltiData, value: string) => void;
  onPrint: () => void;
  onDownload: () => void;
}

export const BiltiEditor: React.FC<BiltiEditorProps> = ({ data, onChange, onPrint, onDownload }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.name as keyof BiltiData, e.target.value);
  };

  return (
    <div className="w-full md:w-[400px] bg-white border-r border-gray-200 p-6 h-screen overflow-y-auto print:hidden shrink-0 shadow-lg z-10 relative">
      <div className="mb-8 flex justify-between items-center sticky top-0 bg-white py-2 border-b border-gray-100 z-10">
        <h2 className="text-xl font-bold text-gray-800">Bilti Details</h2>
        <div className="flex gap-2">
          <button
            onClick={onPrint}
            className="bg-[#b81118] hover:bg-red-800 text-white px-5 py-2 rounded-md shadow-sm font-semibold text-sm transition-colors"
          >
            Generate PDF
          </button>
          <button
            onClick={onDownload}
            className="bg-gray-800 hover:bg-black text-white px-5 py-2 rounded-md shadow-sm font-semibold text-sm transition-colors"
          >
            Download PDF
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Bilti No.</label>
            <input type="text" name="biltiNumber" value={data.biltiNumber} onChange={handleInputChange} className="w-full border border-gray-300 rounded p-2.5 text-sm focus:ring-2 focus:ring-[#b81118] focus:border-transparent outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Date</label>
            <input type="text" name="date" value={data.date} onChange={handleInputChange} className="w-full border border-gray-300 rounded p-2.5 text-sm focus:ring-2 focus:ring-[#b81118] focus:border-transparent outline-none" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Lorry No.</label>
          <input type="text" name="lorryNumber" value={data.lorryNumber} onChange={handleInputChange} className="w-full border border-gray-300 rounded p-2.5 text-sm focus:ring-2 focus:ring-[#b81118] focus:border-transparent outline-none" />
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-bold text-gray-800 mb-4">Party Information</h3>
          <div className="space-y-4">
            <input type="text" name="consignor" placeholder="Consignor's Name" value={data.consignor} onChange={handleInputChange} className="w-full border border-gray-300 rounded p-2.5 text-sm focus:ring-2 focus:ring-[#b81118] outline-none" />
            <input type="text" name="consignee" placeholder="Consignee's Name" value={data.consignee} onChange={handleInputChange} className="w-full border border-gray-300 rounded p-2.5 text-sm focus:ring-2 focus:ring-[#b81118] outline-none" />
            <input type="text" name="through" placeholder="Through" value={data.through} onChange={handleInputChange} className="w-full border border-gray-300 rounded p-2.5 text-sm focus:ring-2 focus:ring-[#b81118] outline-none" />
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="from" placeholder="From" value={data.from} onChange={handleInputChange} className="w-full border border-gray-300 rounded p-2.5 text-sm focus:ring-2 focus:ring-[#b81118] outline-none" />
              <input type="text" name="to" placeholder="To" value={data.to} onChange={handleInputChange} className="w-full border border-gray-300 rounded p-2.5 text-sm focus:ring-2 focus:ring-[#b81118] outline-none" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-bold text-gray-800 mb-1">Goods &amp; Freight</h3>
          <p className="text-xs text-gray-400 mb-4">Total Freight is calculated automatically: <strong>Weight × Rate</strong></p>
          <div className="space-y-4">
            <input type="text" name="numberOfPacks" placeholder="No. of Packs" value={data.numberOfPacks} onChange={handleInputChange} className="w-full border border-gray-300 rounded p-2.5 text-sm focus:ring-2 focus:ring-[#b81118] outline-none" />
            <textarea name="description" placeholder="Description" value={data.description} onChange={handleInputChange} className="w-full border border-gray-300 rounded p-2.5 text-sm h-24 resize-none focus:ring-2 focus:ring-[#b81118] outline-none"></textarea>

            {/* Weight × Rate → auto computes Total Freight */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Weight (kg / qty)</label>
                <input
                  type="number"
                  name="weight"
                  placeholder="e.g. 150"
                  value={data.weight}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-2.5 text-sm focus:ring-2 focus:ring-[#b81118] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Rate (₹ per unit)</label>
                <input
                  type="number"
                  name="rate"
                  placeholder="e.g. 12"
                  value={data.rate}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-2.5 text-sm focus:ring-2 focus:ring-[#b81118] outline-none"
                />
              </div>
            </div>

            {/* Total Freight */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                Total Freight
                <span className="ml-2 text-[10px] bg-green-100 text-green-700 font-semibold px-1.5 py-0.5 rounded tracking-normal normal-case">Auto = Weight × Rate</span>
              </label>
              <input
                type="text"
                name="totalFreight"
                placeholder="e.g. 1800"
                value={data.totalFreight}
                onChange={handleInputChange}
                className="w-full border-2 border-green-300 bg-green-50 rounded p-2.5 text-sm font-bold text-green-800 focus:ring-2 focus:ring-green-500 outline-none min-h-[40px]"
              />
            </div>

            {/* Remark — free text */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Remark</label>
              <input
                type="text"
                name="remark"
                placeholder="e.g. To Pay / Paid / TBB"
                value={data.remark}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded p-2.5 text-sm focus:ring-2 focus:ring-[#b81118] outline-none"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-bold text-gray-800 mb-1">Charges</h3>
          <p className="text-xs text-gray-400 mb-4">Balance is auto-calculated: <strong>Total Freight + Hamali − Advance</strong></p>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Hamali (₹)</label>
                <input
                  type="number"
                  name="hamali"
                  placeholder="e.g. 500"
                  value={data.hamali}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-2.5 text-sm focus:ring-2 focus:ring-[#b81118] outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Advance (₹)</label>
                <input
                  type="number"
                  name="advance"
                  placeholder="e.g. 2000"
                  value={data.advance}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded p-2.5 text-sm focus:ring-2 focus:ring-[#b81118] outline-none"
                />
              </div>
            </div>

            {/* Balance */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                Balance
                <span className="ml-2 text-[10px] bg-blue-100 text-blue-700 font-semibold px-1.5 py-0.5 rounded tracking-normal normal-case">Auto = Total Freight + Hamali − Advance</span>
              </label>
              <input
                type="text"
                name="balance"
                placeholder="e.g. 1500"
                value={data.balance}
                onChange={handleInputChange}
                className="w-full border-2 border-blue-300 bg-blue-50 rounded p-2.5 text-sm font-bold text-blue-800 focus:ring-2 focus:ring-blue-500 outline-none min-h-[40px]"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 pb-12">
          <h3 className="font-bold text-gray-800 mb-4">Truck & Driver Details</h3>
          <div className="space-y-4">
             <div className="grid grid-cols-2 gap-4">
              <input type="text" name="truckOwner" placeholder="Truck Owner Name" value={data.truckOwner} onChange={handleInputChange} className="w-full border border-gray-300 rounded p-2.5 text-sm focus:ring-2 focus:ring-[#b81118] outline-none" />
              <input type="text" name="truckOwnerMobile" placeholder="Owner Mob. No." value={data.truckOwnerMobile} onChange={handleInputChange} className="w-full border border-gray-300 rounded p-2.5 text-sm focus:ring-2 focus:ring-[#b81118] outline-none" />
             </div>
             <div className="grid grid-cols-2 gap-4">
              <input type="text" name="truckDriver" placeholder="Truck Driver Name" value={data.truckDriver} onChange={handleInputChange} className="w-full border border-gray-300 rounded p-2.5 text-sm focus:ring-2 focus:ring-[#b81118] outline-none" />
              <input type="text" name="truckDriverMobile" placeholder="Driver Mob. No." value={data.truckDriverMobile} onChange={handleInputChange} className="w-full border border-gray-300 rounded p-2.5 text-sm focus:ring-2 focus:ring-[#b81118] outline-none" />
             </div>
             <input type="text" name="driverLicence" placeholder="Driver Licence No." value={data.driverLicence} onChange={handleInputChange} className="w-full border border-gray-300 rounded p-2.5 text-sm focus:ring-2 focus:ring-[#b81118] outline-none" />
          </div>
        </div>
      </div>
    </div>
  );
};
