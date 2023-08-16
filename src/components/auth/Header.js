import { Image, useTheme } from "@aws-amplify/ui-react";
import "./SignIn.css";
import logo from "./axai-transparent-w.png";
export function Header() {
  const { tokens } = useTheme();

  return (
    <div className="signin-image-container">
      <Image
        alt="logo"
        src={logo}
        padding={tokens.space.medium}
        style={{
          width: "90%",
          color: "#fff",
        }}
      />
    </div>
  );
}
