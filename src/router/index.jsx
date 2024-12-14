import React, {lazy} from 'react'
import { Routes, Route } from 'react-router-dom'
import {Suspense} from "@/utils"
import Auth from '@/pages/auth/Auth'
import Layout from '@/pages/layout/Layout'
const Home = lazy(()=> import("@/pages/home/Home"))
const Dashboard = lazy(()=> import("@/pages/dashboard/Dashboard"))
const Login = lazy(()=> import("@/pages/login/Login"))
const NotFound = lazy(()=> import("@/pages/not-found/NotFound"))

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
        <Route path='login' element={<Login/>}/>
        <Route path='/' element={<Auth/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
        </Route>
    </Routes>
  )
}

export default Routers