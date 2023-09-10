import Card from "../ui/Card";
import Input from "../ui/Input";
import useInput from "@/hooks/useInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Button from "../ui/Button";
import Link from "next/link";

const Signup = ({ BACKEND_API }) => {
  // * Input values with custom hook
  const {
    state: {
      value: firstname,
      isValid: IsFirstnameValid,
      isError: isFirstnameError,
      message: firstnameErrorMessage,
    },
    handleOnChange: firstnameOnChange,
    handleOnBlur: firstnameOnBlur,
  } = useInput();

  const {
    state: {
      value: lastname,
      isValid: isLastnameValid,
      isError: isLastnameError,
      message: lastnameErrorMessage,
    },
    handleOnChange: lastnameOnChange,
    handleOnBlur: lastnameOnBlur,
  } = useInput();

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
      value: email,
      isValid: isEmailValid,
      isError: isEmailError,
      message: emailErrorMessage,
    },
    handleOnChange: emailOnChange,
    handleOnBlur: emailOnBlur,
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

  const {
    state: {
      value: passwordConfirm,
      isValid: isPasswordConfirmValid,
      isError: isPasswordConfirmError,
      message: passwordConfirmErrorMessage,
    },
    handleOnChange: passwordConfirmOnChange,
    handleOnBlur: passwordConfirmOnBlur,
  } = useInput();

  return (
    <form>
      <Card.Body className="my-12">
        <div className="form-group mb-8">
          <Input
            type="text"
            name="firstname"
            placeholder="Firstname"
            value={firstname}
            onChange={firstnameOnChange}
            onBlur={firstnameOnBlur}
          />
          {isFirstnameError && (
            <p className="text-red-500 mt-2">
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <span className="ms-2">{firstnameErrorMessage}</span>
            </p>
          )}
        </div>
        <div className="form-group mb-8">
          <Input
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={lastname}
            onChange={lastnameOnChange}
            onBlur={lastnameOnBlur}
          />
          {isLastnameError && (
            <p className="text-red-500 mt-2">
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <span className="ms-2">{lastnameErrorMessage}</span>
            </p>
          )}
        </div>
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
            type="email"
            name="email"
            placeholder="example@email.com"
            value={email}
            onChange={emailOnChange}
            onBlur={emailOnBlur}
          />
          {isEmailError && (
            <p className="text-red-500 mt-2">
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <span className="ms-2">{emailErrorMessage}</span>
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
        <div className="form-group mb-8">
          <Input
            type="password"
            name="password-confirm"
            placeholder="Password confirm"
            value={passwordConfirm}
            onChange={passwordConfirmOnChange}
            onBlur={passwordConfirmOnBlur}
          />
          {isPasswordConfirmError && (
            <p className="text-red-500 mt-2">
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <span className="ms-2">{passwordConfirmErrorMessage}</span>
            </p>
          )}
        </div>
      </Card.Body>
      <Card.Footer className="text-center">
        <Button
          type="submit"
          variant="primary"
          className="w-full !py-4 lg:!py-5"
        >
          Signup
        </Button>
        <p className="text-gray-500 my-6">Have you an account?</p>
        <Link href="/authentication?auth=login">
          <Button type="button" variant="link" className="!text-lg">
            Login
          </Button>
        </Link>
      </Card.Footer>
    </form>
  );
};

export default Signup;
