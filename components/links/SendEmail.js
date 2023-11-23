import Link from "next/link";
import Badge from "../ui/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SendEmail = () => (
  <>
    <Badge variant="primary" className="inline-block">
      Send me an email now!
    </Badge>
    <Link
      href={"mailto:se.hsyntes@gmail.com"}
      target="_blank"
      className="block text-blue-500 underline my-1"
    >
      <FontAwesomeIcon icon={faEnvelope} />
      <span className="ms-2">se.hsyntes@gmail.com</span>
    </Link>
  </>
);

export default SendEmail;
