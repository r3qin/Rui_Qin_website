import MyHeader from './components/MyHeader.jsx'
import MyTab from './components/MyTab.jsx'
import './MyHeader.css'
import my_photo from './images/photo.jpg'
import background_image from './images/background.jpg'
import { AiFillPhone } from 'react-icons/ai'
import { AiFillMail } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillWechat } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background_image})`}}>

      <MyHeader />
      <MyTab />
      
    </div>
  );
}

export default App;