import CostumeItemContext from "./context/useContext";
import UserContumContext from "./context/user";
import Apps from "./Apps";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeSwiper from "./component/swiper/HomeSwiper";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <UserContumContext>
        <CostumeItemContext >
          <Apps />
          {/* <HomeSwiper/> */}
        </CostumeItemContext>
      </UserContumContext>
    </div>

  );
}

export default App;
