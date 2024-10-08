import { useContext, useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext); 
    const [registerError, setRegisterError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const handleRegister = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        setRegisterError('');
        setSuccess('');

        // Validate password strength
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case character.');
            return;
        } else if (!/[a-z]/.test(password)) {
            setRegisterError('Your password should have at least one lower case character.');
            return;
        } else if (!/[!@#$%^&*()_+=[\]{};':"\\|,.<>/?]+/.test(password)) {
            setRegisterError('Your password should have at least one special character.');
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess('User Created Successfully.');
                toast.success('User Created Successfully.');

                // Update user profile with display name and photo URL
                updateProfile(loggedUser, {
                    displayName: name,
                    photoURL: photo,
                }).then(() => {
                    // Prepare user information for storing in database
                    const userInfo: { name: string; email: string; role: string } = { name: name, email: email, role:"user" };
                    
                    // Post user information to the backend
                    axiosPublic.post('/users', userInfo)
                        .then(res => {
                            if (res.data.insertedId) {
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "User created successfully",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/');
                            }
                        });
                }).catch(error => {
                    console.error('Error updating profile:', error);
                    setRegisterError('Failed to update profile.');
                });
            })
            .catch(error => {
                console.error('Error creating user:', error);
                setRegisterError(error.message);
            });
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
            <Helmet>
                <title>Register</title>
            </Helmet>

            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://i.postimg.cc/5NpqTvfk/1364889.png')" }}></div>
            <div className="relative w-full max-w-md p-8 bg-transparent shadow-md rounded-lg mt-20">
                <h1 className="text-xl md:text-5xl font-bold text-center text-green-600 mb-6 animate__animated animate__fadeInDown">
                    Register <span className="text-orange-500">Here !</span>
                </h1>

                <form onSubmit={handleRegister}>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-bold md:text-xl">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-bordered w-full" required />
                    </div>

                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-bold md:text-xl">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full" required />
                    </div>

                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-bold md:text-xl">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full" required />
                    </div>

                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-bold md:text-xl">Password</span>
                        </label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" className="input input-bordered w-full" required />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                <span onClick={() => setShowPassword(!showPassword)} className="cursor-pointer">
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn w-full bg-green-400 hover:bg-orange-500 text-white">
                        Register
                    </button>
                </form>

                {/* Display error messages */}
                {registerError && (
                    <p className="text-red-500 text-center mt-4">{registerError}</p>
                )}

                {/* Display success message */}
                {success && (
                    <p className="text-green-500 text-center mt-4">{success}</p>
                )}

                {/* Links to login or go home */}
                <div className="mt-4 text-center">
                    <p>
                        Already have an account? <Link to="/login" className="text-green-600 font-bold">Login</Link>
                    </p>
                </div>

                <div className="mt-2 text-center">
                    <p>
                        Go back to <Link to="/" className="text-green-500 font-bold">Home</Link>
                    </p>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Register;
