// pages/services.tsx
import { FC } from 'react';
import '@/styles/style.css';  // Import the CSS file

const services = [
  { id: 1, title: 'Web Development', description: 'Build responsive and modern websites.', icon: '💻' },
  { id: 2, title: 'App Development', description: 'Create mobile apps for Android and iOS.', icon: '📱' },
  { id: 3, title: 'Digital Marketing', description: 'Enhance your online presence and reach more customers.', icon: '📈' },
  { id: 4, title: 'SEO Services', description: 'Optimize your website for search engines to rank higher.', icon: '🔍' },
];

const Services: FC = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p>We offer a wide range of services to help your business grow. Choose the service that best suits your needs!</p>
      <div className="services-cards">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">
              <i>{service.icon}</i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
