import { useContext, useRef } from "react";
import { signInUser } from "../../../graphql/quaries";
import { useLazyQuery } from "@apollo/client";
import { UserContext } from "../../context";
import { decodeToken, setJwt } from "../../services/local";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [loginUser, { loading, error, data }] = useLazyQuery(signInUser);

  const email = useRef(null);
  const password = useRef(null);
  const habdleLogin = async (e) => {
    e.preventDefault();
    await loginUser({
      variables: {
        user: {
          email: email?.current?.value,
          password: password?.current?.value,
        },
      },
    });
    if (data) {
      setJwt(data?.data?.token);
      const { token } = data.data;
      setUser(await decodeToken(token));
    }
  };
  return (
    <div className="w-screen h-[100dvh] flex justify-center items-center">
      <form className="p-8 bg-slate-400 flex flex-col gap-4 w-[500px]">
        <input
          className="px-4 py-2 appearance-none outline-none"
          ref={email}
          name="email"
          type="email"
          placeholder="enter email"
        />
        <input
          className="px-4 py-2 appearance-none outline-none"
          ref={password}
          name="password"
          type="password"
          placeholder="enter password"
        />
        {error && <p className="text-red-800">{error.message}</p>}
        <button className="px-4 py-2 bg-green-800" onClick={habdleLogin}>
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
