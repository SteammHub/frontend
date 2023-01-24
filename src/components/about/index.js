import React,{Fragment,useState} from 'react'
import "./style.css";
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';

const About = () => {
  const [ toggleTab, setToggleTab] = useState(1)
  const toggleState = (index) =>{
    setToggleTab(index)
  }
  return (
    <Fragment>
        <NavBar />

    <section className="about">

    <div className="row">

    <div className="column">
      <div className="about-img"></div>
    </div>

    <div className="column">

    <div className="tabs">

    <div className={toggleTab === 1 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(1)}
    >
      <h2>About Us</h2>
    </div>

    <div className={toggleTab === 2 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(2)}
    >
      <h2>Our Game</h2>
    </div>

    <div className={toggleTab === 3 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(3)}
    >
      <h2>Our Team</h2>
    </div>
      
    </div>

    <div className="tab-content">

    {/* About Content */}

    <div className={toggleTab === 1 ?"content active-content":"content"}>
      <h2>Company</h2>
      <p>At our company, we are passionate about creating immersive and engaging video games for players of all ages and skill levels. 
        We strive to push the boundaries of what is possible in the gaming industry and constantly look for new and innovative ways to
         enhance the player's experience.</p>
       <h2>Our Community</h2>
       <p>We also believe in giving back to the community and use a portion of our profits to support various charitable organizations 
        that promote education and the arts.</p>
        <p>powerd by @STEAM Hub</p>
    </div>

    {/* Skills Content */}

    <div className={toggleTab === 2 ?"content active-content":"content"}>
      <h2>We believe that</h2>
      <p> video games have the power to bring people together and create unforgettable experiences,
         and we are dedicated to delivering that kind of experience to our players. Thank you for choosing to play our
          games and we hope you enjoy them as much as we enjoyed creating them.</p>

          <h2>In addition</h2>
         <p>  to creating our own original games, we also work closely with other developers and publishers to bring their ideas to life. 
            We have a wide range of experience in developing games across multiple platforms including PC, consoles, and mobile devices.</p>

            <p>powerd by @STEAM Hub</p>

   
    </div>

       {/* Experience Content */}

    <div className={toggleTab === 3 ?"content active-content":"content"}>

    <h2>Our Team</h2>
       <p> is made up of experienced game developers, designers, and artists who are dedicated to creating high-quality and visually 
        stunning games. We have a strong commitment to our players and are constantly working to improve our games and listen to player feedback.
       </p>
        <h2>We are looking for</h2>
        <p> talented individuals to join our team and help us continue to create innovative and exciting games. 
        If you are passionate about gaming and want to be a part of our team, please visit our careers page for more information.</p>
        <p>powerd by @STEAM Hub</p>
    </div>
        
    </div>

    </div>

    </div>

    </section>
    <Footer />
    
    </Fragment>
  )
}

export default About