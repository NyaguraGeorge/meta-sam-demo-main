import { Heading, Text, useTheme } from "@aws-amplify/ui-react";
import "./SignIn.css";

export function SignInHeader() {
  const { tokens } = useTheme();

  return (
    <>
      {/* <Heading level={3} padding={`${tokens.space.xl} ${tokens.space.xl} 0`}>
        Sign in to your Account
      </Heading> */}
      <div className="signin-header">
        <Text>SIGN IN TO YOUR ACCOUNT</Text>
      </div>
    </>
  );
}
