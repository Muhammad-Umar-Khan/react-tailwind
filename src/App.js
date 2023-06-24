import React from "react";
import * as PIC from "./components/profile";
import avatar from "./assets/avatar.png";
import { Box } from "@chakra-ui/react";

const PageWithCard = () => {
  return (
    <>
      <PIC.Card>
        <PIC.Avatar img={avatar} />
        <Box padding="10px">
          <PIC.PersonalInfo
            name="Samantha Brooke"
            role="Creative Writer"
            location="Ontario, Canada"
            registerDate="July, 2021"
          />
          <PIC.Interests
            entries={["Productivity", "Work", "Business", "Woman"]}
          />
        </Box>

        <PIC.Buttons active={["Edit"]} />
      </PIC.Card>
    </>
  );
};

export default PageWithCard;
