import { HomePage, TasksPage, ProfilePage, DashboardPage, RequestFormPage } from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
    {
        path: '/tasks',
        element: TasksPage
    },
    {
        path: '/profile',
        element: ProfilePage
    },
    {
        path: '/home',
        element: HomePage
    },
    {
        path: '/dashboard',
        element: DashboardPage
    },
    {
        path:'requestForm',
        element: RequestFormPage
    }
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
