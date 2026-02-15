import { Facebook, Github, Linkedin, Twitter, Youtube } from "lucide-react";

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pratik-salunke-401090308/",
    icon: <Linkedin className="inline-block" />,
  },
  {
    name: "Twitter",
    url: "http://twitter.com/roadtocode4u",
    icon: <Twitter className="inline-block" />,
  },
  {
    name: "YouTube",
    url: "http://youtube.com/roadtocode4u",
    icon: <Youtube className="inline-block" />,
  },
  {
    name: "Facebook",
    url: "http://facebook.com/roadtocode4u",
    icon: <Facebook className="inline-block" />,
  },
];

const FooterLink = ({ name, url, icon }) => {
  return (
    <a href={url} className="mx-2 mr-3 align-middle">
      {icon}
      <span className="ml-1">{name}</span>
    </a>
  );
};

function Footer() {
  return (
    <div className="w-full bg-[#8FFF85] px-10 py-4 flex justify-around">
      <div>
        Made with <span style={{ color: "red" }}>❤</span> by RTC
      </div>

      <div>
        {SOCIAL_LINKS.map((link, index) => (
          <FooterLink
            key={index}
            name={link.name}
            url={link.url}
            icon={link.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Footer;
