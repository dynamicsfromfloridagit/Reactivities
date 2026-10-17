import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

import ActivityDetailsPage from "../../features/activities/details/ActivityDetailsPage";
import ActivityForm from "../../features/activities/form/ActivityForm";
import Counter from "../../features/counter/Counter";
//import type { JSX } from "react/jsx-runtime";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'activities', element: <ActivityDashboard /> },
            { path: 'activities/:id', element: <ActivityDetailsPage/> },
            { path: 'createActivity', element: <ActivityForm key='create' /> },
            { path: 'manage/:id', element: <ActivityForm /> },
            { path: 'counter', element: <Counter /> },
        ]
    },
]);

// function createBrowserRouter(arg0: { path: string; element: JSX.Element; children: never[]; }[]) {
//     throw new Error("Function not implemented.");
// }
