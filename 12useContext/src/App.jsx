import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ThemeProvider from "./context/ThemeProvider";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import AuthProvider from "./context/AuthProvider";
import Dashboard from "./components/Dashboard";
import LanguageProvider from "./context/LanguageProvider";
import Greeting from "./components/Greeting";
import NotificationProvider from "./context/NotificationProvider";
import NotificationControls from "./components/NotificationControls";
import NotificationBar from "./components/NotificationBar";
import CounterProvider from "./context/CounterProvider";
import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";
import CombinedProvider from "./context/CombinedProvider";
import FontProvider from "./context/FontProvider";
import LayoutProvider from "./context/LayoutProvider";
import SettingsPanel from "./components/SettingsPanel";
import FeatureProvider from "./context/FeatureProvider";
import FeatureStatus from "./components/FeatureStatus";
import FeatureToggle from "./components/FeatureToggle";
import SortProvider from "./context/SortProvider";
import ViewProvider from "./context/ViewProvider";
import FilterPanel from "./components/FilterPanel";

function App() {
  return (
    <>
      <div className="app-shell">
        <div className="assignment-card">
          <ThemeProvider>
            <Home />
          </ThemeProvider>

          <AuthProvider>
            <Navbar />
            <Login />
            <Dashboard />
          </AuthProvider>
          
          <LanguageProvider>
            <Greeting/>
          </LanguageProvider>

          <NotificationProvider>
            <NotificationControls/>
            <NotificationBar/>
          </NotificationProvider>

          <CounterProvider>
            <CounterDisplay/>
            <CounterControls/>
          </CounterProvider>

          <CombinedProvider>
            <Home/>
          </CombinedProvider>

          <FontProvider>
            <LayoutProvider>
              <SettingsPanel/>
            </LayoutProvider>
          </FontProvider>

          <FeatureProvider>
            <FeatureStatus/>
            <FeatureToggle/>
          </FeatureProvider>

          <SortProvider>
            <ViewProvider>
              <FilterPanel/>
            </ViewProvider>
          </SortProvider>
        </div>
      </div>
    </>
  );
}

export default App;
