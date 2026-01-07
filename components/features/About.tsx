import { Dictionary } from '@/lib/types';
import Image from 'next/image';

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

          {/* Image Placeholder */}
          <div className="w-full md:w-1/2">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl bg-muted">
                {/* Check if you have an image, if not perform a placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
                    Image: Sanatorium View
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
