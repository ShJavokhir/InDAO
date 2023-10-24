import { useNavigate } from "react-router-dom"

const Dashboard = () => {

    const navigate = useNavigate()

    const singOut = () => {
        if (localStorage.getItem("token")) {
            localStorage.removeItem("token")
            navigate("/login")
        }
    }

    return (
        <div>
            <button onClick={singOut} className="hover:bg-[#005BDE] btn max-w-[320px] rounded-[8px] w-full py-[16px] px-[24px] h-auto bg-[#006BFF] text-white text-[14px] lg:text-[16px] font-[600]">Sing out <i class="ml-1 fa-solid fa-arrow-right"></i></button>
        </div>
    )
}

export default Dashboard