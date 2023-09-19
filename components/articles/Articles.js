import Article from "./Article";
import Button from "../ui/Button";
import Link from "next/link";
import Image from "next/image";
import MernText from "../mern-text/MernText";

const Articles = ({ articles }) => (
  <section id="articles" className="my-20 lg:my-40">
    <h1 className="font-bold text-xl lg:text-4xl text-center mb-3">
      LEARN <MernText /> DEVELOPMENT
    </h1>
    <Image
      className="hidden dark:block mx-auto w-52 lg:w-72"
      src={`${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}/icons/mern-light.png`}
      width={763}
      height={195}
      alt="MERN Stack"
    />
    <Image
      className="block dark:hidden mx-auto w-52 lg:w-72"
      src={`${process.env.NEXT_PUBLIC_AWS_S3_BUCKET}/icons/mern-dark.png`}
      width={675}
      height={234}
      alt="MERN Stack"
    />
    <ul className="grid grid-cols-12 gap-6 lg:gap-12 xl:gap-24 my-12 lg:my-24">
      {articles?.map((article) => (
        <li
          key={article._id}
          className="col-span-12 lg:col-span-4 group relative rounded overflow-hidden"
        >
          <Article article={article} />
        </li>
      ))}
    </ul>
    <center className="my-12 lg:my-24">
      <Link href="/articles">
        <Button type="button" variant="primary">
          See all
        </Button>
      </Link>
    </center>
  </section>
);
export default Articles;
