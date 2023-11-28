import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Container from "../container/Container";
import Button from "./Button";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import Searchbar from "./Searchbar";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import getCurrentUser from "@/utils/getCurrentUser";
import { userSliceActions } from "@/store/user-slice/user-slice";
import { themeSliceActions } from "@/store/theme-slice/theme-slice";

const Navbar = () => {
  const [searchbar, setSearchbar] = useState(false);
  const [backdropColor, setBackdropColor] = useState("");
  const [sidebar, setSidebar] = useState(false);
  const currentUserState = useSelector((state) => state.currentUser);
  const themeState = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const { data: user } = useQuery("getCurrentUser", {
    queryFn: getCurrentUser,
  });

  const handleSearchBar = () => setSearchbar(!searchbar);
  const handleSidebar = () => setSidebar(!sidebar);

  const { currentUser } = currentUserState;
  const { theme } = themeState;

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
    dispatch(themeSliceActions.switchTheme(isChecked ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") setIsChecked(true);
    else setIsChecked(false);
  }, [theme]);

  useEffect(() => {
    if (user) dispatch(userSliceActions.setCurrentUser(user));
    else dispatch(userSliceActions.setCurrentUser(null));
  }, [user, dispatch]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (theme === "dark")
        setBackdropColor(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--color-black"
          )
        );
      else
        setBackdropColor(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--color-light"
          )
        );
    }
  }, [theme]);

  return (
    <>
      <nav>
        <Container className="grid grid-cols-12 items-center">
          <Link href="/" className="col-span-2">
            <Image
              src="/logo.svg"
              width={32}
              height={32}
              alt="Logo"
              priority={true}
            />
          </Link>
          <ul className="col-span-8 lg:col-span-7">
            <li className="relative">
              <input
                type="text"
                name="search"
                className="form-input block w-full bg-light dark:bg-black caret-light dark:caret-black rounded border-none shadow ps-10 py-1 lg:py-1.5 placeholder:text-gray-500 placeholder:text-sm placeholder:lg:text-base focus:border-gray-300 focus:dark:border-gray-600 focus:ring-0 hover:shadow-md cursor-pointer transition"
                placeholder="Search documents"
                onClick={handleSearchBar}
                readOnly
              />

              <FontAwesomeIcon
                icon={faSearch}
                className="absolute text-gray-500 top-1/2 left-4 -translate-y-1/2"
              />
            </li>
          </ul>
          <ul className="col-span-2 flex lg:hidden items-center justify-end ms-auto">
            <li>
              <Button
                type="button"
                variant="none"
                className="text-secondary !text-base !px-0"
                onClick={handleSidebar}
              >
                <FontAwesomeIcon icon={faBars} size="xl" />
              </Button>
            </li>
          </ul>
          <ul className="col-span-2 lg:col-span-3 items-center ms-auto hidden lg:flex">
            <li className="me-4">
              <label className="flex items-center cursor-pointer">
                <div
                  className={`relative w-12 h-6 bg-gray-300 rounded-full cursor-pointer transition duration-300 ${
                    isChecked ? "bg-primary" : "bg-gray-300"
                  }`}
                  onClick={handleToggle}
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={isChecked}
                    onChange={handleToggle}
                  />
                  <div
                    className={`toggle__dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 transition-transform ${
                      isChecked
                        ? "transform translate-x-8"
                        : "transform translate-x-0"
                    }`}
                  ></div>
                </div>
                <div className="ms-3">{isChecked ? "🌙" : "🌞"}</div>
              </label>
            </li>
            <li>
              <Link
                href="https://github.com/hsyntes"
                className="text-gray-500 dark:text-gray-400 hover:text-dark hover:dark:text-white transition"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </Link>
            </li>
            <li className="mx-4">
              <Link
                href="https://linkedin.com/in/hsyntes"
                target="_blank"
                className="text-gray-500 dark:text-gray-400 hover:text-dark hover:dark:text-white transition"
              >
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </Link>
            </li>
            {!currentUser && (
              <li>
                <Link href="/authentication?auth=signup">
                  <Button type="button" variant="primary">
                    Sign up
                  </Button>
                </Link>
              </li>
            )}
          </ul>
        </Container>
      </nav>
      <Sidebar
        show={sidebar}
        handleSidebar={handleSidebar}
        backdropColor={backdropColor}
      />
      <Searchbar
        show={searchbar}
        handleSearchBar={handleSearchBar}
        backdropColor={backdropColor}
      />
    </>
  );
};
export default Navbar;
