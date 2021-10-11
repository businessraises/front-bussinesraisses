
import { UserProvider, UserConsumer, UserContext } from './context/UserContext'
import Routes from "./Routes";
import SendIcon from '@mui/icons-material/Send';
import Navbar from './components/navbar'
import {Box} from '@mui/material'
import './App.css'

function App() {
  return (
    <UserProvider>
      <Box
        sx={{
          backgroundColor: '#dce1de', 
          padding: 0, 
          margin: 0, 
          width: '100%',
          height: '100%'
        }}
      >
        <Routes />
      </Box>
    </UserProvider>
  );
}

export default App;
