import React, { useState } from 'react';
import { X, ChevronRight, ChevronLeft, Palette } from 'lucide-react';
import './SettingsSidebar.css';

function SettingsSidebar({ isOpen, onClose, theme, setTheme }) {
  const [currentView, setCurrentView] = useState('main'); // 'main' | 'themes'

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="settings-sidebar__backdrop" onClick={onClose}></div>

      {/* Sidebar */}
      <div className={`settings-sidebar ${theme.includes('dark') ? 'settings-sidebar-dark' : 'settings-sidebar-light'}`}>
        <div className="settings-sidebar__header">
          {currentView === 'themes' ? (
            <button className="settings-sidebar__back-btn" onClick={() => setCurrentView('main')}>
              <ChevronLeft size={20} />
              <span>Back</span>
            </button>
          ) : (
            <h2>Dashboard</h2>
          )}
          <button className="settings-sidebar__close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="settings-sidebar__content">
          {currentView === 'main' && (
            <div className="settings-sidebar__menu">
              <button className="settings-sidebar__item" onClick={() => setCurrentView('themes')}>
                <Palette size={20} />
                <span>Themes</span>
                <ChevronRight size={16} className="ml-auto" />
              </button>
            </div>
          )}

          {currentView === 'themes' && (
            <div className="settings-sidebar__themes">
              <h3>Select a Theme</h3>
              <div className="settings-sidebar__theme-list">
                <button 
                  className={`settings-sidebar__theme-btn ${theme === 'light' ? 'active' : ''}`}
                  onClick={() => setTheme('light')}
                >
                  Light
                </button>
                <button 
                  className={`settings-sidebar__theme-btn ${theme === 'dark' ? 'active' : ''}`}
                  onClick={() => setTheme('dark')}
                >
                  Dark
                </button>
                <button 
                  className={`settings-sidebar__theme-btn ${theme === 'dark-blue' ? 'active' : ''}`}
                  onClick={() => setTheme('dark-blue')}
                >
                  Dark Blue
                </button>
                <button 
                  className={`settings-sidebar__theme-btn ${theme === 'glass-light' ? 'active' : ''}`}
                  onClick={() => setTheme('glass-light')}
                >
                  Glass Light
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SettingsSidebar;
