import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import DocumentsPage from "./pages/DocumentsPage";
import CalendarPage from "./pages/CalendarPage";
import ChartsPage from "./pages/ChartsPage";
import WhereToPlayPage from "./pages/WhereToPlayPage";
import ContactsPage from "./pages/ContactsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/documents" element={<DocumentsPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/charts" element={<ChartsPage />} />
              <Route path="/where-to-play" element={<WhereToPlayPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
