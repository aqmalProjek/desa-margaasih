import { Card } from "flowbite-react";
import Image from "next/image";
import React from "react";

const LetterCard = ({title}: {title: String}) => {
  return (
    <Card
      className="w-full"
      renderImage={() => (
        <Image width={500} height={500} src="/mail.png" alt="image 1" />
      )}
    >
      <h5 className="text-2xl font-bold tracking-tight ">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </Card>
  );
};

export default LetterCard;
