import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-black/5 dark:border-white/10">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo/steviebdesigns Logo Symbol.png" alt="Steviebdesigns" width={36} height={36} />
            <span className="font-semibold tracking-tight">Steviebdesigns</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#home" className="hover:opacity-80">Home</Link>
            <Link href="#about" className="hover:opacity-80">About Me</Link>
            <Link href="#gallery" className="hover:opacity-80">Gallery</Link>
            <Link href="#services" className="hover:opacity-80">Services</Link>
            <Link href="#experience" className="hover:opacity-80">Experience</Link>
            <Link href="#blog" className="hover:opacity-80">Blog</Link>
            <Link href="#contact" className="hover:opacity-80">Contact</Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <section id="home" className="relative flex items-center justify-center text-center py-24 sm:py-36">
          <div className="space-y-6 px-4">
            <div className="flex justify-center">
              <Image src="/logo/steviebdesigns Main Logo.png" alt="Steviebdesigns Logo" width={360} height={160} priority />
            </div>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">Creativity. Innovation. Professionalism.</h1>
            <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto">
              QA engineering, automation, and modern web development with a focus on quality and experience.
            </p>
            <div className="flex items-center justify-center gap-3">
              <a href="#about" className="px-5 py-2 rounded-md bg-foreground text-background text-sm sm:text-base hover:opacity-90">About Me</a>
              <a href="#contact" className="px-5 py-2 rounded-md border border-foreground/20 text-sm sm:text-base hover:bg-foreground/5">Contact</a>
            </div>
          </div>
        </section>

        <section id="about" className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold">About Me</h2>
          <p className="mt-4 text-foreground/80">
            Detail-oriented and innovative QA Engineer with over 10 years of hands-on experience in both manual and automated software testing across mobile and web platforms...
          </p>
        </section>

        <section id="gallery" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold">Gallery</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-video rounded-lg bg-foreground/5" />
            <div className="aspect-video rounded-lg bg-foreground/5" />
            <div className="aspect-video rounded-lg bg-foreground/5" />
          </div>
        </section>

        <section id="services" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold">Services</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "QA Services",
              "Application Development",
              "Digital & Web Strategy",
              "Prompt Engineering",
              "AI Integration Strategy",
            ].map((title) => (
              <div key={title} className="rounded-lg border border-foreground/10 p-5 hover:bg-foreground/[.03] transition">
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm text-foreground/70 mt-2">Short description of {title.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold">Experience</h2>
          <div className="mt-6 grid gap-4">
            <div className="rounded-lg border border-foreground/10 p-5">
              <p className="text-sm text-foreground/80">Timeline and roles coming soon.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-3xl mx-auto px-4 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold">Contact</h2>
          <form className="mt-6 grid gap-3">
            <input className="rounded-md border border-foreground/20 px-3 py-2 bg-background" placeholder="Name" />
            <input className="rounded-md border border-foreground/20 px-3 py-2 bg-background" placeholder="Email" type="email" />
            <textarea className="rounded-md border border-foreground/20 px-3 py-2 bg-background" placeholder="Message" rows={5} />
            <button type="submit" className="px-5 py-2 rounded-md bg-foreground text-background w-fit">Send</button>
          </form>
        </section>
      </main>

      <footer className="border-t border-foreground/10 py-8 text-sm text-center text-foreground/70">
        © {new Date().getFullYear()} Steviebdesigns. All rights reserved.
      </footer>
    </div>
  );
}
