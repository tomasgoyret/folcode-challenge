import Image from "next/image";
import React from "react";

const UiImage = ({ url, addClassname, onClick }) => {
  return (
    <Image
      src={url}
      alt="Next.js Logo"
      width={600}
      height={430}
      className={` ${addClassname}`}
      onClick={onClick}
    />
  );
};

export default UiImage;
