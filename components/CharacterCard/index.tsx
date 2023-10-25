import React from "react";
import Image from "next/image";

export interface CharacterCardProps {
  name: string;
  image: string;
  className?: string;
}

export default function CharacterCard(props: CharacterCardProps) {
  const { name, image, className = "" } = props;

  return (
    <div className={`card-character ${className}`}>
      <Image
        src={image}
        alt=""
        width={150}
        height={150}
        priority
        className="max-w-full h-auto rounded-xl"
      />
      <h2 className="text-center">{name}</h2>
    </div>
  );
}
