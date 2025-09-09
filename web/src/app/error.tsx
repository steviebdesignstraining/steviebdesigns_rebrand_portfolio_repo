"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center">
          <Image 
            src="/logo/steviebdesigns Logo Symbol.png" 
            alt="Steviebdesigns" 
            width={80} 
            height={80} 
          />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-red-500/20">500</h1>
          <h2 className="text-2xl font-semibold">Something went wrong!</h2>
          <p className="text-foreground/70 max-w-md">
            We&apos;re experiencing some technical difficulties. 
            Please try again or contact us if the problem persists.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity"
          >
            Try Again
          </button>
          <Link 
            href="/" 
            className="px-6 py-3 border border-foreground/20 rounded-md hover:bg-foreground/5 transition-colors"
          >
            Go Home
          </Link>
        </div>

        <div className="pt-8 text-sm text-foreground/50">
          <Link href="/" className="hover:text-foreground/70 transition-colors">
            ← Back to Steviebdesigns
          </Link>
        </div>
      </div>
    </div>
  );
}
