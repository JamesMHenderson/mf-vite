import {lazy, Suspense} from 'react';


// @ts-ignore
const Remote = lazy(() => import('template/Page'))

function App() {
  return (
      <>
        <div>Host</div>
        <Suspense fallback="Remote Fallback"><Remote /></Suspense>
      </>
  );
}

export default App;
