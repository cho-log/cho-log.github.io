"use client";

import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";

type CourseTab = {
  id: string;
  label: string;
  content: ReactNode;
};

const TAB_STYLES = {
  pill: {
    list: "gap-sm",
    button: "min-h-10 rounded-full border px-sm py-sm sm:px-lg",
    active: "border-primary bg-primary text-on-primary",
    inactive: "border-secondary text-secondary hover:bg-secondary-container",
  },
  underline: {
    list: "gap-x-md gap-y-xs border-b border-outline-variant",
    button: "-mb-px min-h-9 border-b-2 py-xs",
    active: "border-primary text-primary",
    inactive: "border-transparent font-medium text-on-surface-variant hover:text-primary",
  },
};

export function CourseTabs({
  tabs,
  tabListLabel = "초록스터디 과정 분야",
  idPrefix = "course",
  className = "mt-8",
  variant = "pill",
}: {
  tabs: CourseTab[];
  tabListLabel?: string;
  idPrefix?: string;
  className?: string;
  variant?: keyof typeof TAB_STYLES;
}) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const styles = TAB_STYLES[variant];

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
    <div className={className}>
      <div
        role="tablist"
        aria-label={tabListLabel}
        className={`flex flex-wrap ${styles.list}`}
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            type="button"
            role="tab"
            id={`${idPrefix}-tab-${tab.id}`}
            aria-controls={`${idPrefix}-panel-${tab.id}`}
            aria-selected={activeTab === tab.id}
            tabIndex={activeTab === tab.id ? 0 : -1}
            onClick={() => setActiveTab(tab.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={`${styles.button} text-label-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
              activeTab === tab.id ? styles.active : styles.inactive
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          id={`${idPrefix}-panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`${idPrefix}-tab-${tab.id}`}
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
