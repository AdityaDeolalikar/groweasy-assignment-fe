interface Props {
  imported: number;
  skipped: number;
}

export default function ImportStats({
  imported,
  skipped,
}: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8">

      <div className="rounded-xl border p-6 text-center shadow-sm">

        <h2 className="text-3xl font-bold text-green-600">
          {imported}
        </h2>

        <p className="text-gray-500">
          Imported
        </p>

      </div>

      <div className="rounded-xl border p-6 text-center shadow-sm">

        <h2 className="text-3xl font-bold text-red-500">
          {skipped}
        </h2>

        <p className="text-gray-500">
          Skipped
        </p>

      </div>

    </div>
  );
}