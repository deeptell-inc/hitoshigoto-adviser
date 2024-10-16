import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Jobs from "./pages/Jobs";
import JobSeekerRegistration from "./pages/JobSeekerRegistration";
import CorporateRegistration from "./pages/CorporateRegistration";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cases from "./pages/Cases";
import Alliance from "./pages/Alliance";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { Link } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/job-seeker-registration" element={<JobSeekerRegistration />} />
              <Route path="/corporate-registration" element={<CorporateRegistration />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/alliances" element={<Alliance />} />
              <Route path="/cases" element={<Cases />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
