import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {lazy} from 'react';
//const Header = lazy(() => import('./components/header'))
const MainPage = lazy(() => import('./pages/main'));
const Registration = lazy(() => import('./pages/registration'));
const VideocoursePY = lazy(() => import('./pages/videocoursePY'));
const VideocoursePY1 = lazy(() => import('./pages/videocoursePY1'));
const VideocoursePY2 = lazy(() => import('./pages/videocoursePY2'));
const VideocourseC = lazy(() => import('./pages/videocourseC++'));
const VideocourseC1 = lazy(() => import('./pages/videocourseC++1'));
const VideocourseC2 = lazy(() => import('./pages/videocourseC++2'));
const VideocourseJS = lazy(() => import('./pages/videocourseJS'));
const VideocourseJS1 = lazy(() => import('./pages/videocourseJS1'));
const VideocourseJS2 = lazy(() => import('./pages/videocourseJS2'));
const Course_textPY = lazy(() => import('./pages/course_textPY'));
const Course_textPY1 = lazy(() => import('./pages/course_textPY1'));
const Course_textC = lazy(() => import('./pages/course_textC'));
const Course_textC1 = lazy(() => import('./pages/course_textC1'));
const Course_textJS1 = lazy(() => import('./pages/course_textJS1'));
const Course_textJS2 = lazy(() => import('./pages/course_textJS2'));
const  Leaders = lazy(() => import('./pages/leaders'));
const   Tasks = lazy(() => import('./pages/tasks'));
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
        <Route path="/leaders" element={<Leaders />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </Router>
    
  );
};

export default AppRouter;
