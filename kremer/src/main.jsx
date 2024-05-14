import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import{
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route 
} from "react-router-dom";
import './index.css'
import MainPage from './pages/main.jsx';
import Leaders from './pages/leaders.jsx';
import Courses from './pages/courses.jsx';
import PythonIntro from './pages/python/pythonIntro.jsx';
import VideocoursePY from './pages/python/videocoursePY.jsx';
import VideocoursePY1 from './pages/python/videocoursePY1.jsx';
import Course_textPY from './pages/python/course_textPY.jsx';
import Python1_1 from './pages/python/tasks/1_1py.jsx';

const routes = createRoutesFromElements(
  <Route path ='/' element = {<MainPage/>}>
    <Route path = "leaderboard" element = {<Leaders/>} />
    <Route path='courses' element = {<Courses/>}> 
      <Route path='python_promo' element = {<PythonIntro/>}/>
      <Route path='lessons' element = {null}> 
        <Route path='intro' element = {<VideocoursePY/>}/>
        <Route path='1' element = {null}>
           <Route path='video' element = {<VideocoursePY1/>}/>
           <Route path='reading' element = {<Course_textPY/>}/>
           <Route path='tasks' element = {null}>
              <Route path='1' element = {<Python1_1/>}/>
             </Route> 
           </Route>

           </Route>

      </Route>


    </Route>
)

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)




// <Router>
//         <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route path="/" element={} />
//         <Route path="/registration" element={<Registration />} />
//         <Route path="/videocoursePY" element={<VideocoursePY />} />
//         <Route path="/videocoursePY1" element={<VideocoursePY1 />} />
//         <Route path="/videocoursePY2" element={<VideocoursePY2 />} />
//         <Route path="/videocourseC" element={<VideocourseC />} />
//         <Route path="/videocourseC1" element={<VideocourseC1 />} />
//         <Route path="/videocourseC2" element={<VideocourseC2 />} />
//         <Route path="/videocourseJS" element={<VideocourseJS />} />
//         <Route path="/videocourseJS1" element={<VideocourseJS1 />} />
//         <Route path="/videocourseJS2" element={<VideocourseJS2 />} />
//         <Route path="/course_textPY" element={<Course_textPY />} />
//         <Route path="/course_textPY1" element={<Course_textPY1 />} />
//         <Route path="/course_textC" element={<Course_textC />} />
//         <Route path="/course_textC1" element={<Course_textC1 />} />
//         <Route path="/course_textJS1" element={<Course_textJS1 />} />
//         <Route path="/course_textJS2" element={<Course_textJS2 />} />
//         <Route path="/leaders" element={<Leaders />} />
//         <Route path="/tasks" element={<Tasks />} />
//         <Route path="/tasksPY" element={<TasksPY />} />
//       </Routes>
//       </Suspense>
//     </Router>