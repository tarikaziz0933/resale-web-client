import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FiEyeOff, FiEye } from "react-icons/fi";
// import { AuthContext } from "../../../src/contexts/AuthProvider";
// import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";

const Registration = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const { loading, auth, createUser, googleSignIn, githubSignIn } =
        useContext(AuthContext);
    const navigate = useNavigate();

    if (loading) {
        return (
            <div className="text-center mt-12">
                {/* <Spinner aria-label="Extra large  Center-aligned spinner example" /> */}
            </div>
        );
    }

    const handleRegisterForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.username.value;
        const email = form.email.value;
        const userPhotoURL = form.photo.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password !== confirm) {
            toast.error("password didn't match!");
            return;
        }

        createUser(email, password)
            .then((result) => {
                updateProfile(auth.currentUser, {
                    displayName: `${name}`,
                    photoURL: `${userPhotoURL}`,
                })
                    .then(() => { })
                    .catch((error) => {
                        toast.error(`${error.message}`);
                    });
                navigate("/");
            })
            .catch((error) => {
                toast.error(`${error.message}`);
            });
    };
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;

                const currentUser = {
                    email: user.email,
                };
                // get jwt token
                fetch("http://localhost:5000/user", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(currentUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        localStorage.setItem("resturant-token", data.token);
                        navigate('/');
                    });

                toast.success("SignIn with Google Successful!");
                navigate('/');
            })
            .catch((error) => {
                toast.error(`${error.message}`);
                navigate("/");
            });
    };
    const handleGithubSignIn = () => {
        githubSignIn()
            .then((result) => {
                const user = result.user;
                const currentUser = {
                    email: user.email,
                };
                // get jwt token
                fetch("https://resturant-site-server.vercel.app/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(currentUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        localStorage.setItem("resturant-token", data.token);
                        navigate('/');
                    });
                toast.success("SignIn with Github Successful!");
                navigate('/');
            })
            .catch((error) => {
                toast.error(`${error.message}`);
            });
    };

    return (
        <div className="mt-8 w-5/6 mx-auto max-w-md p-8 space-y-3   bg-slate-700   text-gray-100">
            <h1 className="text-2xl font-bold text-center">Sign up</h1>
            <form
                onSubmit={handleRegisterForm}
                className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block   text-gray-400">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
                        required
                    />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block   text-gray-400">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
                        required
                    />
                </div>

                <div className="space-y-1 text-sm">
                    <label htmlFor="photo" className="block   text-gray-400">
                        Profile photo URL
                    </label>
                    <input
                        type="text"
                        name="photo"
                        id="photo"
                        placeholder="profile photo url"
                        className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
                        required
                    />
                </div>

                <div className="space-y-1 text-sm relative">
                    <label htmlFor="password" className="block   text-gray-400">
                        Password
                    </label>
                    <input
                        type={`${show ? "text" : "password"}`}
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
                        required
                    />
                    <span
                        className="absolute right-4 top-1/2"
                        onClick={() => {
                            setShow(!show);
                        }}
                    >
                        {show ? (
                            <FiEye className="faFac2" />
                        ) : (
                            <FiEyeOff className="faFac1" />
                        )}
                    </span>
                </div>
                <div className="space-y-1 text-sm relative">
                    <label htmlFor="confirm" className="block   text-gray-400">
                        Confirm Password
                    </label>
                    <input
                        type={`${show2 ? "text" : "password"}`}
                        name="confirm"
                        id="confirm"
                        placeholder="confirm password"
                        className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
                        required
                    />
                    <span
                        className="absolute right-4 top-1/2"
                        onClick={() => {
                            setShow2(!show2);
                        }}
                    >
                        {show2 ? (
                            <FiEye className="faFac2" />
                        ) : (
                            <FiEyeOff className="faFac1" />
                        )}
                    </span>
                </div>
                <button className="block w-full font-semibold p-3 text-center  text-gray-900   bg-blue-300">
                    Sign up
                </button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16   bg-gray-400"></div>
                <p className="px-3 text-sm   text-gray-400">
                    Signup with social accounts
                </p>
                <div className="flex-1 h-px sm:w-16   bg-gray-400"></div>
            </div>
            <div className="flex justify-between space-x-10">
                <h2
                    onClick={handleGoogleSignIn}
                    className="bg-red-500 text-2xl w-full  flex justify-center py-2 cursor-pointer"
                >
                    <FaGoogle />
                </h2>
                <h2
                    onClick={handleGithubSignIn}
                    className="bg-black text-2xl w-full  flex justify-center py-2 cursor-pointer"
                >
                    <FaGithub />
                </h2>
            </div>
            <p className="text-xs text-center sm:px-6   text-gray-400">
                Already have an account?
                <Link to="/login" className="ml-2 underline   text-gray-100">
                    Sign in
                </Link>
            </p>
        </div>
    );
};

export default Registration;