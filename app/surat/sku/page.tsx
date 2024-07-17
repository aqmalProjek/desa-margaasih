import Container from "@/components/Container";
import { Button, FloatingLabel } from "flowbite-react";
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
    <section className="pt-10">
      <Container className="">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wider">
          Pembuatan Surat Keterangan Usaha
        </h1>
        <div className="w-full bg-white relative z-0 mt-10">
          <Image
            src={"/mail.png"}
            alt="Shoes"
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover rounded"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="w-full pt-10">
            <p className="mb-5 font-normal text-justify text-gray-700 dark:text-gray-400">
            Surat Keterangan Usaha (SKU) adalah surat yang memberikan keterangan resmi mengenai tempat usaha, jenis usaha dan lama pendirian usaha oleh seseorang atau badan usaha yang dikeluarkan oleh Pemerintah Desa. Sebagian besar SKU ini dibuat untuk dokumen pendukung dalam pengajuan pembiayaan perbankan oleh seseorang pribadi maupun badan usaha.
            </p>
            <p className="mb-5 font-normal text-justify text-gray-700 dark:text-gray-400">
            Berikut ini adalah langkah dan dokumen persyaratan dalam pembuatan SKU :
            </p>
            <ol className="font-normal text-justify text-gray-700 dark:text-gray-400 list-item list-decimal mb-5">
                <li>Warga datang ke Ketua RT/RW setempat dengan membawa copy KTP dan KK untuk dibuatkan surat pengantar</li>
                <li>Surat Pengantar dari Ketua RT/RW selanjutnya dibawa ke kantor Balai Desa untuk dibuatkan SKU </li>
                <li>Pengajuan SKU di Balai Desa dilengkapi dengan foto tempat usaha, copy KTP dan copy KK</li>
                <li>Ada beberapa jenis SKU yang membutuhkan tanda tangan Camat, sehingga harus mengurus legalisasi di kantor Kecamatan. Namun pada umumnya SKU hanya memerlukan tanda tangan Kepala Desa</li>
            </ol>

            <p className="mb-5 font-normal text-justify text-gray-700 dark:text-gray-400">
            Isi Data Diri Anda Di bawah ini
            </p>
            <form action="">
                <div className="w-full grid md:grid-cols-2 gap-2 px-2 md:px-0">
                <FloatingLabel variant="filled" label="Nama Lengkap" />
                <FloatingLabel variant="filled" label="Nik" />
                <FloatingLabel variant="filled" label="Nkk" />
                <FloatingLabel variant="filled" label="Jenis Kelamin" />
                <FloatingLabel variant="filled" label="Nama Lengkap" />
                <div></div>
                <Button type="submit" color="warning" className="lg:max-w-[40%] max-w-[60%] rounded-none text-sm md:text-base">Buat SKU &gt;</Button>
                </div>
            </form>
        </div>
      </Container>
    </section>
  );
};

export default page;
