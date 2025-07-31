import "./Home.css";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'motion/react'
const Home = () => {
  const attributeList = ['Software Engineer', 'Chelsea Fan', 'Pro-fooseballer', 'Climate Enthusiast'];

  function copyEmail() {
    const email = "scala.luca28@gmail.com";
    navigator.clipboard.writeText(email).then(() => { 
                                            let link = document.getElementById("email");
                                            link.innerText = "Copied!";
                                            link.style.color = "#fdc1f9";
                                            setTimeout(() => {
                                              link.innerText = "Email"; 
                                              link.style.color = "#761ab2";
                                            }, 2000);
    })
  } 

  return (
    <>
      <motion.div className="left-box" initial={{width: 0, height: 0, opacity: 0}} animate={{ width: "40%", height: "auto", opacity: 1}} transition={{ duration: 1, ease: "easeInOut"}}>
        <motion.h1 style={{color: '#FE7DDA'}} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.5 }}>LUCA</motion.h1>
        <motion.h1 style={{color: '#FE7DDA'}} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3, duration: 0.5}}>SCALA</motion.h1>
        <motion.span style={{backgroundColor: '#FE7DDA', color: '#761ab2', float: 'right'}} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.5 }}>
          <Typewriter
            words={attributeList}
            cursor
            cursorStyle='_'
            loop={false}
            delaySpeed={2500}
            />
        </motion.span>
      </motion.div>
      <div className="right-box">
        <h1 style={{color: '#FE7DDA', textAlign: 'center'}}>Contacts</h1>
        <div className="contact-list">
          <a href="https://github.com/lucascala28" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/lscala26/" target="_blank">LinkedIn</a>
          <a href="#" id="email" onClick={copyEmail}>Email</a>
          <a href="https://stevens.joinhandshake.com/profiles/f5bwbq" target="_blank">Handshake</a>
        </div>
      </div>
    </>
  );
};

export default Home;
