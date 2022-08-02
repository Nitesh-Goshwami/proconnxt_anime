import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export function LoginRedirect() {
  const { loginWithRedirect } = useAuth0();
  useEffect(() => {
    loginWithRedirect();
  }, [loginWithRedirect]);
  return (
    <>
      <p>Please Wait Redirecing to login page ..</p>
    </>
  );
}