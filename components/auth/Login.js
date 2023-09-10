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
import Toast from "../ui/Toast";

const login = async ({ formData, BACKEND_API }) => {
  console.log(formData, BACKEND_API);

  const response = await fetch(`${BACKEND_API}/hsyntes/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  return data;
};

const Login = ({ BACKEND_API }) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState();
  const [errorDialog, setErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const queryClient = useQueryClient();

  // * Input values with custom hook
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

  // * Logging in request with React-Query
  const mutation = useMutation(login, {
    onSuccess: (data) => {
      console.log(data);

      if (data?.status === "fail") {
        setErrorDialog(true);
        setErrorMessage(data?.message);
      }

      if (data?.status === "success") {
        setToast(true);
        setToastMessage(data.message);
      }
    },
  });

  // * Toggle
  const handleErrorDialog = () => setErrorDialog(!errorDialog);
  const handleToast = () => setToast(!toast);

  // * Form validation
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
            className="w-full !py-4 lg:!py-5"
            disabled={!isFormValid || mutation.isLoading}
            onClick={() => {
              mutation.mutate({
                formData: { username, password },
                BACKEND_API,
              });
            }}
          >
            Login
          </Button>
          <p className="text-gray-500 my-6">Don't have an account?</p>
          <Link href="/authentication?auth=signup">
            <Button
              type="button"
              variant="link"
              className="w-full !py-4 lg:!py-6"
            >
              Signup
            </Button>
          </Link>
        </Card.Footer>
      </form>
      <ErrorDialog
        show={errorDialog}
        handleErrorDialog={handleErrorDialog}
        errorMessage={errorMessage}
      />
      <Toast show={toast} handleToast={handleToast} message={toastMessage} />
    </>
  );
};

export default Login;
