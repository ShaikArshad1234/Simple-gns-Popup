"use client";

import { useState } from "react";

const TaskPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [externalAddress, setExternalAddress] = useState("");
  const [completedSteps, setCompletedSteps] = useState({
    step1: false,
    step2: false,
    step3: false,
  });

  // Modal Controls
  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    resetSteps();
  };

  const resetSteps = () => {
    setCurrentStep(1);
    setCompletedSteps({ step1: false, step2: false, step3: false });
    setExternalAddress("");
  };

  // Wallet Validation
  const isWalletAddressValid = (address) => /^[a-zA-Z]+$/.test(address.trim());

  // Step Navigation
  const handleNextStep = () => {
    if (currentStep === 4 && !isWalletAddressValid(externalAddress)) {
      alert("Please enter a valid wallet address. Only alphabetic characters are allowed.");
      return;
    }

    setCompletedSteps((prev) => ({
      ...prev,
      [`step${currentStep}`]: true,
    }));

    setCurrentStep((prev) => prev + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(completedSteps).every((step) => step)) {
      if (isWalletAddressValid(externalAddress)) {
        alert(`Submitted Wallet Address: ${externalAddress}`);
        handleCloseModal();
      } else {
        alert("Invalid wallet address. Please try again.");
      }
    } else {
      alert("Please complete all steps before submitting.");
    }
  };

  // UI Elements
  const renderStepContent = () => {
    const stepLinks = [
      { label: "EternalKoalas", url: "https://x.com/EternalKoalas" },
      { label: "Yousefeth", url: "https://x.com/yousefeth" },
      { label: "Madushanka", url: "https://x.com/mr_madushanka" },
    ];

    if (currentStep <= 3) {
      return (
        <>
          <a
            href={stepLinks[currentStep - 1].url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0070f3", textDecoration: "none" }}
          >
            {stepLinks[currentStep - 1].label}
          </a>
          <p>Click the link to complete Step {currentStep}.</p>
        </>
      );
    }

    return (
      <div>
        <label htmlFor="externalAddress">Enter Wallet Address:</label>
        <input
          type="text"
          id="externalAddress"
          value={externalAddress}
          onChange={(e) => setExternalAddress(e.target.value)}
          placeholder="Type here..."
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Get Started Button */}
      <button
        onClick={handleOpenModal}
        style={{
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Get Started
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              width: "400px",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "left",
            }}
          >
            <h2>Step {currentStep}</h2>
            {renderStepContent()}

            <div style={{ marginTop: "20px" }}>
              {currentStep > 1 && (
                <button
                  onClick={handlePreviousStep}
                  style={{
                    marginRight: "10px",
                    padding: "10px 20px",
                    backgroundColor: "#ccc",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Back
                </button>
              )}
              {currentStep < 4 && (
                <button
                  onClick={handleNextStep}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#0070f3",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Next
                </button>
              )}
              {currentStep === 4 && (
                <button
                  onClick={handleSubmit}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: Object.values(completedSteps).every(
                      (step) => step
                    )
                      ? "#0070f3"
                      : "#ccc",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: Object.values(completedSteps).every((step) => step)
                      ? "pointer"
                      : "not-allowed",
                  }}
                  disabled={!Object.values(completedSteps).every((step) => step)}
                >
                  Submit
                </button>
              )}
            </div>

            <button
              onClick={handleCloseModal}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#ccc",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskPage;
