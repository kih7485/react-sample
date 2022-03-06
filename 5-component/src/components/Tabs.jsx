import React from 'react';


export const TabType = {
  KEYWORD: "KEYWORD",
  HISTORY: "HISTORY",
};

export const TabLabel = {
  [TabType.KEYWORD]: "추천 검색어",
  [TabType.HISTORY]: "최근 검색어",
};

function Tabs({selectedTab, onChange }) {
    return <>
        <ul className="tabs">
          {Object.values(TabType).map((tabType) => {
            return (
              <li
                className={selectedTab === tabType ? "active" : ""}
                key={tabType}
                onClick={() => onChange(tabType)}
              >
                {TabLabel[tabType]}
              </li>
            );
          })}
        </ul>
      </>
}

export default Tabs;