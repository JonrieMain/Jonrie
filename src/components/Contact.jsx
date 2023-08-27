
// css
import '../css/contact.css';

const Contact = () =>{



    return(
        <div className="letsTalk" id="letsTalk">


        <span className="letTalkIn">
        <h2 data-aos="fade-right" id="letsTalk">Contact</h2>
        <p data-aos="zoom-in" data-aos-duration="1000">I'm looking forward to working with you and I hope my portfolio satisfied you. If you're not yet satisfied, you can contact me to learn more about me, and if you are, I'd appreciate it if you did. The following details are how you can get in touch with me. I'll respond as quickly as I can. Thank you </p>
       
        <span>
        <i data-aos="fade-right"data-aos-delay="100" className="fa-solid fa-phone"> <span> 09702552127</span></i>
        
        <i data-aos="fade-right" data-aos-delay="300" className="fa-regular fa-envelope"> <span><a href="mailto:jonriemain@gmail.com">jonriemain@gmail.com</a></span></i>

        <i data-aos="fade-right" data-aos-delay="300" className="fa-solid fa-file cv"><a target="_blank" href="/assets/jonrieCV.pdf"> Download CV</a></i>

        <div data-aos="fade-right" data-aos-delay="300">
            <a href="https://facebook.com/JonrieMain"><i className="fa-brands fa-square-facebook"></i></a>

        <a href="https://www.instagram.com/jonrieeee/"><i className="fa-brands fa-square-instagram"></i></a>

        <a href="https://github.com/JonrieMain"><i className="fa-brands fa-square-github"></i></a>

        <a href="https://www.linkedin.com/in/jonrie-badiang-06b60a241/"><i className="fa-brands fa-linkedin"></i></a>

         <a href="https://www.tiktok.com/@jonrieee"><i className="fa-brands fa-tiktok"></i></a>
        </div>
    </span>

</span>





        {/* <!-- contact form --> */}
        <form data-aos="fade-left" className="contactForm" action="https://formsubmit.co/ad4e0ff231edc13df9d5c9beef1e68b3" method="POST">

            <h1>LET'S HAVE A TALK</h1> 
            <div> 
                <input minLength={3} maxLength={40} placeholder="Full name" name="fullName" type="text" id="fullName" aria-describedby="emailHelp" required={true} /> 
            </div>

            <div> 
               <input minLength={10} maxLength={40} placeholder="Email address" name="email" type="email" id="emailAddress" aria-describedby="emailHelp" required /> 
               </div>
            
            <div> 
                 <input minLength={3} maxLength={40} placeholder="Subject" name="subject" type="text" id="subject" aria-describedby="emailHelp" required /> </div>
            
            <div> 
                <textarea minLength={6} maxLength={50} placeholder="Message" name="message" id="messege" className="form-control" rows={9} required></textarea> 
                </div>
             
             <button id="button" type="submit">Submit</button>
        </form>





    </div>
    )

}
export default Contact;