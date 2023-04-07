// InstallPWAButton.js
import React, { useState, useEffect } from "react";

const InstallPWAButton = () => {
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  const isMobileDevice = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return (
      /android/i.test(userAgent) ||
      (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
    );
  };

  useEffect(() => {
    if (!isMobileDevice()) {
      return;
    }

    const isFirstVisit = localStorage.getItem("firstVisit");
    if (!isFirstVisit) {
      localStorage.setItem("firstVisit", "false");
      return;
    }

    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    setIsIOS(isIOS);

    const savedDecisionTimestamp = localStorage.getItem(
      "installDecisionTimestamp"
    );
    if (
      savedDecisionTimestamp &&
      Date.now() - parseInt(savedDecisionTimestamp) < 7 * 24 * 60 * 60 * 1000
    ) {
      return;
    }

    if (isIOS) {
      setShowInstallButton(!navigator.standalone);
    } else {
      window.addEventListener("beforeinstallprompt", (e) => {
        e.preventDefault();
        window.deferredPrompt = e;
        setShowInstallButton(true);
      });

      window.addEventListener("appinstalled", () => {
        setShowInstallButton(false);
      });
    }
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      alert('To install, tap "Share" and then "Add to Home Screen".');
    } else if (window.deferredPrompt) {
      const promptEvent = window.deferredPrompt;
      promptEvent.prompt();
      const userChoice = await promptEvent.userChoice;

      if (userChoice.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }

      window.deferredPrompt = null;
      setShowInstallButton(false);
    }
  };

  const handleCloseClick = () => {
    localStorage.setItem("installDecisionTimestamp", Date.now().toString());
    setShowInstallButton(false);
  };

  return (
    showInstallButton && (
      <div class="b2-block b2-block no-padding no-margin p-10">
        <div class="b2-block-title display-flex align-items-center justify-content-space-between">
          <div>
            <div class="block-title no-margin b2-block-subtitle display-flex align-items-center ">
              <div className="close-button margin-right" onClick={handleCloseClick}> X</div>App installieren
            </div>
          </div>
          <div class="b2-badge">
            <div href="#" onClick={handleInstallClick} class="badge bg-color-faqehgreen text-color-black p-10">
              Install
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default InstallPWAButton;
