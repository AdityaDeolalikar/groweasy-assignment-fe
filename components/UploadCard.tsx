"use client";

import { useState } from "react";

import Header from "./Header";
import UploadZone from "./UploadZone";
import CSVPreview from "./CSVPreview";
import ResultTable from "./ResultTable";
import ImportStats from "./ImportStats";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoadingOverlay from "./LoadingOverlay";
import { parseCSV } from "@/lib/parseCSV";
import { uploadCSV } from "@/services/import.service";
import { toast } from "sonner";
import { ImportResponse } from "../types/crm";

export default function UploadCard() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [progressText, setProgressText] = useState("");
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
     toast.error("Please select a CSV file.");
      return;
    }

    try {
      setLoading(true);
      setProgressText("Analyzing records with AI...");
      const response = await uploadCSV(selectedFile);
      setProgressText("Preparing CRM data...");
      setProgressText("");
      setResult(response);
      toast.success("CSV imported successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to import CSV.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border bg-white p-8 shadow-lg">
      {loading && <LoadingOverlay text={progressText}/>}
      <Header />

      <div className="mt-8">
        <UploadZone onFileSelect={handleFile} />
      </div>

      {selectedFile && (
        <div className="mt-4 rounded-lg border bg-gray-50 p-4">
          <p className="font-medium">Selected File</p>

          <p className="text-sm text-gray-600">{selectedFile.name}</p>

          <p className="text-sm text-gray-500">
            {(selectedFile.size / 1024).toFixed(2)} KB
          </p>
        </div>
      )}

      {rows.length > 0 && (
        <>
          <CSVPreview headers={headers} rows={rows} />

          <Button
            className="mt-6 w-full"
            onClick={handleConfirmImport}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing CSV...
              </>
            ) : (
              "Confirm Import"
            )}
          </Button>
        </>
      )}

      {result && (
        <>
          <ImportStats imported={result.imported} skipped={result.skipped} />

          <ResultTable records={result.crmRecords} />
        </>
      )}
    </div>
  );
}
