import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">404</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </section>
    </main>
  );
}

