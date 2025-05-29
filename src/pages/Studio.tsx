import type React from "react";
import { useNavigate } from "react-router-dom";
import StudioComponent from "../components/Studio";

const Studio: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    if (page === "home") {
      navigate("/");
    }
  };

  return <StudioComponent onNavigate={handleNavigate} />;
};

export default Studio; 