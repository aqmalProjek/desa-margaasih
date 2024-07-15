import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import { Button } from 'flowbite-react'

const About = () => {
  return (
    <section className="w-full flex min-h-56  md:pt-12 pt-6 items-center mb-96 lg:mb-0">
        <Container className="bg-white relative">
          <div className="md:w-[75%] lg:w-[800px] w-full bg-white relative z-0 ">
            <Image
              src={"/bg.jpeg"}
              alt="Shoes"
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="absolute z-10 md:top-5 right-0 box-border p-10 bg-white md:max-w-[50%] h-full flex flex-col gap-3">
            <span className="text-sm tracking-wide text-gray-500 dark:text-gray-400">
              MARGAASIH CICALENGKA
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              SEKILAS TENTANG DESA KAMI
            </h2>
            <p className="font-normal md:text-base text-sm text-gray-700 dark:text-gray-400">
            Desa Margaasih terletak di kecamatan Cicalengka, Kabupaten Bandung, Jawa Barat. Desa ini memiliki sejarah panjang sebagai salah satu desa yang aktif dan produktif dalam kegiatan ekonomi dan sosial. Masyarakat desa Margaasih dikenal ramah dan memiliki semangat gotong royong yang tinggi, yang tercermin dalam berbagai kegiatan desa.
            </p>
            <Button color="warning" className="lg:max-w-[40%] max-w-[60%] rounded-none text-sm md:text-base">Pelajari Desa Kami &gt;</Button>
          </div>
        </Container>
      </section>
  )
}

export default About