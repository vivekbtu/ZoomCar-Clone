import { Button, FormControl, Input, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
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

export default function Register() {
  const { registered, registerUser } = useContext(AuthContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    if (registered) {
      navigate("/login");
    }
  });

  return (
    <div>
      <Text fontSize="lg" fontWeight="bold" color="red.500" mb="3">
        Sign-Up
      </Text>
      <form
        style={{ width: "70%", margin: "auto", marginBottom: "5px" }}
        onSubmit={(e) => {
          e.preventDefault();
          registerUser(state);
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
          _hover={{ background: "red.500", color: "white" }}
          type="submit"
        >
          SignUp
        </Button>
      </form>
      <small>
        Already Registered ?,
        <Link to="/login">
          <u style={{ color: "blue" }}>Login Here</u>
        </Link>
      </small>
    </div>
  );
}
