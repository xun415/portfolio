import Routes from './router/index'
import {BrowserRouter} from "react-router-dom";
import ConfirmDialog from "@/components/ui/ConfirmDialog";

function App() {

  return (
        <BrowserRouter basename={'/portfolio'}>
            <Routes />
            <ConfirmDialog />
        </BrowserRouter>
  )
}

export default App
