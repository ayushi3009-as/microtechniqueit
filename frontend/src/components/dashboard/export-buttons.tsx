import { Download } from 'lucide-react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface Column {
  header: string;
  accessor: (row: any) => string;
}

interface ExportButtonsProps {
  data: any[];
  columns: Column[];
  filename: string;
}

export default function ExportButtons({ data, columns, filename }: ExportButtonsProps) {
  const exportExcel = () => {
    const exportData = data.map(row => {
      const obj: Record<string, string> = {};
      columns.forEach(col => {
        obj[col.header] = col.accessor(row);
      });
      return obj;
    });

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
    XLSX.writeFile(workbook, `${filename}.xlsx`);
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    
    const tableColumn = columns.map(col => col.header);
    const tableRows = data.map(row => {
      return columns.map(col => col.accessor(row));
    });

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
      theme: 'grid',
      styles: { fontSize: 8 },
      headStyles: { fillColor: [37, 99, 235] }
    });

    doc.text(`Export: ${filename}`, 14, 15);
    doc.save(`${filename}.pdf`);
  };

  if (!data || data.length === 0) return null;

  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={exportExcel}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-green-500/10 text-green-600 hover:bg-green-500/20 rounded-md transition-colors border border-green-500/20"
      >
        <Download className="w-3.5 h-3.5" />
        Excel
      </button>
      <button 
        onClick={exportPDF}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-red-500/10 text-red-600 hover:bg-red-500/20 rounded-md transition-colors border border-red-500/20"
      >
        <Download className="w-3.5 h-3.5" />
        PDF
      </button>
    </div>
  );
}
