import { useReducer } from "react";
import validator from "validator";

const initialState = {
  value: "",
  isValid: null,
  isError: null,
  message: "",
};

const reducer = (state, action) => {
  const { type, name, payload } = action;

  switch (type) {
    case "onChange": {
      switch (name) {
        case "firstname":
        case "lastname":
          return {
            value: `${payload.slice(0, 1).toUpperCase()}${payload
              .slice(1)
              .toLowerCase()}`.replaceAll(/[0-9]/g, ""),
            isValid: payload.length >= 2,
          };

        case "username":
          return {
            value: payload.toLowerCase(),
            isValid: payload.length >= 3 && payload.length <= 12,
          };

        case "email":
          return {
            value: payload.toLowerCase(),
            isValid: validator.isEmail(payload),
          };

        case "password":
        case "password-confirm":
          return {
            value: payload,
            isValid: payload.length >= 8 && payload.length <= 32,
          };

        default:
          return new Error(`Unknown input name: ${name}`);
      }
    }

    case "onBlur": {
      switch (name) {
        case "firstname":
        case "lastname":
          return {
            ...state,
            isError: !state.isValid,
            message:
              !state.isValid &&
              `${name.slice(0, 1).toUpperCase()}${name
                .slice(1)
                .toLowerCase()} must be 2 characters at least`,
          };

        case "username":
          return {
            ...state,
            isError: !state.isValid,
            message:
              !state.isValid && "@username must be between 3 and 12 characters",
          };

        case "email":
          return {
            ...state,
            isError: !state.isValid,
            message:
              !state.isValid && "Invalid email address. Please check it double",
          };

        case "password":
          return {
            ...state,
            isError: !state.isValid,
            message:
              !state.isValid &&
              "The password must be between 8 and 32 characters",
          };

        case "password-confirm":
          return {
            ...state,
            isError: !state.isValid,
            message: !state.isValid && "Please confirm your password",
          };

        default:
          return new Error(`Unknown input name: ${name}`);
      }
    }

    default:
      return new Error(`Unkown action type: ${type}`);
  }
};

const useInput = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "onChange", name, payload: value });
  };

  const handleOnBlur = (e) => {
    const { name } = e.target;
    dispatch({ type: "onBlur", name });
  };

  return { state, handleOnChange, handleOnBlur };
};

export default useInput;
