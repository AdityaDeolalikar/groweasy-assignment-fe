import { Loader2 } from "lucide-react";
interface Props {
  text: string;
}
export default function LoadingOverlay({ progressText }: any) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="rounded-xl bg-white p-10 shadow-xl">
        <Loader2 className="mx-auto h-12 w-12 animate-spin text-blue-600" />

        <h2 className="mt-5 text-center text-xl font-semibold">
          AI is Processing...
        </h2>

        <p className="mt-2 text-center text-gray-500">
          <p>{progressText}</p>
        </p>
      </div>
    </div>
  );
}
