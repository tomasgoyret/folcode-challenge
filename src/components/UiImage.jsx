import Image from "next/image";
import React from "react";

const UiImage = ({ url, addClassname, onClick }) => {
  return (
    <Image
      src={url}
      alt="Next.js Logo"
      width={200}
      height={90}
      className={`${addClassname} self-center`}
      onClick={onClick}
    />
  );
};

export default UiImage;
