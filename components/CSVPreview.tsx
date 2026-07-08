import { Button } from "./ui/button";

interface Props {
  headers: string[];
  rows: Record<string, string>[];
}

export default function CSVPreview({ headers, rows }: Props) {
  return (
    <div
      className="
    mt-8
    max-h-[450px]
    overflow-auto
    rounded-xl
    border
    "
    >
      <table className="min-w-full">
        <thead className="sticky top-0 z-20 bg-white shadow-sm">
          <tr>
            {headers.map((header) => (
              <th key={header} className="border px-4 py-2 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.slice(0, 10).map((row, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              {headers.map((header) => (
                <td key={header} className="border px-4 py-2">
                  {row[header] || "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
