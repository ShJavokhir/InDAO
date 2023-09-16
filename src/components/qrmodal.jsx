import QRCode from "qrcode.react";
import WaitingModal from "./waitingmodal";

const QrModal = () => {
    return (
        <dialog id="qrcodemodal" className="modal rounded-[40px] bg-[rgba(0, 0, 0, 0.5)]">
            <div className="modal-box rounded-[30px] ">
                <div className="flex justify-center items-center">
                    <div className="flex w-fit justify-center items-center rounded-[40px] p-[30px] border border-[#CCCCCC]">
                        <QRCode value="https://www.t.me/itkncoder" style={{ width: "220px", height: "220px" }} width={250} height={250} />
                    </div>
                </div>
                <p className="font-[600] text-[14px] lg:text-[16px] text-center mt-[30px]">Credential has been issued for specified did number.</p>
                <p className="font-[600] text-[14px] lg:text-[16px] text-center mt-[8px]">Please claim it in Polygon ID app with following QR code</p>
                <div className="mt-[50px] flex items-center gap-[10px] lg:gap-[25px] justify-end">
                    <button onClick={() => document.getElementById('qrcodemodal').close()} className="hover:bg-[#C90F1B] btn rounded-[8px] py-[16px] px-[24px] h-auto bg-[#ED0131] text-white text-[14px] lg:text-[16px] font-[600]"><i class="fa-solid fa-circle-xmark"></i> Back</button>
                    <button onClick={() => {
                        document.getElementById('qrcodemodal').close()
                        setTimeout(() => {
                            document.getElementById('waitingmodal').showModal()
                        }, 500);
                    }} className="hover:bg-[#005BDE] btn rounded-[8px] py-[16px] px-[24px] h-auto bg-[#006BFF] text-white text-[14px] lg:text-[16px] font-[600]">Download <i class="fa-solid fa-file-arrow-down ml-1"></i></button>
                </div>                
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
            <WaitingModal/>
        </dialog>
    )
}

export default QrModal