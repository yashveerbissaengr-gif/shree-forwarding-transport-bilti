import { useState, useEffect } from 'react';
import { type BiltiData, initialBiltiData } from './types';
import { BiltiTemplate } from './BiltiTemplate';
import { BiltiEditor } from './BiltiEditor';
import { jsPDF } from 'jspdf';
import { toJpeg } from 'html-to-image';

export default function App() {
  const [biltiData, setBiltiData] = useState<BiltiData>(() => {
    const savedNo = localStorage.getItem('lastBiltiNumber');
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
    return {
      ...initialBiltiData,
      biltiNumber: savedNo ? (parseInt(savedNo) + 1).toString() : '6033',
      date: formattedDate,
    };
  });

  const saveBiltiNumber = () => {
    if (biltiData.biltiNumber) {
      localStorage.setItem('lastBiltiNumber', biltiData.biltiNumber);
    }
  };

  const handleDataChange = (field: keyof BiltiData, value: string) => {
    setBiltiData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // ── AUTO-CALCULATION ENGINE ─────────────────────────────────────────────────
  // Formula 1: Total Freight = Weight × Rate  (freight rate × quantity/weight)
  // Formula 2: Balance = Total Freight + Hamali − Advance
  //   Balance is what the consignee still owes after paying the advance.
  // ────────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    const weight  = parseFloat(biltiData.weight)  || 0;
    const rate    = parseFloat(biltiData.rate)    || 0;
    const hamali  = parseFloat(biltiData.hamali)  || 0;
    const advance = parseFloat(biltiData.advance) || 0;

    // Total Freight = Weight (qty/kg) × Rate (₹ per unit)
    const totalFreight = weight * rate;

    // Balance = Total Freight + Hamali charges − Amount already advanced
    const balance = totalFreight + hamali - advance;

    // Format: show integer if whole number, else 2 decimal places; blank if zero
    const fmt = (n: number) =>
      n === 0 ? '' : Number.isInteger(n) ? String(n) : n.toFixed(2);

    setBiltiData((prev) => ({
      ...prev,
      totalFreight: fmt(totalFreight),
      balance:      fmt(balance),
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [biltiData.weight, biltiData.rate, biltiData.hamali, biltiData.advance]);

  const handlePrint = () => {
    saveBiltiNumber();
    window.print();
  };

  const handleDownload = async () => {
    saveBiltiNumber();
    const printArea = document.getElementById('print-area');
    if (!printArea) return;

    // Use html-to-image for flawless table/flexbox SVG serialization
    // Using JPEG with compression to significantly reduce PDF file size
    const imgData = await toJpeg(printArea, {
      pixelRatio: 2, // Reduced from 3 to 2 for better file size while keeping it sharp
      quality: 0.8, // 80% quality JPEG compression
      backgroundColor: '#ffffff'
    });

    // Create an A4 Landscape PDF
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });

    const pdfWidth = 297;
    const pdfHeight = 210;
    
    const imgProps = doc.getImageProperties(imgData);
    const ratio = imgProps.width / imgProps.height;
    
    let renderWidth = pdfWidth - 10;
    let renderHeight = renderWidth / ratio;
    
    if (renderHeight > pdfHeight - 10) {
      renderHeight = pdfHeight - 10;
      renderWidth = renderHeight * ratio;
    }

    const x = (pdfWidth - renderWidth) / 2;
    const y = (pdfHeight - renderHeight) / 2;

    doc.addImage(imgData, 'JPEG', x, y, renderWidth, renderHeight, undefined, 'FAST');
    doc.save(`Bilti_${biltiData.biltiNumber || 'New'}.pdf`);
  };

  return (
    <>
      {/* Global CSS to import Hindi Font and enforce strict A4 Landscape PDF Printing */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Hindi:ital@0;1&display=swap');

        @media print {
          @page {
            size: A4 landscape;
            margin: 0mm;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            background-color: white !important;
          }
          /* This ensures the exact 1050x720 template scales down perfectly into an A4 page without margins breaking */
          #print-area {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) scale(0.96); /* Slight scale to guarantee fit inside printer margins */
            transform-origin: center center;
          }
        }
      `}</style>

      <div className="flex w-full h-screen bg-gray-100 overflow-hidden font-sans">
        {/* Editor sidebar - Hidden during PDF generation */}
        <BiltiEditor data={biltiData} onChange={handleDataChange} onPrint={handlePrint} onDownload={handleDownload} />

        {/* Live Preview / PDF Target */}
        <div className="flex-1 overflow-auto flex items-center justify-center p-8 print:p-0 print:overflow-visible">
          <div id="print-area">
            <BiltiTemplate data={biltiData} />
          </div>
        </div>
      </div>
    </>
  );
}
