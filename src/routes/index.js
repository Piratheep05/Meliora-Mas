import { lazy } from 'react'

// login page
const Login = lazy(() => import('../pages/Login'))

// home pages
const Landing = lazy(() => import('../pages/Home/Landing'))
const Sites = lazy(() => import('../pages/Home/Sites'))
const MeterTypes = lazy(() => import('../pages/Home/MeterTypes'))
const ViewMeters = lazy(() => import('../pages/Home/ViewMeters'))
const SummaryView = lazy(() => import('../pages/Home/SummaryView'))
const History = lazy(() => import('../pages/Home/History'))

// dashboard pages
const DashboardHome = lazy(() => import('../pages/Dashboard/DashboardHome'))
const CreateDashboard = lazy(() => import('../pages/Dashboard/CreateDashboard'))
const ViewDashboard = lazy(() => import('../pages/Dashboard/ViewDashboard'))

// reports pages
const ReportsHome = lazy(() => import('../pages/Reports/ReportsHome'))
const CreateReport = lazy(() => import('../pages/Reports/CreateReport'))
const ViewReport = lazy(() => import('../pages/Reports/ViewReport'))
const Subscription = lazy(() => import('../pages/Reports/Subscription'))

// settings pages
const SettingsHome = lazy(() => import('../pages/Settings/SettingsHome'))
const Notifications = lazy(() => import('../pages/Settings/Notifications'))

export const routes = [
    {
        id: 1,
        label: 'Home',
        icon: 'Home',
        path: '/home',
        main: true,
        hideFromSidebar: false,
        component: <Landing />,
        dropDown: false,
        children: [
            {
                id: 1,
                label: 'Sites',
                path: '/:departmentId/:departmentName',
                hideFromSidebar: false,
                component: <Sites />,
            },
            {
                id: 2,
                label: 'Meter Types',
                path: '/:departmentId/:departmentName/:siteId/:siteName',
                hideFromSidebar: false,
                component: <MeterTypes />,
            },
            {
                id: 3,
                label: 'Meters',
                path: '/:departmentId/:departmentName/:siteId/:siteName/:meterType',
                hideFromSidebar: false,
                component: <ViewMeters />,
            },
            {
                id: 4,
                label: 'Summary',
                path: '/:departmentId/:departmentName/:siteId/:siteName/:meterType/:meterId/:meterName',
                hideFromSidebar: false,
                component: <SummaryView />,
            },
            {
                id: 5,
                label: 'History',
                path: '/:departmentId/:departmentName/:siteId/:siteName/:meterType/:meterId/:meterName/history',
                hideFromSidebar: false,
                component: <History />,
            },
        ],
    },
    {
        id: 2,
        label: 'Dashboard',
        icon: 'Dashboard',
        path: '/dashboard',
        main: true,
        hideFromSidebar: false,
        component: <DashboardHome />,
        dropDown: false,
        children: [
            {
                id: 1,
                label: 'View',
                path: '/:dashboardId/:dashboardName',
                hideFromSidebar: false,
                component: <ViewDashboard />,
            },
            {
                id: 2,
                label: 'Create',
                path: '/create',
                hideFromSidebar: false,
                component: <CreateDashboard />,
            },
            {
                id: 3,
                label: 'Edit',
                path: '/:dashboardId/:dashboardName/edit',
                hideFromSidebar: false,
                component: <CreateDashboard />,
            },
        ],
    },
    {
        id: 3,
        label: 'Reports',
        icon: 'Assignment',
        path: '/reports',
        main: true,
        hideFromSidebar: false,
        component: <ReportsHome />,
        dropDown: false,
        children: [
            {
                id: 1,
                label: 'View',
                path: '/:reportId/:reportName',
                hideFromSidebar: false,
                component: <ViewReport />,
            },
            {
                id: 2,
                label: 'Create',
                path: '/create',
                hideFromSidebar: false,
                component: <CreateReport />,
            },
            {
                id: 3,
                label: 'Edit',
                path: '/:reportId/:reportName/edit',
                hideFromSidebar: false,
                component: <CreateReport />,
            },
            {
                id: 4,
                label: 'Subscription',
                path: '/:reportId/:reportName/subscription',
                hideFromSidebar: false,
                component: <Subscription />,
            },
        ],
    },
    {
        id: 4,
        label: 'Settings',
        icon: 'Settings',
        path: '/settings',
        main: true,
        hideFromSidebar: false,
        component: <SettingsHome />,
        dropDown: false,
        children: [
            {
                id: 1,
                label: 'Notification',
                path: '/notification',
                hideFromSidebar: false,
                component: <Notifications />,
            },
        ],
    },
]
