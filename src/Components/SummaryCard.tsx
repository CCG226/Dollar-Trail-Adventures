import { useState } from "react";
import { initialTabs as tabs } from "./ingredients";
import { motion, AnimatePresence } from "framer-motion";
import "../Styles/summary.css"
export default function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="window">
      <nav>
        <ul>
          {tabs.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Render the summary for the selected week */}
            {selectedTab ? (
              <div className="summary">
                <h2>{selectedTab.label} Summary</h2>
                {/* Add your summary content here */}
                {/* Example: */}
                <p className="summarytext">This is a summary of {selectedTab.label}</p>
              </div>
            ) : (
              "😋"
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}