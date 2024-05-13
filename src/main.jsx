import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./App";
import Home from "./components/Home/Home";
import ContactUs from "./components/Routes/Company/ContactUs";
import AboutUs from "./components/Routes/Company/AboutUs";
import Blog from "./components/Routes/Company/Blog";
import Careers from "./components/Routes/Company/Careers";
import ManagedKubernetes from "./components/Routes/Products&Solution/ManagedKubernetes";
import CustomApi from "./components/Routes/Products&Solution/CustomApi";
import MigrateToCloud from "./components/Routes/Products&Solution/MigrateToCloud";
import MultiCloud from "./components/Routes/Services/Multi-Cloud";
import DevOps from "./components/Routes/Services/DevOps";
import Kubernetes from "./components/Routes/Services/Kubernetes";
import RedHatOpenshift from "./components/Routes/Services/RedHatOpenshift";
import WebAppDevelopment from "./components/Routes/Services/WebAppDevelopment";
import MobileAppDevelopment from "./components/Routes/Services/MobileAppDevelopment";
import UiUx from "./components/Routes/Services/UiUx";
import CyberSecurity from "./components/Routes/Services/CyberSecurity";
import PrivacyPolicy from "./components/Privacy/PrivacyPolicy";
import Terms from "./components/Privacy/Terms";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="blog" element={<Blog />} />
      <Route path="careers" element={<Careers />} />
      <Route path="managedKubernetes" element={<ManagedKubernetes />} />
      <Route path="customApi" element={<CustomApi />} />
      <Route path="migrateToCloud" element={<MigrateToCloud />} />
      <Route path="multiCloud" element={<MultiCloud />} />
      <Route path="devops" element={<DevOps />} />
      <Route path="kubernetes" element={<Kubernetes />} />
      <Route path="redhatOpenshift" element={<RedHatOpenshift />} />
      <Route path="webApp" element={<WebAppDevelopment />} />
      <Route path="mobileApp" element={<MobileAppDevelopment />} />
      <Route path="uiux" element={<UiUx />} />
      <Route path="cyberSecurity" element={<CyberSecurity />} />
      <Route path="privacy" element={<PrivacyPolicy />} />
      <Route path="terms" element={<Terms />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
