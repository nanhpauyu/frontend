import { useNavigate } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

const MatchFoundNoti = ({ id }: { id: string }) => {

    const navigate = useNavigate();

    const handleCloseAndGoToMessages = () => {
        navigate(`/messages/${id}`);
    };

    return (
        <>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Match Found</h3>
                    <p className="py-4">ဖူးစာတွေ့ပါပြီ</p>
                    <div className="modal-action justify-center">                        
                        <button
                            className="btn btn-primary"
                            onClick={handleCloseAndGoToMessages}
                        >
                        <MessageSquare />မက်ဆေ့ပို့မည်
                        </button>
                    </div>
                </div>
            </dialog>
        </>
    )
}
export default MatchFoundNoti;