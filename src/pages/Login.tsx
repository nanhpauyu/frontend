import {  Navigate } from 'react-router-dom';
import { isLoggedIn } from '../data/data'


const Login = () => {

    if (isLoggedIn) {
        return <Navigate to="/discovery" replace />;
    }
    const onLoginClick = () =>{
        alert("login")
    }
    return (

        < div className="p-8 space-y-6" >
            <h1 className="text-3xl font-bold">အကောင့်ဝင်ရန်</h1>
            <div className="form-control">
                <input type="email" placeholder="အီးမေးလ်လိပ်စာ" className="input input-bordered rounded-2xl h-14"  />
            </div>
            <div className="form-control">
                <input type="password" placeholder="စကားဝှက်" className="input input-bordered rounded-2xl h-14"
                    />
            </div>
            <button className="btn flex-1 btn-block bg-[#2AB47D] border-none text-white h-14 rounded-2xl font-bold transition-transform active:scale-95" onClick={onLoginClick}>ဝင်ရောက်မည်</button>
            
        </div >
    );

}
export default Login;