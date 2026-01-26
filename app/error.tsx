"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
          <h1 className="text-4xl font-bold">
            Algo salió mal :c
          </h1>

          <p className="max-w-md text-gray-600">
            Ocurrió un error inesperado. Puedes intentar recargar la
            página o volver al inicio.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => reset()}
              className="rounded-lg bg-[#2563EB] px-6 py-3 text-white font-semibold hover:opacity-90"
            >
              Reintentar
            </button>

            <a
              href="/"
              className="rounded-lg border px-6 py-3 font-semibold hover:bg-gray-50"
            >
              Ir al inicio
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
