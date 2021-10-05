import "./app.css";

import { UserProvider, UserConsumer, UserContext } from './context/UserContext'
import Routes from "./Routes";

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
