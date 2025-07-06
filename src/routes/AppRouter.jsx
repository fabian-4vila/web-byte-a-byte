import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home' ;
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Forbidden from '../pages/Forbidden';
import PostDetail from '../pages/PostDetail';
import NotFound from '../pages/NotFound';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/403" element={<Forbidden />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
