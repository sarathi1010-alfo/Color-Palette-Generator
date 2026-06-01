import { Suspense } from "react";
import { PaletteGenerator } from "@/components/generator/PaletteGenerator";

export default function GeneratorPage() {
  return (
    <main className="h-screen">
      <Suspense fallback={<div className="h-screen bg-background" />}>
        <PaletteGenerator />
      </Suspense>
    </main>
  );
}
