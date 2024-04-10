import React from "react";
import Navbar from "./Navbar";

// Root view to take all the background space so that we can display a consistent background.
// And we can also set up colors to be used everywhere on the site.

function Root() {
  return (
    <div className="bg-background flex h-screen w-screen flex-col transition-all dark:bg-dark-background dark:text-dark-text">
      <Navbar />
    </div>
  );
}

export default Root;
