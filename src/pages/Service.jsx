import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Service.css";

function Service() {
  const services = [
    {
      title: "UI/UX Design",
      items: [
        "Landing Pages",
        "User Flow",
        "Wireframing",
        "Prototyping",
        "Mobile App Design",
      ],
    },
    {
      title: "Development",
      items: [
        "HTML/CSS",
        "JavaScript",
        "Animation",
        "WordPress",
        "React",
      ],
    },
    {
      title: "Illustration",
      items: [
        "Character Design",
        "Icon Set",
        "Illustration Guide",
        "Illustration Set",
        "Motion Graphics",
      ],
    },
    {
      title: "SEO Marketing",
      items: [
        "White Hat SEO",
        "Black Hat SEO",
        "Gray Hat SEO",
        "Negative SEO",
        "On-Page SEO",
      ],
    },
    {
      title: "Data Analysis",
      items: [
        "Diagnostic Analysis",
        "Predictive Analysis",
        "Prescriptive Analysis",
        "Risk Assessment",
        "Sales Forecasting",
      ],
    },
    {
      title: "Brand Identity",
      items: [
        "Brand Architecture",
        "Brand Authenticity",
        "Brand Awareness",
        "Brand Management",
        "Brand Metrics",
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <section className="services">
        <div className="service-header">
          <h1>Services</h1>
          <p>Service | Service List</p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>

              <ul>
                {service.items.map((item, i) => (
                  <li key={i}>› {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Service;