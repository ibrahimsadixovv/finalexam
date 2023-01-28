import React from 'react'
import './footer.scss';
function Footer() {
  return (
    <div className='footer'>
         <div className='footerMain'>

    <div className='message'>

<div className='footerLeft'>
    <h2>Contact Us</h2>
    <p>2590 Rocky Road Philadelphia, PA 19108
</p>
    <div className='email'>
        <h2>Email:</h2>
        <p>office@example.com</p>
    </div>
    <div className='phone'>
    <h2>Phone:</h2>
        <p className='phone'>+1 215-606-0391</p>
    </div>
    <div className='skype'>
        <h2>Skype:</h2>
        <p>LifeCoach</p>
    </div>
</div>


<div className='footerRight'>
    
<h2>Contact Form</h2>
<div className='nameInp'>
<input placeholder='Your Name'></input>

<input placeholder='Your Email'></input>
</div>

<div className='messageInp'>
<input placeholder='Your Message'></input>
</div>
<div className='buttonFooter'>
<button> Send a Message</button>
</div>



</div>
    </div>



         </div>
         
        <div className='divImg'>

        </div>
        <div className='divBgc'>

        </div>
       

      

    </div>
  )
}

export default Footer