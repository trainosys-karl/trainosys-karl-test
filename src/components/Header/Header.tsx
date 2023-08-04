import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import egislogo from './egislogo.png';
import { useState } from 'react';



const Header: React.FC = () => {

    const[iconInitial] = useState('KH')
    
    return(
    <>
        <div className='hdr'>
            <div>
                <img src={egislogo}/>
            </div>
            <div className='icon-container'>
                <span className='icon-text' style={{marginLeft:'16px', paddingTop: '0px', marginTop: '42px'}}>{iconInitial}</span>
                <span className='icon-icon'>
                    <FontAwesomeIcon
                    icon={"circle"}
                    style={{height:'48px', width: '80px', marginTop: '31px', paddingRight: '10px', color:'#134611'}}/> 
                </span> 
            </div>
        </div>
    </>
        
        

    )

}
export default Header;