import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { App } from './App';
import { EmployeesPage } from './pages/EmployeesPage/EmployeesPage';
import { AboutPage } from './pages/AboutPage';
import { NewsPage } from './pages/NewsPage';
import { HomePage } from './pages/HomePage/HomePage';
import { SingleNews } from './pages/SingleNews';
import { NotFoundPage } from './pages/NotFoundPage';
import { InfoPage } from './pages/InfoPage';
import { GalleryPage } from './pages/GalleryPage';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="news">
              <Route index element={<NewsPage />} />
              <Route path=":newsId?" element={<SingleNews />} />
            </Route>
            <Route path="about" element={<AboutPage />} />
            <Route path="info" element={<InfoPage />} />
            <Route path="employees" element={<EmployeesPage />} />
            <Route path="gallery" element={<GalleryPage />} />
          </Route>
          
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
