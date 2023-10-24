import axios from "axios"
import { useState } from "react"
import logorounded from "../../src/assets/logorounded.png"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
    const [loading, setLoading] = useState(false)

    const [isError, setError] = useState(false)
    const [isNoCorrect, setNoCorrect] = useState(false)

    const loginUser = () => {
        if (email, password) {
            setLoading(true)
            axios.post("https://api.indao.io/auth/signup", {
                email: email, 
                password: password
            }).then(res => {
                if (res.data.bearerToken) {
                    localStorage.setItem("token", res.data.bearerToken)
                    navigate("/dashboard")
                    setLoading(false)
                } else {
                    setLoading(false)
                    setNoCorrect(true)
                    setTimeout(() => {
                        setNoCorrect(false)
                    }, 2500)
                }
            })
        } else {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 2500)
        }
    }

    return (
        <div className="min-h-screen app flex justify-center items-center" >
            {loading && <div className="absolute w-full h-full flex justify-center items-center">
                <span className="loading text-[#008AE4] loading-spinner loading-lg"></span>
            </div>}
            <div className="bg-[#FFFFFF] py-[50px] px-[80px] lg:px-[230px] lg:rounded-[40px] shadow-xl" >
                <div className="flex justify-center flex-col w-full items-center" >
                    <img src={logorounded} alt="logo" className="w-[125px] mt-[60px] lg:w-[125px]" />
                    <h2 className="text-[#006BFF] hidden lg:block text-[20px] font-[700] mt-[30px]">Sign In/Sign up</h2>
                    <div className="mt-[30px]">
                        <div className="flex justify-around items-center flex-col gap-[25px] lg:gap-[30px]" >
                            <div>
                                <p className="text-[12px] font-[500]">Email</p>
                                <input value={email} id="email" onChange={e => setEmail(e.target.value)} type="email" placeholder="Please enter your email" className="text-[16px] mt-[8px] input_shadow input w-[320px] max-w-[320px]" />
                            </div>
                            <div>
                                <p className="text-[12px] font-[500]">Password</p>
                                <input value={password} id="password" onChange={e => setPassword(e.target.value)} type="password" placeholder="Please enter your password" className="text-[16px] mt-[8px] input_shadow input w-[320px] max-w-[320px]" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-[60px] flex justify-center w-full">
                        <div className="flex items-center justify-center gap-[10px] w-full">
                            <button onClick={loginUser} className="hover:bg-[#005BDE] btn max-w-[320px] rounded-[8px] w-full py-[16px] px-[24px] h-auto bg-[#006BFF] text-white text-[14px] lg:text-[16px] font-[600]">Sing in <i class="ml-1 fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="mt-[60px] mb-[60px]">
                        <p className="text-[#808080] text-center">Please enter your credentials to sign in or sign up. <br />
                            If you are using platform for the first time, it will let you sign up</p>
                    </div>

                </div>
            </div>
            <p className="absolute bottom-[25px] hidden lg:block text-[#fff]" >© 2023 Indao.io | All Rights Reserved</p>

            {isError && <div className="toast toast-bottom toast-end">
                <div className="animate-bounce duration-75 alert alert-error outline-none shadow-xl rounded-xl bg-[#ED0131] px-10">
                    <span className="text-white font-[600]">Fill all inputs!</span>
                </div>
            </div>}

            {isNoCorrect && <div className="toast toast-bottom toast-end">
                <div className="animate-bounce duration-75 alert alert-error outline-none shadow-xl rounded-xl bg-[#ED0131] px-10">
                    <span className="text-white font-[600]">Password entered incorrectly!</span>
                </div>
            </div>}

        </div>
    )
}

export default Login