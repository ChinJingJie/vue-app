import {createRouter,createWebHistory} from 'vue-router'
import AppHome from './pages/AppHome'
import DcHeros from './pages/DcHeros'
import AppCalendar from './pages/AppCalendar'
import AppMarkdown from './pages/AppMarkdown'
import SliderCarousel from './pages/SliderCarousel'

const routes = [
    { path: '/', component: AppHome },
    { path: '/dc-heros', component: DcHeros },
    { path: '/calendar', component: AppCalendar },
    { path: '/markdown', component: AppMarkdown },
    { path: '/carousel', component: SliderCarousel },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;