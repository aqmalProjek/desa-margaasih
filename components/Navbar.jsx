import Link from "next/link";
import {
  Dropdown,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function NavabrComponent() {
  return (
    <Navbar fluid className="text-xl tengah z-50 mb-20 fixed bg-slate-800">
      <NavbarBrand as={Link} href="#" className="">
        <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
          Margaasih
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="">
        <NavbarLink className="text-base text-white" href="#" active>
          Beranda
        </NavbarLink>
        <Dropdown
          arrowIcon={false}
          inline
          className=""
          label={
            <span className="text-base text-white border-b-2 border-white md:border-none block md:inline w-full md:w-auto">Pembuatan Surat</span>
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Cara Membuat Surat Online</span>
          </Dropdown.Header>
          <Dropdown.Item>Surat Keterangan Usaha</Dropdown.Item>
          <Dropdown.Item>Surat Keterangan Domisili</Dropdown.Item>
          <Dropdown.Item>Surat Keterangan Menikah</Dropdown.Item>
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
