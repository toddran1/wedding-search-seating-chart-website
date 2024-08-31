import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

interface Person {
    id: number;
    name: string;
    table: number;
}

const ExcelToJson: React.FC = () => {
    const [jsonData, setJsonData] = useState<Person[] | null>(null);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                const data = new Uint8Array(e.target?.result as ArrayBuffer);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = XLSX.utils.sheet_to_json<any[]>(worksheet, { header: 1 });

                // Process all rows and convert to JSON format
                const processedData = json.slice(1).map((row, index) => {
                    const tableValue = typeof row[1] === 'string' ? parseInt(row[1].replace(/\D/g, ''), 10) : row[1];

                    return {
                        id: index + 1,
                        name: row[0], // Assuming the first column is 'Name'
                        table: tableValue // Convert 'Table X' to just the number X
                    };
                });

                setJsonData(processedData);
            };
            reader.readAsArrayBuffer(file);
        }
    };

    const handleSaveJson = () => {
        if (jsonData) {
            const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });
            saveAs(blob, 'output.json');
        }
    };

    return (
        <div>
            <h2>Upload Excel File to Generate JSON</h2>
            <input type="file" onChange={handleFileUpload} />
            {jsonData && (
                <div>
                    <pre>{JSON.stringify(jsonData, null, 2)}</pre>
                    <button onClick={handleSaveJson}>Save JSON</button>
                </div>
            )}
        </div>
    );
};

export default ExcelToJson;
