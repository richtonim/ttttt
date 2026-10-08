import { useState, FormEvent } from 'react';
import SEO from '../components/SEO';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with the AIFLASH.NEWS team. Enterprise inquiries, partnerships, and support."
        path="/contact"
      />

      <div className="page-header">
        <div className="container">
          <h1>Contact</h1>
          <p>Enterprise sales, partnerships, press, and support.</p>
        </div>
      </div>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <div className="card contact-card">
              <h3>Sales & Enterprise</h3>
              <p className="mono">sales@aiflash.news</p>
            </div>
            <div className="card contact-card">
              <h3>Press & Media</h3>
              <p className="mono">press@aiflash.news</p>
            </div>
            <div className="card contact-card">
              <h3>Support</h3>
              <p className="mono">support@aiflash.news</p>
            </div>
            <div className="card contact-card">
              <h3>Office</h3>
              <p>548 Market St, Suite 320<br />San Francisco, CA 94104</p>
            </div>
          </div>

          <div className="card contact-form-card">
            <h2>Send a Message</h2>
            {submitted ? (
              <div className="alert alert-success">
                Message sent! We'll respond within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" required placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" required placeholder="you@company.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" required>
                    <option value="">Select a topic</option>
                    <option value="enterprise">Enterprise Sales</option>
                    <option value="partnership">Partnership</option>
                    <option value="press">Press Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={5} required placeholder="How can we help?" />
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
