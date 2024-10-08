import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, useContext, FormEvent } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

import useAxiosPublic from '../../hooks/useAxiosPublic';
import { AuthContext } from "../../providers/AuthProvider";
import useAuth from "../../hooks/useAuth";


const Login = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { googleSignIn } = useAuth();
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const from = location.state?.from?.pathname || "/";

    // Typing the form event
    const handleLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                Swal.fire({
                    title: "User Login Successful.",
                    showClass: { popup: `animate__animated animate__fadeInUp animate__faster` },
                    hideClass: { popup: `animate__animated animate__fadeOutDown animate__faster` }
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                toast.error('Invalid Email/Password');
            });
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    role: "user"
                }
                axiosPublic.post('/users', userInfo)
                    .then(() => {
                        navigate('/');
                    });
            });
    };

    return (
        // <div className="hero min-h-screen bg-base-200 bg-[url('https://i.postimg.cc/Y075n05X/1000-F-668433624-HGKul-Uw-Qjae-LV8-Xay-QYy6-F3-RCVQff-TGv.jpg')] animate__animated animate__slideInLeft animate__delay-1s">
        <div className="hero min-h-screen bg-base-200 bg-[url('https://i.postimg.cc/Jz5w9psC/thumb-1920-1364887.png')] animate__animated animate__slideInLeft animate__delay-1s">
            <Helmet>
                <title>Login</title>
            </Helmet>

            <div className="hero-content flex-col">
                <div className="text-center">
                    {/* <h1 className="text-3xl md:text-5xl font-bold text-black mt-14 mb-4 animate__animated animate__fadeInDown"> */}
                    <h1 className="text-3xl md:text-5xl font-bold mt-14 mb-4 animate__animated animate__fadeInDown">
                        <span className="text-green-600">Login</span> <span className="text-orange-600"> now!</span>
                    </h1>

                    <div className="card bg-transparent w-full lg:w-[600px] shadow-2xl bg-base-100 p-10 animate__animated animate__slideInLeft">
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold md:text-xl">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold md:text-xl ">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                    <span
                                        className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                                <label className="label">
                                    <Link to="#" className="label-text-alt link link-hover text-orange-500">Forgot password?</Link>
                                </label>
                            </div>

                            <button type="submit" className="btn bg-green-400 hover:bg-orange-500 w-full">
                                Login
                            </button>
                        </form>

                        <div className="divider">OR</div>

                        <button onClick={handleGoogleSignIn} className="btn w-full bg-green-400 border-orange-500 hover:bg-orange-500 flex items-center justify-center">
                            <FcGoogle className="mr-2 md:text-xl" /> Continue with Google
                        </button>

                        <p className="text-center mt-4">
                            New to this site?{' '}
                            <Link to="/register" className="text-orange-600 font-bold">Register</Link>
                        </p>

                        <p className="text-center">
                            Go back to{' '}
                            <Link to="/" className="text-orange-500 font-bold">Home</Link>
                        </p>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Login;
