// pages/about.tsx
import { FC } from 'react';
import './style.css'; // Import the CSS file
import Image from 'next/image';
import img1 from "@/images/syedpic.jpg"
import img2 from "@/images/john.jpg"
import img3 from "@/images/michael.jpg"

const teamMembers = [
  { id: 1, name: 'Syed Hamza', role: 'Founder & CEO', image: img1 },
  { id: 2, name: 'Jane Smith', role: 'Lead Developer', image: img2 },
  { id: 3, name: 'Michael Brown', role: 'Designer', image: img3 },
];

const About: FC = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        We are a dynamic team of professionals passionate about delivering quality services. Our mission is
        to provide top-notch solutions to our clients while fostering a collaborative and innovative work
        environment.
      </p>
      
      <h2>Meet Our Team</h2>
      <div className="team-section">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <Image src={member.image} alt={member.name} width={250} height={250} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
