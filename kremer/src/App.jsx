import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {lazy, Suspense} from 'react';

//const Header = lazy(() => import('./components/header'))
const MainPage = lazy(() => import('./pages/main'));
const Registration = lazy(() => import('./pages/registration'));
const VideocoursePY = lazy(() => import('./pages/python/videocoursePY'));
const VideocoursePY1 = lazy(() => import('./pages/python/videocoursePY1'));
const VideocoursePY2 = lazy(() => import('./pages/python/videocoursePY2'));
const VideocourseC = lazy(() => import('./pages/cpp/videocourseC++'));
const VideocourseC1 = lazy(() => import('./pages/cpp/videocourseC++1'));
const VideocourseC2 = lazy(() => import('./pages/cpp/videocourseC++2'));
const VideocourseJS = lazy(() => import('./pages/js/videocourseJS'));
const VideocourseJS1 = lazy(() => import('./pages/js/videocourseJS1'));
const VideocourseJS2 = lazy(() => import('./pages/js/videocourseJS2'));
const Course_textPY = lazy(() => import('./pages/python/course_textPY'));
const Course_textPY1 = lazy(() => import('./pages/python/course_textPY1'));
const Course_textC = lazy(() => import('./pages/cpp/course_textC'));
const Course_textC1 = lazy(() => import('./pages/cpp/course_textC1'));
const Course_textJS1 = lazy(() => import('./pages/js/course_textJS1'));
const Course_textJS2 = lazy(() => import('./pages/js/course_textJS2'));
const  Leaders = lazy(() => import('./pages/leaders'));
const   Tasks = lazy(() => import('./pages/tasks'));
const   TasksPY = lazy(() => import('./pages/python/tasksPY'));

const AppRouter = () => {
  return (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
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
        <Route path="/tasksPY" element={<TasksPY />} />
      </Routes>
      </Suspense>
    </Router>
    
  );
};

export default AppRouter;
