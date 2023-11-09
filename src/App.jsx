import React, { Suspense, useState } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages'
import { ErrorBoundary, Layout } from './components'
import { routes } from './routes'

const App = () => {
    const [theme, colorMode] = useMode()

    return (
        <BrowserRouter>
            <Suspense fallback={'Loading...'}>
                <ErrorBoundary fallback={<p>Something went wrong</p>}>
                    <ColorModeContext.Provider value={colorMode}>
                        <ThemeProvider theme={theme}>
                            <CssBaseline />
                            {/* <div className="app"> */}
                            <Routes>
                                <Route path="/" element={<Login />} />
                                {routes.map((route, index) => {
                                    let mainRoute = []
                                    let childRoutes = []

                                    // map main routes
                                    if (route?.main) {
                                        mainRoute = [
                                            <Route
                                                key={route?.id}
                                                path={route?.path}
                                                element={
                                                    <Layout>
                                                        {route?.component}
                                                    </Layout>
                                                }
                                            />,
                                        ]
                                    }

                                    // map children routes
                                    if (route?.children.length > 0) {
                                        childRoutes = route?.children.map(
                                            (child, index) => (
                                                <Route
                                                    key={child?.id}
                                                    path={
                                                        route?.path +
                                                        child?.path
                                                    }
                                                    element={
                                                        <Layout>
                                                            {child?.component}
                                                        </Layout>
                                                    }
                                                />
                                            )
                                        )
                                    }

                                    return [...mainRoute, ...childRoutes]
                                })}

                                {/* 

                

                                {/* page not found route */}
                                <Route
                                    path="*"
                                    element={<div>Page Not Found</div>}
                                />
                            </Routes>
                            {/* </div> */}
                        </ThemeProvider>
                    </ColorModeContext.Provider>
                </ErrorBoundary>
            </Suspense>
        </BrowserRouter>
    )
}
// ReactDOM.render(<App />, document.getElementById('app'))
ReactDOM.createRoot(document.getElementById("app")).render(<App/>)
