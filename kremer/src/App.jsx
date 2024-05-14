import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {lazy, Suspense} from 'react';

//const Header = lazy(() => import('./components/header'))
// const MainPage = lazy(() => import('./pages/main'));
import MainPage from './pages/main';
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

const App = () => {
  return (
    <>
    <MainPage/>
    </>
  );
};

export default App;
