"use client";

import { useState } from "react";

import Header from "./Header";
import UploadZone from "./UploadZone";

import { parseCSV } from "@/lib/parseCSV";

import CSVPreview from "./CSVPreview";

export default function UploadCard() {

  const [headers, setHeaders] = useState<string[]>([]);
  const [rows, setRows] = useState<Record<string, string>[]>([]);

  async function handleFile(file: File) {

    const parsed = await parseCSV(file);

    setHeaders(parsed.headers);

    setRows(parsed.data);
  }

  return (
    <div className="rounded-2xl border bg-white p-8 shadow">

      <Header />

      <div className="mt-8">

        <UploadZone onFileSelect={handleFile} />

      </div>

      {rows.length > 0 && (
        <CSVPreview
          headers={headers}
          rows={rows}
        />
      )}

    </div>
  );
}