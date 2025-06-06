import "../App.css";
import Testimonials from './testimonial';
import himg from "../assets/spiec.png";
import aboutimg from "../assets/about.jpg";
import therapy from "../assets/Therapy.jpg";
import eyetest from "../assets/eyetest.jpg";
import shop from "../assets/shop.jpg";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.jpg";
import resource1 from "../assets/resource1.jpg";
import resource2 from "../assets/resource2.jpg";
import resource3 from "../assets/resource3.jpg";
import community from "../assets/Community.jpg";
import ContactSection from "./contact";
import ClarvoFooter from "./footer";
import ClarvoFAQ from "./faq";
import ServiceCard from "./service";
const Home = () => {
    return(
        <div className="fst">
            <img src= {himg} id="hmpg"/>
            <div className="text">
            <h1>Empowering you with Smart Health Solutions</h1>
            <p>Clarvo, where clarity meets vision</p>
            </div>
            <button className="getbtn">Get started</button>
           <div className="afterhm">
  <h3>Who We Are</h3>
  
  <div className="flex-row">
    <div className="othpg content">
      <h2>About us:</h2>
      <p>
        Clarvo is an eye clinic based across Africa where we integrate technology to provide you with efficient 
        and quality optic solutions. We have been able to scale our services for the past one decade across Africa and we 
        have won multiple awards for the best smart healthcare solutions.
      </p>
      <button className="learnmore">Learn More</button>
    </div>

    <div className="othpg">
      <img src={aboutimg} className="cardimages" />
    </div>
  </div>
</div>
           <div className="afterhm">
  <h3>What We Offer</h3>
  
  <div className="flex-row">
    <div className="othpg content">
      <h2>About us:</h2>
      <p>
        Clarvo is an eye clinic based across Africa where we integrate technology to provide you with efficient 
        and quality optic solutions. We have been able to scale our services for the past one decade across Africa and we 
        have won multiple awards for the best smart healthcare solutions.
      </p>
      <button className="learnmore">Learn More</button>
    </div>

    <div className="flex-row">
  <ServiceCard
    image={eyetest}
    title="Eye Test and Checkup"
    buttonText="Book Eyetest"
    altText="Eye Test"
  />
</div>
<div className="flex-row two">
  <ServiceCard
    image={shop}
    title="Glasses and Eye Accessories"
    buttonText="Shop Now"
    altText="Shop"
  />
  <ServiceCard
    image={therapy}
    title="Therapy & Training"
    buttonText="Book Session"
    altText="Therapy"
  />
</div>
  </div>
</div>
  <div>
    <Testimonials/>
  </div>
   <section className="partners-section">
        <h2 className="partners-title">Our Trusted Partners</h2>
        <div className="partners-logos">
          <img src={partner1} alt="Partner 1" />
          <img src={partner2} alt="Partner 2" />
          <img src={partner3} alt="Partner 3" />
          <img src={partner4} alt="Partner 4" />
          <img src={partner5} alt="Partner 5" />
        </div>
      </section>
      <section className="resources-section">
        <h2 className="resources-title">Resources for Your Well-being</h2>
        <p className="resources-intro">
          At Clarvo, we care about your full wellness. Explore helpful guides and tips to support your mental, visual, and lifestyle health.
        </p>
        <div className="resources-cards">
          <div className="resource-card">
            <img src={resource3} alt="Mindful Meditation" />
            <h3>Mindful Meditation</h3>
            <p>Learn how meditation helps reduce digital eye strain and stress.</p>
            <a href="#" className="readmore-link">Read More</a>
          </div>
          <div className="resource-card">
            <img src={resource2} alt="Nutrition Tips" />
            <h3>Nutrition for Eye Health</h3>
            <p>Discover what foods promote stronger vision and eye wellness.</p>
            <a href="#" className="readmore-link">Read More</a>
          </div>
          <div className="resource-card">
            <img src={resource1} alt="Screen Break Guide" />
            <h3>Healthy Screen Time</h3>
            <p>Get smart routines to balance screen use and avoid fatigue.</p>
            <a href="#" className="readmore-link">Read More</a>
          </div>
        </div>
      </section>
      <section className="community-single">
        <h2 className="section-title">Clarvo in the Community</h2>
        <div className="community-wrapper">
          <img src={community} alt="Clarvo Community Outreach" className="community-image" />
          <div className="community-text">
            <p>
              At Clarvo, we believe in giving back. From free vision screenings in underserved areas to eye care
              awareness campaigns, our mission is to make a difference beyond clinics. Together with our partners and volunteers, we’re changing lives—one pair of eyes at a time.
            </p>
            <button className="learnmoren">Learn More</button>
          </div>
        </div>
      </section>
      <div className="flex-row fq">
        <ClarvoFAQ/>
      </div>
           <div className="afterhm third">
  <ContactSection/>
  </div>
  <ClarvoFooter/>
  
</div>
    );
};

export default Home;