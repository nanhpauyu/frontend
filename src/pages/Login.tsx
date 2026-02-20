import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { isLoggedIn } from '../data/data'


const Login = () => {

    if (isLoggedIn) {
        return <Navigate to="/discovery" replace />;
    }
    const onLoginClick = () =>{
        alert("login")
    }
    return (

        <div className="flex flex-col items-center justify-center h-full p-6 ">

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">အကောင့်ဝင်ရန်</legend>

                <label className="label">အီးမေးလ်လိပ်စာ</label>
                <input type="email" className="input"  />

                <label className="label">စကားဝှက်</label>
                <input type="password" className="input"  />

                <button className="btn btn-neutral mt-4" onClick={onLoginClick}>ဝင်ရောက်မည်</button>
            </fieldset>

        </div>
    );

}
export default Login;