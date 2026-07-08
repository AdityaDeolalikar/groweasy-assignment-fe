// "use client";

// import { UploadCloud } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useRef } from "react";

// interface Props {
//   onFileSelect: (file: File) => void;
// }

// export default function UploadZone({ onFileSelect }: Props) {
//   function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
//     console.log("File Changed");
//     const file = e.target.files?.[0];
//     console.log(file);
//     if (!file) return;

//     if (!file.name.endsWith(".csv")) {
//       alert("Please upload a CSV file.");
//       return;
//     }

//     onFileSelect(file);
//   }
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const openFilePicker = () => {
//     fileInputRef.current?.click();
//   };
//   return (
//     <div className="rounded-xl border-2 border-dashed p-10 text-center">
//       <UploadCloud size={50} className="mx-auto mb-4 text-gray-400" />

//       <h2 className="text-xl font-semibold">Drag & Drop CSV</h2>

//       <p className="mt-2 text-gray-500">or choose a file</p>

//       <input
//         ref={fileInputRef}
//         type="file"
//         accept=".csv"
//         className="hidden"
//         id="csv-input"
//         onChange={handleFileChange}
//       />

//       <label htmlFor="csv-input">
//         <Button className="mt-5" onClick={openFilePicker}>
//           Choose CSV
//         </Button>
//       </label>
//     </div>
//   );
// }

"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";

interface UploadZoneProps {
  onFileSelect: (file: File) => void;
}

export default function UploadZone({
  onFileSelect,
}: UploadZoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onFileSelect(acceptedFiles[0]);
      }
    },
    [onFileSelect]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
  } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "text/csv": [".csv"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`
        cursor-pointer
        rounded-xl
        border-2
        border-dashed
        p-12
        transition-all
        duration-300
        text-center

        ${
          isDragActive
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300"
        }

        ${
          isDragReject
            ? "border-red-500 bg-red-50"
            : ""
        }

        hover:border-blue-400
      `}
    >
      <input {...getInputProps()} />

      <UploadCloud
        className="mx-auto mb-5 text-gray-400"
        size={60}
      />

      {isDragActive ? (
        <>
          <h2 className="text-2xl font-semibold text-blue-600">
            Drop your CSV here
          </h2>

          <p className="mt-2 text-gray-500">
            Release to upload
          </p>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-semibold">
            Drag & Drop CSV
          </h2>

          <p className="mt-2 text-gray-500">
            or click to browse
          </p>

          <p className="mt-4 text-sm text-gray-400">
            Supports CSV files only
          </p>
        </>
      )}
    </div>
  );
}