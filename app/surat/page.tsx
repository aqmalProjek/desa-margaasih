import Container from "@/components/Container";
import LetterCard from "@/components/letter/LetterCard";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Desa Margaasih Cicalengka Pembuatan Surat",
  description:
    "Pembuatan surat desa margaasih online, buat surat secara online. Sekarang desa margaasih bisa membuat surat keterangan secara oline",
  creator: "Muchamad Aqmal Hidayat",
  authors: [
    {
      name: "Muchamad Aqmal Hidayat",
      url: "https://www.linkedin.com/in/muchamad-aqmal-7840332b5/",
    },
  ],
};

const page = () => {
  return (
    <>
      <section className=" bg-violet-200 pt-10">
        <Container className=" box-border ">
          <div className="flex flex-col-reverse md:flex-row gap-4 p-5 md:justify-between">
            <div className="md:w-[50%] w-[100%] flex flex-col gap-5 ">
              <span className="text-sm tracking-wide text-gray-500 dark:text-gray-400">
                BUAT SURAT KETERANGAN CUKUP DI RUMAH
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                KINI MEMBUAT SURAT TIDAK PERLU DATANG KE DESA
              </h2>
              <span className="text-xs tracking-wide text-gray-500 dark:text-gray-400">
                Siap Diantar | Atau Tinggal Ambil Di Desa
              </span>
              <p className="font-normal md:text-base text-sm text-gray-700 dark:text-gray-400">
                Buat surat SKU, Surat Domisili, Surat Tidak Mampu, dll sekarang
                cukup di rumah dan isi data diri dengan simpel, dan surat pun
                siap di ambil di tempat atau di antar ke alaman anda!
              </p>
            </div>
            <div className="md:w-[40%] w-[100%]">
              <Image
                src={"/mail.png"}
                alt="Shoes"
                width={0}
                height={0}
                sizes="100vw"
                className="object-cover"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="pt-10">
        <Container className="grid md:grid-cols-4 lg:grid-cols-4 gap-3">
          <LetterCard
            link="/sku"
            title="Pembuatan Surat Keterangan Usaha"
            description="Digunakan oleh warga untuk mengurus izin usaha atau sebagai syarat pengajuan pinjaman modal usaha."
          />
          <LetterCard
            link="/sku"
            title="Surat Keterangan Tidak Mampu"
            description="Diperlukan untuk mengajukan bantuan sosial atau beasiswa bagi warga yang kurang mampu."
          />
          <LetterCard
            link="/sku"
            title="Surat Keterangan Kelahiran"
            description="Digunakan untuk melaporkan dan mencatat kelahiran anak warga desa."
          />
          <LetterCard
            link="/sku"
            title="Surat Keterangan Kematian"
            description="Diperlukan untuk melaporkan dan mencatat kematian warga desa."
          />
          <LetterCard
            link="/sku"
            title="Surat Pengantar Nikah"
            description="Diperlukan sebagai syarat administrasi untuk melangsungkan pernikahan."
          />
          <LetterCard
            link="/sku"
            title="Surat Keterangan Pindah"
            description="Digunakan untuk mengurus kepindahan warga dari satu desa ke desa lain."
          />
          <LetterCard
            link="/sku"
            title="Surat Izin Keramaian"
            description="Diperlukan untuk mengadakan acara yang melibatkan banyak orang, seperti pesta pernikahan atau acara desa."
          />
          <LetterCard
            link="/sku"
            title="Surat Keterangan Penghasilan"
            description="Digunakan sebagai syarat untuk berbagai keperluan, seperti pengajuan beasiswa atau kredit."
          />
          <LetterCard
            link="/sku"
            title="Surat Keterangan Belum Menikah"
            description="Diperlukan untuk mengurus persyaratan tertentu yang memerlukan status belum menikah."
          />
          <LetterCard
            link="/sku"
            title="Surat Keterangan Ahli Waris"
            description="Digunakan untuk mengurus pembagian warisan bagi ahli waris yang sah."
          />
        </Container>
      </section>
    </>
  );
};

export default page;
