const {
  faLinkedin,
  faGithub,
  faInstagram,
  faTwitter,
} = require("@fortawesome/free-brands-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");
const { default: Link } = require("next/link");

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
      className="me-3 last:me-0"
      key={link.href}
    >
      <FontAwesomeIcon icon={link.icon} size="lg" />
    </Link>
  ));

export default Links;
