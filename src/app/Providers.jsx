"use client";

import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <div>
      <ThemeProvider enableSystem={true} attribute="class">
        <div className="dark:bg-neutral-700 dark:text-neutral-200 text-neutral-700 transition-colors duration-300 min-h-screen select-none">
          {children}
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Providers;
