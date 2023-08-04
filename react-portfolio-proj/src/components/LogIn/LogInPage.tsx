import { useNavigate } from 'react-router-dom';
import egislogo from './egislogo.png'
import { useState } from 'react';

interface LogInPageProps{
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const LogInPage: React.FC<LogInPageProps> = ({setIsLoggedIn}) => {
    const [email, setEmail] = useState(String);
    const [password, setPassword] = useState(String)
    const navigate = useNavigate();

    const handleLogin = () => {
        if (email === 'karl@123' && password === '123') {
            setIsLoggedIn(true);
            navigate('/main');
        } else {
            alert('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className="login">
            <form>
                <img src={egislogo} style={{paddingBottom: '0', paddingTop:'0'}} alt="EGIS Logo"/>
                <div className="mb-3 ">
                    <div  className="form-label" style={{fontWeight:"bold", fontSize:"30px"}}>Sign in</div>
                    <div  className="form-text" style={{paddingBottom: '15%'}}>to continue to EGIS Portal</div>
                    <div className={`input-container ${email ? 'filled' : ''}`} >
                        <input type="email" id="inputField" required onChange={(e) => setEmail(e.target.value)} value={email}/>
                        <label htmlFor="inputField" >Company Email</label>
                    </div>
                </div>
                <div className="mb-3">
                    <div className="input-container">
                        <input type="password" id="inputField" required onChange={(e) => setPassword(e.target.value)}/>
                        <label htmlFor="inputField" >Password</label>
                    </div>
                </div>
                
                <button 
                type="submit" 
                onClick={handleLogin} 
                className="btn btn-primary" 
                style={{width: '150px', backgroundColor: "#134611", border: "solid 1px #94BB31"}} >Submit</button>
            </form> 
        </div>
    )

}

export default LogInPage;