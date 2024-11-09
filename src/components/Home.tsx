// pages/index.tsx
import { FC } from 'react';
import '@/styles/home.style.css';

const services = [
  { id: 1, title: 'Web Development', description: 'Build modern and responsive websites.' },
  { id: 2, title: 'UI/UX Design', description: 'Design user-friendly interfaces for your apps.' },
  { id: 3, title: 'SEO Optimization', description: 'Improve your website ranking on search engines.' },
];

const Home: FC = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Our Website</h1>
        <p>Your one-stop solution for all your digital needs.</p>
        <button className="cta-button">Get Started</button>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          We are a team of passionate professionals dedicated to helping you succeed online. Our services range from web development to digital marketing and everything in between.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
          
        ))}
      </section>
    </div>
  );
};

export default Home;
