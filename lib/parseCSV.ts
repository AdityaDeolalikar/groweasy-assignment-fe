import Papa from "papaparse";

export function parseCSV(
  file: File
): Promise<{
  headers: string[];
  data: Record<string, string>[];
}> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,

      complete(results) {
        const headers = results.meta.fields || [];

        resolve({
          headers,
          data: results.data as Record<string, string>[],
        });
      },

      error(error) {
        reject(error);
      },
    });
  });
}