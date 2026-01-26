import { Suspense } from "react";
import CatalogClient from "@/components/catalog/CatalogClient";

export default function CatalogPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-[60vh] items-center justify-center">
          <p className="text-lg font-semibold animate-pulse">
            Cargando catálogo...
          </p>
        </div>
      }
    >
      <CatalogClient />
    </Suspense>
  );
}
