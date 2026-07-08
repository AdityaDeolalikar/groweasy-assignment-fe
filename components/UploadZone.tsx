"use client";

import { UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  onFileSelect: (file: File) => void;
}

export default function UploadZone({
  onFileSelect,
}: Props) {

  function handleFileChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.name.endsWith(".csv")) {
      alert("Please upload a CSV file.");
      return;
    }

    onFileSelect(file);
  }

  return (
    <div className="rounded-xl border-2 border-dashed p-10 text-center">

      <UploadCloud
        size={50}
        className="mx-auto mb-4 text-gray-400"
      />

      <h2 className="text-xl font-semibold">
        Drag & Drop CSV
      </h2>

      <p className="mt-2 text-gray-500">
        or choose a file
      </p>

      <input
        type="file"
        accept=".csv"
        className="hidden"
        id="csv-input"
        onChange={handleFileChange}
      />

      <label htmlFor="csv-input">
        <Button
          className="mt-5"
          asChild
        >
          <span>Choose CSV</span>
        </Button>
      </label>

    </div>
  );
}