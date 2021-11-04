import React, { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

const Navigation = () => {
  const [currentTab, setCurrentTab] = useState("AboutMe");

  const renderTabs = () => {
    if (currentTab === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentTab === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentTab === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handleTabChange = (page) => setCurrentTab(page);

  return (
    <div>
      <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <NavTabs currentTab={currentTab} handleTabChange={handleTabChange} />
      </header>
      {renderTabs()}
    </div>
  );
};

export default Navigation;
