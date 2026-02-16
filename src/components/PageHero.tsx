import Image from "next/image";

interface PageHeroProps {
  title: string;
  image: string;
  children?: React.ReactNode;
}

export default function PageHero({ title, image, children }: PageHeroProps) {
  return (
    <section className="relative w-full h-[20vh] md:h-[24vh] z-[60]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-[center_20%]"
        priority
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.5))",
        }}
      />
      <div className="relative z-[1] h-full flex items-center">
        <div className="max-w-[95%] ml-[5vw] md:ml-[5vw] mt-[30px]">
          <h1 className="text-[1.6rem] md:text-[2rem] font-bold text-white">
            {title}
          </h1>
        </div>
      </div>
      {/* Glassmorphism tabs at the bottom */}
      {children && (
        <div className="absolute bottom-0 left-[5vw] w-[90vw] md:left-1/2 md:w-auto md:-translate-x-1/2 z-[4] md:bg-white/10 md:backdrop-blur-[10px] md:border md:border-white/20">
          {children}
        </div>
      )}
    </section>
  );
}
