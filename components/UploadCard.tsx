"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { uploadCSV } from "@/services/import.service";
import Header from "./Header";
import UploadZone from "./UploadZone";

import { parseCSV } from "@/lib/parseCSV";

import CSVPreview from "./CSVPreview";

export default function UploadCard() {
  const [headers, setHeaders] = useState<string[]>([]);
  const [rows, setRows] = useState<Record<string, string>[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  async function handleFile(file: File) {
    setSelectedFile(file);

    const parsed = await parseCSV(file);

    setHeaders(parsed.headers);

    setRows(parsed.data);
  }

  async function handleConfirmImport() {
    if (!selectedFile) {
      alert("Please choose a CSV.");

      return;
    }

    try {
      const result = await uploadCSV(selectedFile);

      console.log(result);
    } catch (error) {
      console.error(error);

      alert("Upload failed");
    }
  }

  return (
    <div className="rounded-2xl border bg-white p-8 shadow">
      <Header />

      <div className="mt-8">
        <UploadZone onFileSelect={handleFile} />
      </div>

      {rows.length > 0 && <CSVPreview headers={headers} rows={rows} />}
      <Button className="mt-6 w-full" onClick={handleConfirmImport}>
        Confirm Import
      </Button>
    </div>
  );
}
