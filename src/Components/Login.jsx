import { Button, FormControl, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { Form, Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

const initialState = {
  email: "",
  password: "",
};

// actions
const emailAction = (email) => {
  return {
    type: "email",
    payload: email,
  };
};
const passwordAction = (password) => {
  return {
    type: "password",
    payload: password,
  };
};

// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export default function Login() {
  const { isAuth, loginUser } = useContext(AuthContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const LoggedInStatusLS = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    console.log(state);
  }, [state]);

  if (isAuth && LoggedInStatusLS) {
    return <Navigate to="/search" />;
  }

  return (
    <div>
      <Text fontSize="lg" fontWeight="bold" color="blue.500" mb="3">
        Login
      </Text>
      <form
        style={{ width: "70%", margin: "auto", marginBottom: "5px" }}
        onSubmit={(e) => {
          e.preventDefault();
          loginUser(state);
        }}
      >
        <Input
          py="1"
          size="sm"
          placeholder="Email Address"
          type="email"
          value={state.email}
          onChange={(e) => dispatch(emailAction(e.target.value))}
          borderRadius="0.25rem"
        />
        <Input
          py="1"
          size="sm"
          placeholder="Password"
          type="password"
          value={state.password}
          onChange={(e) => dispatch(passwordAction(e.target.value))}
          borderRadius="0.25rem"
        />
        <Button
          size="sm"
          mt="2"
          _hover={{ background: "blue.500", color: "white" }}
          type="submit"
        >
          Login
        </Button>
      </form>
      <small>
        Not Registered?,{" "}
        <Link to="/register">
          <u style={{ color: "red" }}>Register Here</u>
        </Link>
      </small>
    </div>
  );
}
