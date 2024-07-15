import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
const FooterCustom = () => {
  return (
    <Footer container className="mt-10">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <span className="self-center whitespace-nowrap text-2xl font-semibold ">
              Margaasih
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="Profile" />
              <FooterLinkGroup col>
                <FooterLink href="#">Sejarah Margaasih</FooterLink>
                <FooterLink href="#">Pengurus Margaasih</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Pembuatan Surat" />
              <FooterLinkGroup col>
                <FooterLink href="#">Surat Usaha</FooterLink>
                <FooterLink href="#">Surat Domisili</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Transparasi" />
              <FooterLinkGroup col>
                <FooterLink href="#">Kegiatan</FooterLink>
                <FooterLink href="#">Dana Desa</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Margaasih" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
            <FooterIcon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCustom;
