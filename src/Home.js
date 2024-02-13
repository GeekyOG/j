import React from "react";
import TopBar from "./components/home/TopBar";
import QuickLinks from "./components/home/QuickLinks";
import LabelBottomNavigation from "./components/home/BottomNav";

function Home() {
  return (
    <div>
      <TopBar />
      <div className="px-[10px] max-h-[80vh] overflow-scroll">
        <QuickLinks />
        <QuickLinks />
        <QuickLinks />
        <QuickLinks />
        <QuickLinks /> <QuickLinks /> <QuickLinks /> <QuickLinks />{" "}
        <QuickLinks /> <QuickLinks />
      </div>
      <LabelBottomNavigation />
    </div>
  );
}

export default Home;
