import waitinggif from "../assets/waiting.gif"

const WaitingModal = () => {
    return (
        <dialog id="waitingmodal" className="modal rounded-[40px] bg-[rgba(0, 0, 0, 0.5)]">
            <div className="modal-box rounded-[30px] w-fit flex justify-center items-center">
                <img src={waitinggif} alt="waiting" className="w-[100px] h-auto" />              
            </div>
        </dialog>
    )
}

export default WaitingModal