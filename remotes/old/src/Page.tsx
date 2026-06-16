import { useState } from 'react';

export const Page = () => {
  const [state] = useState(0);

  return <div>{state}</div>;
};

const RemoteApp = () => <Page />;
export default RemoteApp;
