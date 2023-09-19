import Image from "next/image";
import Link from "next/link";

const Brand = ({ onClick }) => (
  <Link href="/" className="flex items-center" onClick={onClick}>
    <Image
      src="https://avatars.githubusercontent.com/u/69708483?v=4"
      className="rounded-full drop-shadow"
      width={52}
      height={52}
      alt="Huseyin Ates | Software Engineer - Full Stack MERN Developer"
    />
    <section className="ms-3">
      <h1 className="font-bold text-lg">Huseyin Ates</h1>
      <p className="text-gray-500 text-sm">Full Stack Developer</p>
      <Image
        src={`${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}/icons/mern-light.png`}
        width={675}
        height={234}
        className="hidden dark:block w-16"
        alt="Mern Stack"
      />
      <Image
        src={`${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}/icons/mern-dark.png`}
        width={675}
        height={234}
        className="block dark:hidden w-16"
        alt="Mern Stack"
      />
    </section>
  </Link>
);

export default Brand;
