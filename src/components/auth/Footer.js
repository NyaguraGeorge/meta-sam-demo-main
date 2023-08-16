import { Flex, Text, useTheme } from "@aws-amplify/ui-react";
import "./SignIn.css";
export function Footer() {
  const { tokens } = useTheme();

  return (
    <div className="signin-footer-container">
      <Flex justifyContent="center" padding={tokens.space.medium}>
        <Text className="footer">
          &copy;Argent X AI 2023. All Rights Reserved.
        </Text>
      </Flex>
    </div>
  );
}
