import Link from "next/link";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LINKS = [
  { href: "https://linkedin.com/in/hsyntes", icon: faLinkedin },
  { href: "https://github.com/hsyntes", icon: faGithub },
  { href: "https://instagram.com/hsyntes", icon: faInstagram },
  { href: "https://twitter.com/hsyntes", icon: faTwitter },
];

const Links = () =>
  LINKS.map((link) => (
    <Link
      href={link.href}
      target="_blank"
      className="text-gray-500 me-2 last:me-0"
      key={link.href}
    >
      <FontAwesomeIcon icon={link.icon} />
    </Link>
  ));

export default Links;
