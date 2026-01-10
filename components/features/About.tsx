import { Dictionary } from '@/lib/types';

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              {dict.about.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {dict.about.description}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {dict.about.sub_description}
            </p>
          </div>

          {/* Video */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-muted aspect-video">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                controls
                loop
                playsInline
                preload="metadata"
                aria-label="Sanatorium promotional video">
                <source src="/videos/REKLAMA.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
