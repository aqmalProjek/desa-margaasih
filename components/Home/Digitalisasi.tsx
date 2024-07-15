import React from 'react'
import Container from '../Container'
import { Card } from 'flowbite-react'
import { CgWebsite } from 'react-icons/cg'
import { FaHandshakeAngle } from 'react-icons/fa6'
import { SiBookstack, SiGooglemybusiness } from 'react-icons/si'

const Digitalisasi = () => {
  return (
    <section className="flex w-full justify-center pt-20" id="howto">
        <Container className="">
          <div className="flex justify-between gap-5 flex-col lg:flex-row w-full text-center">
            <div className="flex flex-col w-full items-center justify-center">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black">Digitalisasi Margaasih</h2>
              <p className="font-normal md:text-base text-sm text-gray-700 w-full md:max-w-[450px] mt-2.5">
                Dalam rangka meningkatkan efisiensi dan kemudahan layanan bagi
                masyarakat, Desa Margaasih telah meluncurkan berbagai program
                digitalisasi.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3 items-center justify-center mt-10">
            <Card href="#" className="max-w-sm h-full">
              <CgWebsite className="text-4xl font-bold tracking-tight text-gray-900" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                WEBSITE RESMI
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Sebagai pusat informasi dan layanan online bagi masyarakat,
                termasuk berita terkini, agenda kegiatan, dan layanan
                administrasi.
              </p>
            </Card>
            <Card href="#" className="max-w-sm h-full">
              <FaHandshakeAngle className="text-4xl font-bold tracking-tight text-gray-900" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Administrasi Online
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Pengajuan permohonan SKU, surat domisili, dan dokumen lainnya
                kini dapat dilakukan secara online melalui website desa.
              </p>
            </Card>
            <Card href="#" className="max-w-sm h-full">
              <SiBookstack className="text-4xl font-bold tracking-tight text-gray-900" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Pelatihan Digital
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Program pelatihan untuk warga dalam penggunaan teknologi
                digital, pemasaran digital, dan keterampilan komputer dasar.
              </p>
            </Card>
            <Card href="#" className="max-w-sm h-full">
              <SiGooglemybusiness className="text-4xl font-bold tracking-tight text-gray-900" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Promosi UMKM Digital
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Memanfaatkan platform digital untuk mempromosikan produk-produk
                UMKM desa ke pasar yang lebih luas.
              </p>
            </Card>
          </div>
        </Container>
      </section>
  )
}

export default Digitalisasi