"use client"; 

import { useState } from "react";

const TaskPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [externalAddress, setExternalAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Address: ${externalAddress}`);
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
            <h2>Links</h2>
            <ul>
              <li>
                <a
                  href="https://x.com/EternalKoalas"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#0070f3", textDecoration: "none" }}
                >
                  EternalKoalas
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/yousefeth"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#0070f3", textDecoration: "none" }}
                >
                  Yousefeth
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/mr_madushanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#0070f3", textDecoration: "none" }}
                >
                  Madushanka
                </a>
              </li>
            </ul>
            <form onSubmit={handleSubmit}>
              <div style={{ marginTop: "20px" }}>
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
              <button
                type="submit"
                style={{
                  marginTop: "15px",
                  padding: "10px 20px",
                  backgroundColor: "#0070f3",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </form>
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
