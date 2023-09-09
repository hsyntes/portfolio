import Card from "../ui/Card";
import Input from "../ui/Input";
import useInput from "@/hooks/useInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Button from "../ui/Button";
import Link from "next/link";

const Login = () => {
  const {
    state: {
      value: username,
      isValid: isUsernameValid,
      isError: isUsernameError,
      message: usernameErrorMessage,
    },
    handleOnChange: usernameOnChange,
    handleOnBlur: usernameOnBlur,
  } = useInput();

  const {
    state: {
      value: password,
      isValid: isPasswordValid,
      isError: isPasswordError,
      message: passwordErrorMessage,
    },
    handleOnChange: passwordOnChange,
    handleOnBlur: passwordOnBlur,
  } = useInput();

  return (
    <form>
      <Card.Body className="my-12">
        <div className="form-group mb-8">
          <Input
            type="username"
            name="username"
            placeholder="@username"
            value={username}
            onChange={usernameOnChange}
            onBlur={usernameOnBlur}
          />
          {isUsernameError && (
            <p className="text-red-500 mt-2">
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <span className="ms-2">{usernameErrorMessage}</span>
            </p>
          )}
        </div>
        <div className="form-group mb-8">
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={passwordOnChange}
            onBlur={passwordOnBlur}
          />
          {isPasswordError && (
            <p className="text-red-500 mt-2">
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <span className="ms-2">{passwordErrorMessage}</span>
            </p>
          )}
        </div>
      </Card.Body>
      <Card.Footer className="text-center">
        <Button
          type="submit"
          variant="primary"
          className="w-full !py-4 lg:!py-6"
        >
          Login
        </Button>
        <p className="text-gray-500 my-6">Don't heve an account?</p>
        <Link href="/authentication?auth=signup">
          <Button type="button" variant="link" className="!text-lg">
            Signup
          </Button>
        </Link>
      </Card.Footer>
    </form>
  );
};

export default Login;
