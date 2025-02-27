import { lazy } from "react";

const routes = {
  admin: [
    { path: "/bookingsHis", component: lazy(() => import("./pages/Admin/BookingsHis")) },
    { path: "/paymentsHis", component: lazy(() => import("./component/PaymentsHis")) },
    { path:"/RoomCr" , component: lazy(() =>import("./pages/Admin/RoomCr"))},
    { path:"/RoomEdit" , component: lazy(() =>import("./pages/Admin/RoomEdit"))},
    { path:"/Roomget" , component: lazy(() =>import("./pages/Admin/Roomget"))},
    { path:"/RoomShow" , component: lazy(() =>import("./pages/Admin/RoomShow"))},
    
  ],
  customer: [
    { path: "/rooms", component: lazy(() => import("./pages/Customer/Rooms")) },
    { path: "/bookings", component: lazy(() => import("./pages/Customer/Booking")) },
    { path: "/payments", component: lazy(() => import("./pages/Customer/Payments")) },
    { path: "/Profile", component: lazy(() => import("./pages/Customer/Profile")) },
    { path:"./FindBooking" ,component:lazy(()=>import("./pages/Customer/FIndBooking"))},
    { path :"./CustBook", component: lazy(()=>("./pages/Customer/CustBook"))},
    { path :"./Booked", component: lazy(()=>("./pages/Customer/Booked"))}
  ],
};

export default routes;
