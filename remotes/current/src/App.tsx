import { lazy, Suspense } from 'react';

// @ts-ignore
const Remote = lazy(() => import('remote_old/Page'));

function App() {
  return (
    <Suspense>
      <Remote />
    </Suspense>
  );
}

export default App;
