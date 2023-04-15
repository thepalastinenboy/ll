import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Greeting = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    } else {
      setName("Gust");
    }

    const time = new Date().getHours();
    let greeting;

    if (time >= 5 && time < 12) {
      greeting = "Guten Morgen";
    } else if (time >= 12 && time < 18) {
      greeting = "Schönen Tag";
    } else {
      greeting = "Guten Abend";
    }

    setGreeting(greeting);
  }, []);

  const saveName = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    setIsFormVisible(false);
  };

  const showForm = () => {
    setIsFormVisible(true);
  };

  return (
    <div className="b2-block">
      <div className="b2-block-title display-flex align-items-center justify-content-space-between">
        <div>
          <div className="block-title-medium no-margin block-title text-semibold">
            {greeting}{" "}
            
          </div>
          
        </div>
        
        <div className="display-flex align-items-center justify-content-space-between">
          {!isFormVisible && (
            <div className="b2-badge">
              <a className="link" onClick={showForm}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.23 1h-1.46L3.52 9.25l-.16.22L1 13.59 2.41 15l4.12-2.36.22-.16L15 4.23V2.77L13.23 1zM2.41 13.59l1.51-3 1.45 1.45-2.96 1.55zm3.83-2.06L4.47 9.76l8-8 1.77 1.77-8 8z"></path>
                </svg>
              </a>
            </div>
          )}
          <Link to="/saved">
            <div class="item-media">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"></path>
                <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <span
          className="block-title-medium no-margin block-title text-semibold"
              style={{
                color: "#00b5cb",
                
              }}
            >
              {name}
            </span>
            </div>
      <div className="b2-block-content">
        {isFormVisible && (
          <form onSubmit={saveName}>
            <input
              type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="button" type="submit">
              Name speichern
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Greeting;
