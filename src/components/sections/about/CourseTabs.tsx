"use client";

import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";

type CourseTab = {
  id: string;
  label: string;
  content: ReactNode;
};

export function CourseTabs({ tabs }: { tabs: CourseTab[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number;

    switch (event.key) {
      case "ArrowLeft":
        nextIndex = (index - 1 + tabs.length) % tabs.length;
        break;
      case "ArrowRight":
        nextIndex = (index + 1) % tabs.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    setActiveTab(tabs[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <div className="mt-8">
      <div role="tablist" aria-label="초록스터디 과정 분야" className="flex flex-wrap gap-sm">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`course-tab-${tab.id}`}
            aria-controls={`course-panel-${tab.id}`}
            aria-selected={activeTab === tab.id}
            tabIndex={activeTab === tab.id ? 0 : -1}
            onClick={() => setActiveTab(tab.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={`min-h-10 rounded-full border px-sm py-sm text-label-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:px-lg ${
              activeTab === tab.id
                ? "border-primary bg-primary text-on-primary"
                : "border-secondary text-secondary hover:bg-secondary-container"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          id={`course-panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`course-tab-${tab.id}`}
          hidden={activeTab !== tab.id}
          tabIndex={0}
          className="mt-lg"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
