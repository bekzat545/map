import React from "react";
import PropTypes from "prop-types";
import { Div, Text, Image, Button } from "atomize";

function AppButton({ name, title, img, onClick }) {
  return (
    <Button
      onClick={onClick}
      bg="black"
      textColor="white"
      p="none"
      w="189px"
      h="52px"
      d="flex"
      align="center"
      justify="center"
      rounded="md"
      m={{ l: "30px" }}
      shadow="2"
      hoverShadow="4"
      hoverBg="gray"
      borderColor="gray"
    >
      <Div d="flex" justify="start" pos="relative" w="100%">
        <Div pos="absolute" left="16px">
          <Image src={img} alt={name} w="37px" h="37px" />
        </Div>
        <Div pos="relative" left="50px">
          <Text textSize="tiny" textColor="white"  m={{l:""}}>
            {name}
          </Text>
          <Text textSize="18px" textWeight="700" m={{ t: "4px", l:"15px" }}>
            {title}
          </Text>
        </Div>
      </Div>
    </Button>
  );
}

AppButton.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default AppButton;