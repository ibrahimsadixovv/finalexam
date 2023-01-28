
import './App.scss';
import Navbar from '../Components/Navbar';
import Cards from './Cards';
import Footer from '../Components/Footer';
import {Helmet} from "react-helmet";
function App() {
  return (
    <div className="App">
       <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <Navbar/>
        <section className='main'>

<div className='bgc'></div>

<div className='bgcSecond'>

<div className='left'>

<h1>Push Your Life
To a New Level</h1>
<p>Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor turpis mattis</p>
<div className='leftBottom'>

  <button>Learn More</button>
  <p>Meet Me</p>
</div>



</div>

</div>

        </section>


        <section className='cardsPage'>

      
      <div className='cardText'>
      <h1>How Can I Help You</h1>
    <p>We can discuss your problems</p>
    </div>

<Cards/>


        </section>


        <section className='aboutMe'>

<div className='leftAbout'>

<h1></h1>
<p></p>

</div>

<div className='rightAbout'>



</div>

        </section>


<section className='numbers'>



<div className='number'>
<h2>140+</h2>
<p>Happy Clients</p>
</div>

<div className='number'>
<h2>

280+</h2>
<p>Cases Done</p>
</div>

<div className='number'>
<h2>

24+</h2>
<p>Years Experience</p>
</div>

<div className='number'>
<h2>18</h2>
<p>Branches Worldwide</p>
</div>





</section>



<section className='courses'>
  

<div className='courseCard'>
  <img src="http://www.themestarz.net/html/lifecoach/assets/img/img-girl-field.jpg"></img>
  <p>10.05.2018</p>
  <h1>Become a Whole New Person</h1>
  <p>Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor</p>
  <button> Join Course </button>
</div>

<div className='courseCard'>
  <img src="http://www.themestarz.net/html/lifecoach/assets/img/img-girl-smiling.jpg"></img>
  <p>18.05.2018</p>
  <h1>Learn Easy How To Learn Easy</h1>
  <p>Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor

</p>
  <button> Join Course </button>
</div>

<div className='courseCard'>
  <img src="http://www.themestarz.net/html/lifecoach/assets/img/img-family.jpg"></img>
  <p>18.05.2018</p>
  <h1>How To Be a Better Parent</h1>
  <p>Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor</p>
  <button> Join Course </button>
</div>




</section>



<section className='video'>
  


</section>


<section className='webinar'>

  <h1>Online Webinars</h1>
  <div className='webinarCards'>
  
<div className='webinarCard'>
  <img src="http://www.themestarz.net/html/lifecoach/assets/img/img-success.jpg"></img>
  <h1>Short Path To Successful Life</h1>
  <p>14.08.2018</p>
  <button className='webinarBtn'> Join Webinar </button>
</div>

<div className='webinarCard'>
  <img src="http://www.themestarz.net/html/lifecoach/assets/img/img-boss.jpg"></img>
  <h1>Learn Easy How To Learn Easy</h1>
  <p>Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor

</p>
  <button className='webinarBtn'>  Join Webinar </button>
</div>

<div className='webinarCard'>
  <img src="http://www.themestarz.net/html/lifecoach/assets/img/img-meeting.jpg"></img>
  <h1>How To Be a Better Parent</h1>
  <p>Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor</p>
  <button className='webinarBtn'>  Join Webinar </button>
</div>

<div className='webinarCard'>
  <img src="http://www.themestarz.net/html/lifecoach/assets/img/img-stucked.jpg"></img>
  <h1>How To Be a Better Parent</h1>
  <p>Morbi et nisl a sapien malesuada scelerisque. Suspendisse tempor</p>
  <button className='webinarBtn'> Join Webinar </button>
</div>
</div>

</section>

<section className='buy'>

  <div className='brends'>

<img src="http://www.themestarz.net/html/lifecoach/assets/img/logo-01.png"/>

<img src="http://www.themestarz.net/html/lifecoach/assets/img/logo-02.png"/>

<img src="http://www.themestarz.net/html/lifecoach/assets/img/logo-03.png"/>

<img src="http://www.themestarz.net/html/lifecoach/assets/img/logo-04.png"/>

<img src="http://www.themestarz.net/html/lifecoach/assets/img/logo-05.png"/>

  </div>

  <div className='lifeCoach'>

<h1>
Buy The LifeCoach Now!
</h1>

<button>Buy Now!</button>
  </div>
  
</section>









<Footer/>
    </div>
  );
}

export default App;
