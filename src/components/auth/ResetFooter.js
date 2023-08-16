import { Flex, Link, useAuthenticator, useTheme } from "@aws-amplify/ui-react";

export function ResetFooter() {
  const { toSignIn } = useAuthenticator();
  const { tokens } = useTheme();

  return (
    <>
      <Flex justifyContent="center" padding={`0 0 ${tokens.space.medium}`}>
        <Link onClick={toSignIn}>Back to sign-in</Link>
      </Flex>
    </>
  );
}
