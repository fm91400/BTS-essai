import React from 'react';
import { Plane } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-blue-900 text-white py-6 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Plane className="h-8 w-8" />
          <h1 className="text-2xl font-bold">BTS Aéronautique - Mécanique</h1>
        </div>
      </div>
    </header>
  );
}