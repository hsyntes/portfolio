import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import Link from "next/link";
import Card from "../ui/Card";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import useInput from "@/hooks/useInput";
import ErrorDialog from "../ui/ErrorDialog";

const login = async ({ formData }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_API}/users/login`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  return data;
};

const Login = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorDialog, setErrorDialog] = useState(false);
  //   const queryClient = useQueryClient();

  //   const mutationLogin = useMutation(login, {
  //     onSuccess: (data) => {
  //       console.log(data);
  //     },
  //   });

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

  const handleErrorDialog = () => setErrorDialog(!errorDialog);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setIsFormValid(isUsernameValid && isPasswordValid);
    }, 350);

    return () => clearTimeout(identifier);
  }, [isUsernameValid, isPasswordValid]);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
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
            disabled={!isFormValid}
            onClick={() => {
              setErrorDialog(true);
            }}
          >
            Login
          </Button>
          <p className="text-gray-500 my-6">Don't have an account?</p>
          <Link href="/authentication?auth=signup">
            <Button type="button" variant="link" className="!text-lg">
              Signup
            </Button>
          </Link>
        </Card.Footer>
      </form>
      <ErrorDialog show={errorDialog} handleErrorDialog={handleErrorDialog} />
    </>
  );
};

export default Login;
