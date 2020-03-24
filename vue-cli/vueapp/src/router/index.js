import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '../views/Movie'
import MovieDetail from '../views/MovieDetail.vue'
import Music from '../views/Music'
import MusicList from '../views/MusicList'
import Book from '../views/Book'
import Photo from '../views/Photo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/movie'
  },{
    path: '/movie',
    component: Movie
  },{
    path: '/movie-detail',
    component: MovieDetail
  },{
    path: '/music',
    component: Music
  },{
    path: '/book',
    component: Book
  },{
    path: '/photo',
    component: Photo
  },{
    path: '/music-list',
    component: MusicList
  },{
    path: '*',//404
    component: Error
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
