import { useContext, useEffect, useRef, useState } from "react";
import { getUser, signInUser } from "../../../graphql/quaries";
import { useLazyQuery, useMutation } from "@apollo/client";
import { UserContext } from "../../context";
import { decodeToken, getJwt, setJwt } from "../../services/local";
import { registerUser } from "../../../graphql/mutations";
import StartPage from "../StartPage";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [isLogin, setIsLogin] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    var id;
    if (getJwt()) {
      setIsLoading(true);
      id = setTimeout(() => setIsLoading(false), 3000);
    }
    return () => {
      clearTimeout(id);
    };
  }, []);

  const [valError, setValError] = useState("");
  const [getuser, { loading: uloading }] = useLazyQuery(getUser, {
    onCompleted: (data) => setUser({ ...data.getUser }),
  });
  const addUser = async (token) => {
    setJwt(token);
    const { id } = await decodeToken(token);
    if (id) getuser({ variables: { getUserId: id } });
  };
  const [loginUser, { loading, error, data }] = useLazyQuery(signInUser, {
    onCompleted: async (data) => {
      await addUser(data?.data?.token);
    },
  });
  const [registerrUser, { loading: rloading, error: rerror, data: rdata }] =
    useMutation(registerUser, {
      onCompleted: async (data) => {
        await addUser(data?.data?.token);
      },
    });
  const fname = useRef(null);
  const lname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isLogin) {
      await loginUser({
        variables: {
          user: {
            email: email?.current?.value,
            password: password?.current?.value,
          },
        },
      });
    } else {
      await registerrUser({
        variables: {
          newUser: {
            firstName: fname?.current?.value,
            lastName: lname?.current?.value,
            email: email?.current?.value,
            password: password?.current?.value,
          },
        },
      });
    }
  };
  if (uloading || isloading) return <StartPage />;
  return (
    <div className="w-screen h-[100dvh] flex justify-center items-center">
      <form className="p-8 bg-slate-400 flex flex-col gap-4 w-[500px]">
        <h1 className="text-center text-3xl font-semibold text-green-700">
          {isLogin ? "Login" : "Register"}
        </h1>
        {!isLogin && (
          <input
            className="px-4 py-2 appearance-none outline-none"
            ref={fname}
            name="fname"
            type="text"
            placeholder="first name"
          />
        )}
        {!isLogin && (
          <input
            className="px-4 py-2 appearance-none outline-none"
            ref={lname}
            name="lname"
            type="text"
            placeholder="enter last name"
            required
          />
        )}
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
        {isLogin && error && <p className="text-red-800">{error.message}</p>}
        {!isLogin && rerror && <p className="text-red-800">{rerror.message}</p>}
        <h1 className="text-red-800">{valError}</h1>
        <button className="px-4 py-2 bg-green-800" onClick={handleLogin}>
          {loading || rloading ? "Loading..." : isLogin ? "Login" : "Register"}
        </button>
        {!isLogin && (
          <h1>
            Already User?{" "}
            <span className="text-blue-700" onClick={() => setIsLogin(true)}>
              Login
            </span>
          </h1>
        )}
        {isLogin && (
          <h1>
            New to Chat-Here?{" "}
            <span className="text-blue-700" onClick={() => setIsLogin(false)}>
              Register
            </span>
          </h1>
        )}
      </form>
    </div>
  );
};

export default Login;
