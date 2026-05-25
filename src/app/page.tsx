import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-heading text-navy-800">
          {siteConfig.name}
        </h1>
        <p className="text-xl text-navy-600 max-w-2xl">
          Professional legal services in corporate, civil, property, and
          immigration law across Canada.
        </p>
        <button className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200">
          Get Started
        </button>
        <div className="mt-8 pt-8 border-t border-navy-200">
          <p className="text-sm text-navy-500">
            Design System Test: Playfair Display heading + Inter body + Navy &
            Gold colors
          </p>
        </div>
      </div>
    </main>
  );
}
