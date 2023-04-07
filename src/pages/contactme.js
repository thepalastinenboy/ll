import React, { useState } from 'react';
import { BasicLayout } from "../layouts/basicLayout";
import { HeaderTop } from "../components";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Send formData to your server or API here
  };

  return (
    <BasicLayout>

<HeaderTop />
      <div className="b2-block">
        <div className="b2-block-title display-flex align-items-center justify-content-space-between">
          <div>
            <div className="block-title-medium no-margin block-title text-semibold">
              Kontakt
            </div>
            <div className="b2-opacity block-title no-margin b2-block-subtitle">
              Hast du fragen?
            </div>
          </div>
        </div>
        <div className="b2-block-content">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
    </BasicLayout>
  );
};

export default ContactPage;
