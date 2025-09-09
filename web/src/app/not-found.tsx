import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
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
          <h1 className="text-6xl font-bold text-foreground/20">404</h1>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="text-foreground/70 max-w-md">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. 
            It might have been moved, deleted, or doesn&apos;t exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="px-6 py-3 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity"
          >
            Go Home
          </Link>
          <Link 
            href="/#contact" 
            className="px-6 py-3 border border-foreground/20 rounded-md hover:bg-foreground/5 transition-colors"
          >
            Contact Us
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
