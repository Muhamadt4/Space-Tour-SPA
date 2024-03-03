import "./App.css";
import SpaceMain from "./components/spaceMain";
import SpaceDestin from "./components/spaceDestin";
import SpaceCrew from "./components/spaceCrew";
import SpaceTech from "./components/spaceTech";
import { useState } from "react";
import SpaceProjectNav from "./components/spaceProjectNav";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const renderpage = () => {
    switch (currentPage) {
      case "Home":
        return <SpaceMain></SpaceMain>;
      case "Destination":
        return <SpaceDestin></SpaceDestin>;
      case "Crew":
        return <SpaceCrew></SpaceCrew>;
      case "Technology":
        return <SpaceTech></SpaceTech>;
      default:
        return null;
    }
  };
  return (
    <div className="speacialfont">
      <SpaceProjectNav
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></SpaceProjectNav>
      {renderpage()}
    </div>
  );
}
