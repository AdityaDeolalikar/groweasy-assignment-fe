import { Button } from "./ui/button";

interface Props {
  headers: string[];
  rows: Record<string, string>[];
}

export default function CSVPreview({
  headers,
  rows,
}: Props) {

  return (

    <div className="mt-10 overflow-auto rounded-lg border">

      <table className="min-w-full">

        <thead className="sticky top-0 bg-gray-100">

          <tr>

            {headers.map((header) => (

              <th
                key={header}
                className="border px-4 py-2 text-left"
              >
                {header}
              </th>

            ))}

          </tr>

        </thead>

        <tbody>

          {rows.slice(0, 10).map((row, index) => (

            <tr key={index}>

              {headers.map((header) => (

                <td
                  key={header}
                  className="border px-4 py-2"
                >
                  {row[header]}
                </td>

              ))}

            </tr>

          ))}

        </tbody>

      </table>

      

    </div>

  );
}