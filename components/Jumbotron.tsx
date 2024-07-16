import Image from "next/image";
import React from "react";
import Container from "./Container";

const Jumbotron = () => {
  return (
    <section className=" w-full min-h-[70vh] bg-black max-h-[800px] relative">
      <Image
        src="/Bg_1.jpg"
        alt="Gambaran event"
        fill
        objectFit="cover"
        priority={true}
        className="relative"
      />
      <div className="bg-white w-full h-full absolute z-10 top-0 flex gradient items-center ">
        <Container className="pl-5 md:pl-0">
          <div className="flex flex-col text-white gap-2 max-w-[70%]">
            <small className="text-xs md:text-sm tracking-wide text-white ">
              SELAMAT DATANG DI DESA MARGAASIH CICALENGKA
            </small>
            <h1 className="text-3xl md:text-5xl font-bold tracking-wider">DESA ASRI, RELIGIUS, HOME INDUSTRI</h1>
            <p className="md:text-base text-sm">
              Margaasih Cicalengka | Siap Melek Digital
            </p>
            <p className="md:text-base text-sm">
              Website ini dibuat sebagai profil desa, sarana adminstrasi warga
              serta platform transpansi desa.
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Jumbotron;
