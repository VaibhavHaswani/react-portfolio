import "./style.css";

const About = () => {
  return (
    <div className="works">
      <h1>Experiences</h1>
      <p>Company: Flying Homingos Pvt. Ltd.</p>
      <p>Role: Machine Learning Engineer</p>
      <p>Date: 01/03/2021 - Present</p>
      <p>
      Projects : AR system to support Localization of video over a photo frame (Used various computer vision algorithms like Canny, Perspective Transform, SIFT, Flann, etc.), Research Work on Fractals and Fractal Nets to build a  pattern-based system which is faster and no more reliable on hardware resources like typical ML algorithms, System comprises of three APIs to handle and gather distributed data of different servers to a root server and build pipelines for predictive analysis on that data, System for automated Cohort Analysis.
      </p>
      <br />
      <p>Company: Qvalyval Pvt. Ltd., UK</p>
      <p>Role: Python Developer</p>
      <p>Date: 12/2020 - 02/2021 </p>
      <p>
      Projects: OCR API (Used perspective transform to reshape documents and Tesseract to extract data with LSTMs to serialize it and deployed it with Django), Trained Faster RCNN for cell phone damage detection, Web Scraping / Automation based projects as per client demands (using Scrapy, Selenium, and Beautifulsoup), Automated API to generate invoices for purchase orders and register the data to cloud.
      </p>
    </div>
  );
};

export default About;