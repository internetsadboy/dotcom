import Home from './components/Home';
import Biography from './components/Biography';
import Documentary from './components/Documentary';
import Code from './components/Code';
import ThirtyFiveMM from './components/ThirtyFiveMM';
import NotFound from './components/NotFound';
import Root from './components/Root';

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/biography',
        component: Biography
      },
      {
        path: '/documentary',
        component: Documentary
      },
      {
        path: '/code',
        component: Code
      },
      {
        path: '/35mm',
        component: ThirtyFiveMM
      },
      {
        path: '*',
        restricted: false,
        component: NotFound
      }
    ]
  }
];

export default routes;
