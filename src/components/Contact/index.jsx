import "./style.css";

const About = () => {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d486.1226123224157!2d77.65057442516591!3d12.908949144390302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1619973346880!5m2!1sen!2sin"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>

      <h4>Phone</h4>
      <p>+918299147230</p>

      <h4>Email</h4>
      <p>vaibhavhaswani@gmail.com</p>

      <h4>Address</h4>
      <p>25th Main ,Bangalore , India</p>
    </div>
  );
};

export default About;