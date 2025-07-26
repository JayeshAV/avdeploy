import React, { useState, useEffect } from "react";
import logo from "../assets/images/favicon.ico";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="loader-container"
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#ffffff",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.img
        src={logo}
        alt="Logo"
        initial={{ scale: 0.5, rotate: 0 }}
        animate={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
        style={{ width: "80px", height: "80px" }}
      />
    </motion.div>
  );
};

const ErrorBoundary = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const waitForDOM = requestAnimationFrame(() => {
      setLoading(false); 
    });

    return () => cancelAnimationFrame(waitForDOM);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      {!loading && children}
    </>
  );
};

export default ErrorBoundary;
