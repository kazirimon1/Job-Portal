import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main/Main';
import Home from '../../Pages/Home/Home';
import Jobs from '../../Pages/Home/Jobs/Jobs';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    return fetch(`jobs.json`);
                },


            },
            {
                path: '/jobs',
                element: <Jobs></Jobs>,
                loader: async () => {
                    return fetch(`jobs.json`);
                },
            }


        ]
    }
])



export default router;