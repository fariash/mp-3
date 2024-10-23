import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Volunteer from './components/Volunteer';
import Credits from './components/Credits';

// Define routes using createBrowserRouter
const router = createBrowserRouter([
  { path: '*', element: <Root /> },  // Wildcard route that renders the Root component
]);

// Main App component
export default function App() {
  return <RouterProvider router={router} />;  // Provide router to the app
}

// Root component that defines the layout of the page
function Root() {
  return (
    <>
      {/* Header section */}
      <Header title="Faria Shahriar" subtitle="Welcome to my online resume!" />

      <div className="container">
        {/* Navigation bar */}
        <NavBar />

        {/* Main content area where different routes will be rendered */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home route */}
            <Route path="/education" element={<Education />} /> {/* Education route */}
            <Route path="/experience" element={<Experience />} /> {/* Experience route */}
            <Route path="/skills" element={<Skills />} /> {/* Skills route */}
            <Route path="/volunteer" element={<Volunteer />} /> {/* Volunteer route */}
            <Route path="/projects" element={<Projects />} /> {/* Projects route */}
            <Route path={'/credits'} element={<Credits/>}/>
          </Routes>
        </main>
      </div>

      {/* Footer section */}
      <Footer />
    </>
  );
}

