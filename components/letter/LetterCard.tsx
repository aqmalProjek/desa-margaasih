import { Card } from "flowbite-react";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LetterCard = ({
  title,
  description,
  link,
}: {
  title: String;
  description: String;
  link: Url;
}) => {
  return (
    <Card
      className="w-full"
      renderImage={() => (
        <Image width={500} height={500} src="/mail.png" alt="image 1" />
      )}
    >
      <Link href={"/surat" +link}>
        <h5 className="text-2xl font-bold tracking-tight ">{title}</h5>
      </Link>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
};

export default LetterCard;
