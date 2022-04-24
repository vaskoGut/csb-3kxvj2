import { useEffect, useState } from "react";

// simple React.jS screen recognition function example
export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setDesktopOpen(window.innerWidth > 767);
      setMobileOpen(window.innerWidth < 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      {console.log("is mobile", mobileOpen)}
      {console.log("is desktop", desktopOpen)}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
