import { Flex } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Box1Styles from "./Box1.module.css";
import FindCars from "./FindCars";

export default function Box1() {
  const [btn1, setBtn1or2] = useState(1);
  const changeBackground = (val) => {
    setBtn1or2(val);
  }

  return (
    <Flex
      className={btn1===1 ? Box1Styles.background : Box1Styles.background2}
      alignItems="flex-end"
      justifyContent="center"
    >
      <FindCars changeBackground={changeBackground}/>
    </Flex>
  );
}
