import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Blog",
  description: "Novinky a články od WENS DOOR s.r.o.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" image="/sources/slider2.jpg" />

      <section className="py-[60px] bg-white">
        <div className="w-[90vw] mx-auto lg:max-w-[95%]">
          <div className="text-center py-20">
            <p className="text-lg text-gray-500">
              Blog sa pripravuje.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Sledujte nás na{" "}
              <a
                href="https://www.instagram.com/wensdoor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Instagrame
              </a>{" "}
              pre najnovšie novinky.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
