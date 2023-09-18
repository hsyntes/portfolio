import Image from "next/image";
import Link from "next/link";

const Brand = ({ onClick }) => (
  <Link href="/" className="flex items-center" onClick={onClick}>
    <Image
      src="https://avatars.githubusercontent.com/u/69708483?v=4"
      className="rounded-full"
      width={42}
      height={42}
      alt="Huseyin Ates | Software Engineer - Full Stack MERN Developer"
    />
    <section className="ms-3">
      <h1 className="font-bold">Huseyin Ates</h1>
      <p className="text-gray-500 text-sm">Full Stack Developer</p>
    </section>
  </Link>
);

export default Brand;
