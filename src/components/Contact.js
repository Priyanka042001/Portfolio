import React from 'react';
import './Contact.css'; // Ensure you create this CSS file for styling

function Contact() {
  return (
    <section className="contact">
      <div className="contact-background">
        <div className="contact-overlay">
          <div className="contact-content">
            <h2 className="contact-title">Contact Me</h2>
            
            <div className="contact-details">
              <p className="contact-email"><strong>Email:</strong> priyankakumarirajput1@gmail.com</p>
              <p className="contact-social">
                <strong>Connect with me:</strong>
                <div className="social-icons">
                  <a href="https://www.linkedin.com/in/priyanka-kumari-659640232/" target="_blank" rel="noopener noreferrer">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.c9ljaNEXfkxR0zcfQRUhYQAAAA&pid=Api&P=0&h=180" alt="LinkedIn" className="social-icon" />
                  </a>
                  <a href="https://github.com/Priyanka042001" target="_blank" rel="noopener noreferrer">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.RRBx3ykAN7_BTuOHrpL7kgAAAA&pid=Api&P=0&h=180" alt="Github" className="social-icon" />
                  </a>
                </div>
              </p>
            </div>

            <div className="contact-form">
              <h3>Send Me a Message</h3>
              <form action="mailto:priyankakumarirajput1@gmail.com" method="post" encType="text/plain">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-dark">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
