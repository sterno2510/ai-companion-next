import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="bg-sideBarGray flex flex-col items-center gap-2 p-2">
      <div className="flex gap-2">
        <SocialIcon url="https://instagram.com" />
        <SocialIcon url="https://facebook.com" />
        <SocialIcon url="https://github.com" />
      </div>
      <p className="text-sm mt-2">
        For queries please contact: Brian.Stern2511@gmail.com
      </p>
    </div>
  );
};

export default Footer;
