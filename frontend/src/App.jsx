// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import "./styles/App.css";
import Sidebar from "./components/layouts/Sidebar.jsx";
import Home from "./Home.jsx";
import Category1 from "./Category1.jsx";
import Category2 from "./Category2.jsx";
import Category3 from "./Category3.jsx";

function App() {
  return (
    <Router>
      <div className="container">
        <PanelGroup direction="horizontal">
          {/* Use fixed width instead of defaultSize % */}
          <Panel defaultSize={240} minSize={240} maxSize={240}>
            <Sidebar />
          </Panel>

          {/* Remove resize handle since we’re fixing width */}
          {/* <PanelResizeHandle className="resizer" /> */}

          <Panel>
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category1" element={<Category1 />} />
                <Route path="/category2" element={<Category2 />} />
                <Route path="/category3" element={<Category3 />} />
              </Routes>
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </Router>
  );
}

export default App;
