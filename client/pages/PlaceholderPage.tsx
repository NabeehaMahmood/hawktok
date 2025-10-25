import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PlaceholderPageProps {
  title: string;
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header transparent={false} />

      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-white font-bold text-5xl md:text-6xl mb-8">
            {title}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            This page is still being built. Write us a message if you want to learn more about this area.
          </p>
          <a
            href="/"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Back to homepage
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
