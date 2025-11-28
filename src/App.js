import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import Cursor from './Widgets/Cursor.js';
import ScrollToTop from '../src/Widgets/Scroll.js';
import Navbar from './Components/Header.js';
import Preloader from "./Components/Preloader.js";
import '../src/App.css';
import SmoothScrollWrapper from "./Components/SmoothScrollWrapper.js";
import WhatsAppButton from './Components/Whatsapp.js';
import ResetPage from '../src/Widgets/ResetPage.js';
import AppRoutes from "./routes.js";

function App() {
  return (
    <HelmetProvider>
      <div id="app-container">
        <Navbar />
        <Preloader duration={2000} />

        <SmoothScrollWrapper>
        <div className="main-content">
          <AppRoutes />  
        </div>
        </SmoothScrollWrapper>
        

        <WhatsAppButton />

        <ScrollToTop />
        <ResetPage />
        <Cursor />
      </div>

      <Toaster
        position="top-right"
        containerStyle={{ zIndex: 999999 }}
        toastOptions={{ duration: 5000, style: { fontSize: 14 } }}
      />
    </HelmetProvider>
  );
}

export default App;   