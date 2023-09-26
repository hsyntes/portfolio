import Image from "next/image";

const Brand = ({ onClick, children }) => (
  <div className="flex items-start justify-between" onClick={onClick}>
    <section className="flex items-start">
      <Image
        src="https://avatars.githubusercontent.com/u/69708483?v=4"
        className="rounded-full drop-shadow"
        width={42}
        height={42}
        alt="Huseyin Ates | Software Engineer - Full Stack MERN Developer"
      />
      <h1 className="leading-4 ms-3">
        <span className="block font-bold">Huseyin Ates</span>
        <span className="block text-gray-500 text-sm">
          Full Stack Developer
        </span>
        {children}
      </h1>
    </section>
    <Image
      src={`${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}/icons/mern-light.png`}
      width={675}
      height={234}
      className="hidden dark:block w-20"
      alt="Mern Development"
    />
    <Image
      src={`${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}/icons/mern-dark.png`}
      width={675}
      height={234}
      className="block dark:hidden w-20"
      alt="Mern Development"
    />
  </div>
);

export default Brand;
