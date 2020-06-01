import Vue from 'vue'
import VueRouter from 'vue-router'
import Error from '../views/Error.vue'
import Movie from '../views/Movie.vue'
import MovieDetail from '../views/MovieDetail.vue'
import Music from '../views/Music.vue'
import MusicList from '../views/MusicList.vue'
import Book from '../views/Book.vue'
import Photo from '../views/Photo.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/movie'
  },
  {
    path: '/Photo',
    component: Photo
  },
  {
    path: '/movie',
    component: Movie
  },
  {
    path: '/movie-detail',
    component: MovieDetail
  },
  {
    path: '/Music',
    component: Music
  },
  {
    path: '/music-list',
    component: MusicList
  },
  {
    path: '/Book',
    component: Book
  },
  {
    path: '*',
    component: Error
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
