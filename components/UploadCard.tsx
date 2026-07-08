"use client";

import { useState } from "react";

import Header from "./Header";
import UploadZone from "./UploadZone";
import CSVPreview from "./CSVPreview";
import ResultTable from "./ResultTable";
import ImportStats from "./ImportStats";

import { Button } from "@/components/ui/button";

import { parseCSV } from "@/lib/parseCSV";
import { uploadCSV } from "@/services/import.service";

import { ImportResponse } from "@/types/crm";

export default function UploadCard() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [headers, setHeaders] = useState<string[]>([]);
  const [rows, setRows] = useState<Record<string, string>[]>([]);

  const [result, setResult] = useState<ImportResponse | null>(null);

  const [loading, setLoading] = useState(false);

  async function handleFile(file: File) {
    setSelectedFile(file);

    const parsed = await parseCSV(file);

    setHeaders(parsed.headers);
    setRows(parsed.data);

    // Remove previous AI result when a new file is selected
    setResult(null);
  }

  async function handleConfirmImport() {
    if (!selectedFile) {
      alert("Please select a CSV file.");
      return;
    }

    try {
      setLoading(true);

      const response = await uploadCSV(selectedFile);

      setResult(response);
    } catch (error) {
      console.error(error);
      alert("Failed to import CSV.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border bg-white p-8 shadow-lg">

      <Header />

      <div className="mt-8">
        <UploadZone onFileSelect={handleFile} />
      </div>

      {rows.length > 0 && (
        <>
          <CSVPreview
            headers={headers}
            rows={rows}
          />

          <Button
            className="mt-6 w-full"
            onClick={handleConfirmImport}
            disabled={loading}
          >
            {loading ? "Importing..." : "Confirm Import"}
          </Button>
        </>
      )}

      {result && (
        <>
          <ImportStats
            imported={result.imported}
            skipped={result.skipped}
          />

          <ResultTable
            records={result.crmRecords}
          />
        </>
      )}

    </div>
  );
}