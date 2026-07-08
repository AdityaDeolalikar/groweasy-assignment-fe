"use client";

import { UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

interface Props {
  onFileSelect: (file: File) => void;
}

export default function UploadZone({ onFileSelect }: Props) {
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("File Changed");
    const file = e.target.files?.[0];
    console.log(file);
    if (!file) return;

    if (!file.name.endsWith(".csv")) {
      alert("Please upload a CSV file.");
      return;
    }

    onFileSelect(file);
  }
  const fileInputRef = useRef<HTMLInputElement>(null);

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };
  return (
    <div className="rounded-xl border-2 border-dashed p-10 text-center">
      <UploadCloud size={50} className="mx-auto mb-4 text-gray-400" />

      <h2 className="text-xl font-semibold">Drag & Drop CSV</h2>

      <p className="mt-2 text-gray-500">or choose a file</p>

      <input
        ref={fileInputRef}
        type="file"
        accept=".csv"
        className="hidden"
        id="csv-input"
        onChange={handleFileChange}
      />

      <label htmlFor="csv-input">
        <Button className="mt-5" onClick={openFilePicker}>
          Choose CSV
        </Button>
      </label>
    </div>
  );
}
