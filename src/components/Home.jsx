import React from 'react'
import Navbar from './Navbar'
import PopularTechnology from './PopularTechnology'
import Course from './Course'
import PopularRoute from './PopularRoute'
import Slider from './Slider'
import NewPost from './NewPost'
import Footer from './Footer'
import Courses from './Courses'
import CourseDetail from './CourseDetail'
import Posts from './Posts'
import PostDetail from './PostDetail'

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <div className="container">
        <PostDetail />
        <PopularTechnology />
        <Course />
        <PopularRoute />
        <NewPost />
        <Courses />
      </div>
      <Footer />
    </>
  )
}
