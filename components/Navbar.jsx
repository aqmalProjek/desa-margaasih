import Link from "next/link";
import {
  Dropdown,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";


export default function NavabarComponent() {
  return (
    <Navbar fluid className="text-xl tengah z-50 mb-20 fixed bg-slate-800">
      <NavbarBrand as={Link} href="/" className="">
        <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
          Margaasih
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="">
        <NavbarLink className="text-base text-white" href="/" as={Link} active>
          Beranda
        </NavbarLink>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <span className="text-base text-white border-b-2 border-white md:border-none block md:inline w-full md:w-auto">
              Pembuatan Surat
            </span>
          }
        >
          <DropdownHeader>
            <Link className="block text-sm" href="/surat">
              Cara Membuat Surat Online
            </Link>
          </DropdownHeader>
          <DropdownItem>Pembuatan Surat Keterangan Usaha</DropdownItem>
          <DropdownItem>Surat Keterangan Tidak Mampu </DropdownItem>
          <DropdownItem>Surat Keterangan Kelahiran </DropdownItem>
          <DropdownItem>Surat Keterangan Kematian  </DropdownItem>
          <DropdownItem>Surat Pengantar Nikah  </DropdownItem>
          <DropdownItem>Surat Keterangan Pindah </DropdownItem>
          <DropdownItem>Surat Izin Keramaian </DropdownItem>
          <DropdownItem>Surat Keterangan Penghasilan </DropdownItem>
          <DropdownItem>Surat Keterangan Belum Menikah </DropdownItem>
          <DropdownItem>Surat Keterangan Ahli Waris </DropdownItem>
        </Dropdown>
        <NavbarLink className="text-base text-white" href="#">
          Sejarah
        </NavbarLink>
        <NavbarLink className="text-base text-white" href="#">
          Struktur
        </NavbarLink>
        <NavbarLink className="text-base text-white" href="#">
          IDM
        </NavbarLink>
        <NavbarLink className="text-base text-white" href="#">
          Transparasi
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
