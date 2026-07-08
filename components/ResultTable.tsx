import { CRMRecord } from "../types/crm";

interface Props {
  records: CRMRecord[];
}

export default function ResultTable({
  records,
}: Props) {
  return (
    <div className="mt-8 overflow-auto rounded-xl border">

      <table className="min-w-full">

        <thead className="sticky top-0 bg-gray-100">

          <tr>

            <th className="border px-4 py-3">Name</th>

            <th className="border px-4 py-3">Email</th>

            <th className="border px-4 py-3">Mobile</th>

            <th className="border px-4 py-3">Company</th>

            <th className="border px-4 py-3">Status</th>

          </tr>

        </thead>

        <tbody>

          {records.map((record, index) => (

            <tr key={index}>

              <td className="border px-4 py-2">
                {record.name}
              </td>

              <td className="border px-4 py-2">
                {record.email}
              </td>

              <td className="border px-4 py-2">
                {record.mobile_without_country_code}
              </td>

              <td className="border px-4 py-2">
                {record.company}
              </td>

              <td className="border px-4 py-2">
                {record.crm_status}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}