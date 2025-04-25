import React, { useState } from "react";
import { BasicLayout } from "../layouts/basicLayout";
import { HeaderTop } from "../components";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessageStatus(null);

    try {
      const response = await fetch("https://ubai.dev/b2lernen.de/sendMail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Form data sent successfully:", result);
      setMessageStatus(result);

      // Clear the form data after a successful submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending form data:", error);
      setMessageStatus({
        status: "error",
        message: "Error sending the message",
      });
    } finally {
      setIsSending(false);
      setShowMessage(true);
    }
  };

  return (
    <BasicLayout>
      <Helmet>
        <title>{`Kontakt - FIAE`}</title>
        <meta name="keywords" content="deutsch FIAE" />
      </Helmet>
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
          <form
            onSubmit={handleSubmit}
            className="list list-strong-ios list-dividers-ios list-outline-ios"
            id="my-form"
          >
            <ul>
              <li>
                <div className="item-content item-input">
                  <div className="item-inner">
                    <div className="item-title item-label">Name</div>
                    <div className="item-input-wrap">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="item-content item-input">
                  <div className="item-inner">
                    <div className="item-title item-label">E-mail</div>
                    <div className="item-input-wrap">
                      <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className="item-content item-input">
                <div className="item-inner">
                  <div className="item-title item-label">Nachricht</div>
                  <div className="item-input-wrap">
                    <textarea
                      name="message"
                      defaultValue={""}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </li>
            </ul>
            <button
              type="submit"
              disabled={isSending}
              className="button button-small button-round button-fill button-preloader margin-top bg-color-lime"
            >
              <span class="preloader"></span>
              {isSending ? "Senden..." : "Absenden"}
            </button>
          </form>
          {showMessage && messageStatus && (
            <div
              className={`message-status ${
                messageStatus.status === "success" ? "success" : "error"
              }`}
            >
              <div
                className="toast toast-top toast-horizontal-left modal-in"
                style={{ background: "lime", color: "black", zIndex: 9999 }}
              >
                <div className="toast-content">
                  <div className="toast-text">
                    Email wurde erfolgreich Versendet
                  </div>
                  <a
                    className="toast-button button "
                    onClick={() => setShowMessage(false)}
                  >
                    Ok
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </BasicLayout>
  );
};

export default ContactPage;
