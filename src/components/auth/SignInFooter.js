import { Flex, Link, useAuthenticator, useTheme } from "@aws-amplify/ui-react";

export function SignInFooter() {
  const { toResetPassword } = useAuthenticator();
  const { tokens } = useTheme();

  return (
    <Flex
      justifyContent="center"
      padding={`0 0 ${tokens.space.medium}`}
      onMouseOver={() => console.log("hovered")}
    >
      <Link onClick={toResetPassword}>Reset password</Link>
    </Flex>
  );
}
