import { useContext, useEffect, useRef, useState } from "react";
import { getUser, signInUser } from "../../../graphql/quaries";
import { useLazyQuery, useMutation } from "@apollo/client";
import { UserContext } from "../../context";
import { decodeToken, getJwt, setJwt } from "../../services/local";
import { registerUser } from "../../../graphql/mutations";
import { CgRename } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlinePassword } from "react-icons/md";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [isLogin, setIsLogin] = useState(true);

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
  return (
    <div className="w-screen min-h-[100dvh] flex justify-center items-center bg-[#d6d6e4] p-5">
      {/* <img src="/images/login.png" className="w-1/2 hidden md:block p-10" /> */}

      <form className="p-10 bg-white flex flex-col gap-3 w-4/5 md:w-[500px] overflow-y-scroll">
        <h1 className="text-center text-3xl font-bold text-blue-600 pt-5">
          {isLogin ? "Login" : "Register"}
        </h1>
        <h2 className="text-center text-gray-400">
          You and your friends always connected
        </h2>
        {!isLogin && (
          <div>
            <lablel className="text-sm translate-y-3 text-gray-400">
              First Name
            </lablel>
            <div className="flex items-center">
              <CgRename className="text-gray-400" />
              <input
                className="w-full px-4 py-2 appearance-none outline-none border-b-2 focus:border-blue-600 "
                ref={fname}
                name="fname"
                type="text"
                placeholder="first name"
              />
            </div>
          </div>
        )}
        {!isLogin && (
          <div className="w-full">
            <lablel className="text-sm translate-y-3 text-gray-400">
              Last Name
            </lablel>
            <div className="flex items-center">
              <CgRename className="text-gray-400" />
              <input
                className="w-full px-4 py-2 appearance-none outline-none border-b-2 focus:border-blue-600"
                ref={lname}
                name="lname"
                type="text"
                placeholder="enter last name"
                required
              />
            </div>
          </div>
        )}
        <div className="w-full">
          <lablel className="text-sm translate-y-3 text-gray-400">Email</lablel>
          <div className="flex items-center">
            <AiOutlineUser className="text-gray-400" />
            <input
              className="w-full px-4 py-2 appearance-none outline-none border-b-2 focus:border-blue-600"
              ref={email}
              name="email"
              type="email"
              placeholder="enter email"
            />
          </div>
        </div>
        <div className="w-full">
          <lablel className="text-sm translate-y-3 text-gray-400">
            Password
          </lablel>
          <div className="w-full flex items-center">
            <MdOutlinePassword className="text-gray-400" />
            <input
              className="w-full px-4 py-2 appearance-none outline-none border-b-2 focus:border-blue-600"
              ref={password}
              name="password"
              type="password"
              placeholder="enter password"
            />
          </div>
        </div>
        {isLogin && error && <p className="text-red-800">{error.message}</p>}
        {!isLogin && rerror && <p className="text-red-800">{rerror.message}</p>}
        <h1 className="text-red-800">{valError}</h1>
        <button
          className="px-4 py-3 rounded-full bg-blue-600 text-white font-semibold "
          onClick={handleLogin}
        >
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
