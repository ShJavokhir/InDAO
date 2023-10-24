import axios from "axios"
import { useState } from "react"
import logorounded from "../../src/assets/logorounded.png"
import QrModal from "../components/qrmodal"

const IssueDegree = () => {

    const [addid, setAppId] = useState()
    const [appkey, setAppKey] = useState()
    const [vcid, setVcId] = useState()
    const [did, setDid] = useState()

    const [imageSrc, setImageSrc] = useState('');

    const [univerName, setUniverName] = useState()
    const [studentName, setStudentName] = useState()
    const [degreeName, setDegreeName] = useState('')
    const [issueDate, setIssueDate] = useState('')
    const [issueBy, setIssueBy] = useState('')

    const [loading, setLoading] = useState(false)

    const [isGraduated, setGraduated] = useState(true)

    const [isError, setError] = useState(false)

    const  fetchData = async () => {
        
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${appkey}`,
            "appId": addid
          }

        if (addid && appkey && vcid && email && year && did) {

            setLoading(true)

            const url = "https://proxy.indao.io/v1/vc/issue"
            // const url = "http://localhost:3000/v1/vc/issue"
            try{
                const result = await axios.post(url, {
                    "vcId": vcid,
                    "fields": {
                        "isGraduated": isGraduated,
                        "graduationYear": year
                    },
                    "targetDid": did
            }, {
                responseType: 'arraybuffer', // to receive the response as a Blob
                headers: headers
            });

            if(result.status === 200){

                const blob = new Blob([result.data], { type: 'image/png' });
                const imageUrl = URL.createObjectURL(blob);
                setImageSrc(imageUrl);
            }

            } catch(err){
                console.error(err);
            }
            
            document.getElementById('qrcodemodal').showModal()

            setLoading(false)

        } else {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);
        }
    }

    return (
        <div className="min-h-screen app flex justify-center items-center" >
            {loading && <div className="absolute w-full h-full flex justify-center items-center">
                <span className="loading text-[#008AE4] loading-spinner loading-lg"></span>
            </div>}
            <div className="bg-[#FFFFFF] py-[50px] px-[20px] lg:px-[80px] lg:rounded-[40px] shadow-xl" >
                <div className="flex justify-center flex-col items-center" >
                    <img src={logorounded} alt="logo" className="w-[120px] lg:w-[180px]" />
                    <h2 className="text-[#006BFF] hidden lg:block text-[20px] font-[700] mt-[30px]">Issuing VC to specific student</h2>
                    <div className="mt-[30px]">
                        <div className="flex justify-around items-center flex-col lg:flex-row gap-[25px] lg:gap-[50px]" >
                            <div>
                                <p className="text-[12px] font-[500]">AppId</p>
                                <input value={addid} id="a" onChange={e => setAppId(e.target.value)} type="text" placeholder="AppId" className="text-[16px] mt-[8px] input_shadow input w-[320px] max-w-[320px]" />
                            </div>
                            <div>
                                <p className="text-[12px] font-[500]">ApiKey</p>
                                <input value={appkey} id="b" onChange={e => setAppKey(e.target.value)} type="text" placeholder="" className="text-[16px] mt-[8px] input_shadow input w-[320px] max-w-[320px]" />
                            </div>
                        </div>
                        <div className="flex justify-around items-center flex-col lg:flex-row gap-[25px] lg:gap-[50px] mt-[20px]" >
                            <div>
                                <p className="text-[12px] font-[500]">VC id</p>
                                <input value={vcid} id="c" onChange={e => setVcId(e.target.value)} type="text" placeholder="VC id" className="text-[16px] mt-[8px] input_shadow input w-[320px] max-w-[320px]" />
                                <div className="mt-[6px] flex items-center gap-[6px]" >
                                    <i class="fa-solid fa-circle-info text-xs text-gray-600"></i>
                                    <p className="tex-[14px] font-[300]">VC id</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-[12px] font-[500]">did</p>
                                <input value={did} name='did' onChange={e => setDid(e.target.value)} type="text" placeholder="" className="text-[16px] mt-[8px] input_shadow input w-[320px] max-w-[320px]" />
                                <div className="mt-[6px] flex items-center gap-[6px]" >
                                    <i class="fa-solid fa-circle-info text-xs text-gray-600"></i>
                                    <p className="tex-[14px] font-[300]">Student’s did</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-around items-center flex-col lg:flex-row gap-[25px] lg:gap-[50px] mt-[20px]" >
                            <div>
                                <p className="text-[12px] font-[500]">University Name</p>
                                <input value={univerName} id="c" onChange={e => setUniverName(e.target.value)} type="text" placeholder="University Name..." className="text-[16px] mt-[8px] input_shadow input w-[320px] max-w-[320px]" />
                            </div>
                            <div>
                                <p className="text-[12px] font-[500]">Student Name</p>
                                <input value={studentName} name='did' onChange={e => setStudentName(e.target.value)} type="text" placeholder="Student Name..." className="text-[16px] mt-[8px] input_shadow input w-[320px] max-w-[320px]" />
                            </div>
                        </div>
                        <div className="flex justify-around items-center flex-col lg:flex-row gap-[25px] lg:gap-[50px] mt-[20px]" >
                            <div>
                                <p className="text-[12px] font-[500]">Degree Name</p>
                                <input value={degreeName} id="c" onChange={e => setDegreeName(e.target.value)} type="text" placeholder="Degree Name..." className="text-[16px] mt-[8px] input_shadow input w-[320px] max-w-[320px]" />
                            </div>
                            <div>
                                <p className="text-[12px] font-[500]">Issue Date</p>
                                <input value={issueDate} name='did' onChange={e => setIssueDate(e.target.value)} placeholder="Issue Date..." className="text-[16px] mt-[8px] input_shadow input w-[320px] max-w-[320px]" type="date" />
                            </div>
                        </div>
                        <div className="flex justify-around items-center flex-col lg:flex-row gap-[25px] lg:gap-[50px] mt-[20px]" >
                            <div>
                                <p className="text-[12px] font-[500]">Issue By</p>
                                <input value={issueBy} id="c" onChange={e => setIssueBy(e.target.value)} type="text" placeholder="Issue By..." className="text-[16px] mt-[8px] input_shadow input w-[320px] max-w-[320px]" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-[40px] flex justify-end w-full">
                        <div className="flex items-center gap-[10px] lg:gap-[50px]">
                            <button className="hover:bg-[#C90F1B] btn rounded-[8px] py-[16px] px-[24px] h-auto bg-[#ED0131] text-white text-[14px] lg:text-[16px] font-[600]"><i class="fa-solid fa-circle-xmark"></i> Clear</button>
                            <button onClick={fetchData} className="hover:bg-[#005BDE] btn rounded-[8px] py-[16px] px-[24px] h-auto bg-[#006BFF] text-white text-[14px] lg:text-[16px] font-[600]">Issue credential <i class="ml-1 fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>

                    <QrModal qr_img={imageSrc} />

                </div>
            </div>

            {isError && <div className="toast toast-bottom toast-end">
                <div className="animate-bounce duration-75 alert alert-error outline-none shadow-xl rounded-xl bg-[#ED0131] px-10">
                    <span className="text-white font-[600]">Fill all inputs!</span>
                </div>
            </div>}

        </div>
    )
}

export default IssueDegree