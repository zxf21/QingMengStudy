import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '../views/Movie.vue'
import Music from '../views/Music.vue'
import Book from '../views/Book.vue'
import Photo from '../views/Photo.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/movie',
    component: Movie
  },
  {
    path: '/music',
    component: Music
  },
  {
    path: '/book',
    component: Book
  },
  {
    path: '/photo',
    component: Photo
  },
]

const router = new VueRouter({
  routes
})

export default router
