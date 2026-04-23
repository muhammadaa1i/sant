'use client';

import dynamic from 'next/dynamic';

const RoomCarousel = dynamic(() => import('./RoomCarousel'), {
  ssr: false,
  loading: () => <div className="relative w-full h-80 bg-slate-200 animate-pulse" />,
});

type RoomCarouselLazyProps = {
  images: string[];
  roomName: string;
  placeholderText: string;
};

export default function RoomCarouselLazy({ images, roomName, placeholderText }: RoomCarouselLazyProps) {
  return <RoomCarousel images={images} roomName={roomName} placeholderText={placeholderText} />;
}
