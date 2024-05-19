import React from 'react';
import './index.css';

const MediMate = () => {
  return (
    <div>
      <header id="header">
        <div className="logo">
          <img className="logo-image" src="./assets/Medimate logo cropped.jpeg" alt="MediMate Logo" />
        </div>
        <ContactInfo
          iconSrc="./assets/phone logo.jpeg"
          altText="Phone"
          label="Phone"
          info="+91 98765 43210"
        />
        <ContactInfo
          iconSrc="./assets/email logo.png"
          altText="Email"
          label="Email"
          info="MediMate@gmail.com"
        />
        <ContactInfo
          iconSrc="./assets/location logo.png"
          altText="Address"
          label="Address"
          info="India"
        />
      </header>
      <div id="tagline">" Your Wellness, powered by data "</div>
      <nav id="links_tab">
        <NavLink href="index.html" text="Home" />
        <NavLink href="vaccination-detail.html" text="Vaccination Detail" />
        <NavLink href="medical-issues.html" text="Medical Issues" />
        <NavLink href="reports-prescription.html" text="Reports & Prescription" />
      </nav>
      <div id="content-container">
        <Sidebar />
        <main className="content">
          <img className="doctor" src="./assets/main.jpg" alt="Doctor" />
          <div className="image-container">
            <ImageWithText src="./assets/medical book to ease citizen (1).jpg" alt="First Image" />
            <ImageWithText src="./assets/health and wellness 2.1.jpg" alt="Second Image" />
            <ImageWithText src="./assets/keep records digitally safe (1).jpg" alt="Third Image" />
          </div>
          <div className="content-text-container">
            <ContentText
              title="Medical Book To Ease Citizens"
              text="A Medical Book to Ease Citizens aims to provide accessible and practical health information, empowering individuals to make informed decisions about their well-being. It covers a range of topics, from common ailments to preventive care, enhancing health literacy and promoting healthier lifestyles."
            />
            <ContentText
              title="Health and Wellness"
              text="Health and wellness encompass a holistic approach to well-being, focusing on physical, mental, and social health. It involves adopting healthy habits, managing stress, and seeking preventive care to enhance overall quality of life."
            />
            <ContentText
              title="Keep Your Records Digitally Safe"
              text="Keeping your records digitally safe involves storing sensitive medical, financial, and personal information securely. Use encrypted storage solutions, regularly update passwords, and be cautious with sharing or accessing records to protect your privacy and prevent identity theft."
            />
          </div>
        </main>
      </div>
    </div>
  );
};

const ContactInfo = ({ iconSrc, altText, label, info }) => (
  <div className="contact-info">
    <div className="icon-container">
      <img className="icon" src={iconSrc} alt={altText} />
    </div>
    <div>
      <div>{label}</div>
      <div>{info}</div>
    </div>
  </div>
);

const NavLink = ({ href, text }) => (
  <div className="btn">
    <a href={href}>{text}</a>
  </div>
);

const Sidebar = () => (
  <aside className="sidebar">
    <NotificationSection />
    <AppointmentSection />
    <div className="settings-accounts">
      <a href="#settings">Settings</a>
      <br /><br />
      <a href="#account">Account</a>
    </div>
  </aside>
);

const NotificationSection = () => (
  <div className="Notifications">
    <h2>Notifications</h2>
    <marquee width="80%" direction="up" height="80%">
      <ul>
        <li>New message from Dr. Satish</li>
        <li>New message from Dr. Anil</li>
        <li>Blood Report</li>
        <li>New Appointment Request</li>
      </ul>
    </marquee>
  </div>
);

const AppointmentSection = () => (
  <div className="Appointments">
    <h2>Appointments</h2>
    <marquee width="80%" direction="up" height="80%">
      <ul>
        <li>Appointment scheduled for June 15 at 11:00 AM</li>
        <li>Appointment scheduled for July 20 at 10:00 AM</li>
      </ul>
    </marquee>
  </div>
);

const ImageWithText = ({ src, alt }) => (
  <div>
    <img className="text_images" src={src} alt={alt} />
  </div>
);

const ContentText = ({ title, text }) => (
  <div className="content-text">
    <h3>{title}</h3>
    <br />
    <p>{text}</p>
  </div>
);

export default MediMate;
