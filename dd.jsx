import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelToJson = () => {
  const [jsonData, setJsonData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        // Debugging: Log workbook object
        console.log("Workbook:", workbook);

        // Assuming you want to read the first sheet
        const sheetName = workbook.SheetNames[0];
        console.log("Sheet Name:", sheetName);
        const worksheet = workbook.Sheets[sheetName];
        console.log("Worksheet:", worksheet);
        const json = XLSX.utils.sheet_to_json(worksheet);
        console.log("JSON Data:", json);

        setJsonData(json);
      };

      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".xls,.xlsx" onChange={handleFileUpload} />
      {jsonData && (
        <div>
          <h3>JSON Data</h3>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ExcelToJson;
