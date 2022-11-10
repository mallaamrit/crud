import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventDetails from "../views/EventDetails.vue";
import AboutView from "../views/AboutView.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
     {
      path: "/",
      name: "EventList",
      component: EventList,
      // props: route => ({page: parseInt(royute.query.page) || 1}) // if page exists parse the string to an integer, otherwise return 1
    },
     {
      path: "/event/:id",
      props:true,
      name: "EventDetails",
      component: EventDetails,
    },
    {
      path: "/about",
      name: "About",
      component:"AboutView"
      
    },
  ],
});

export default router;
