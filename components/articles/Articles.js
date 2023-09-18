import Article from "./Article";
import Button from "../ui/Button";
import Link from "next/link";

const Articles = ({ articles }) => (
  <section id="articles" className="my-20 lg:my-40">
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
