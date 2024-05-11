import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main';

import './styles/registration.css';
import Registration from './pages/registration';
import VideocoursePY from './pages/videocoursePY';
import VideocoursePY1 from './pages/videocoursePY1';
import VideocoursePY2 from './pages/videocoursePY2';
import VideocourseC from './pages/videocourseC++';
import VideocourseC1 from './pages/videocourseC++1';
import VideocourseC2 from './pages/videocourseC++2';
import VideocourseJS from './pages/videocourseJS';
import VideocourseJS1 from './pages/videocourseJS1';
import VideocourseJS2 from './pages/videocourseJS2';
import Course_textPY from './pages/course_textPY';
import Course_textPY1 from './pages/course_textPY1';
import Course_textC from './pages/course_textC';
import Course_textC1 from './pages/course_textC1';
import Course_textJS1 from './pages/course_textJS1';
import Course_textJS2 from './pages/course_textJS2';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/videocoursePY" element={<VideocoursePY />} />
        <Route path="/videocoursePY1" element={<VideocoursePY1 />} />
        <Route path="/videocoursePY2" element={<VideocoursePY2 />} />
        <Route path="/videocourseC" element={<VideocourseC />} />
        <Route path="/videocourseC1" element={<VideocourseC1 />} />
        <Route path="/videocourseC2" element={<VideocourseC2 />} />
        <Route path="/videocourseJS" element={<VideocourseJS />} />
        <Route path="/videocourseJS1" element={<VideocourseJS1 />} />
        <Route path="/videocourseJS2" element={<VideocourseJS2 />} />
        <Route path="/course_textPY" element={<Course_textPY />} />
        <Route path="/course_textPY1" element={<Course_textPY1 />} />
        <Route path="/course_textC" element={<Course_textC />} />
        <Route path="/course_textC1" element={<Course_textC1 />} />
        <Route path="/course_textJS1" element={<Course_textJS1 />} />
        <Route path="/course_textJS2" element={<Course_textJS2 />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
