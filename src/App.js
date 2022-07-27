import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import Toolbar from "./components/Toolbar";
import OneCard from "./pages/OneCard";
import All from "./pages/All";
import {useState} from "react";
import MoreInformation from './pages/MoreInformation';
import Conversation from './pages/Conversation';


function App() {
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState(null)
    const [posts, setPosts] = useState([])

    function addNewUser(item) {
        const user = {
            name: item.name,
            password: item.passOne,
            image: "https://encrypted-tbn0.gstatic.com/imagimage.pnges?q=tbn:ANd9GcTSeZc32CwtZTEtOUeBQrO92-Xo6F6gNLfr0w&usqp=CAU"
        }

        setUsers([...users, user])
    }

    return (
        <div className="App">

                <div className="container">
                    <BrowserRouter>
                        <Toolbar user={currentUser} setUser={setCurrentUser}/>
                        <Routes>
                            <Route path="/register" element={<RegisterPage addNewUser={addNewUser} />} />
                            <Route path="/" element={<LoginPage setUser={setCurrentUser} users={users}/>} />
                            <Route path="/profile" element={<ProfilePage user={currentUser} setUser={setCurrentUser}/>}/>

                            <Route path="/createPost" element={<MoreInformation user={currentUser} posts={posts} setPosts={setPosts}/>}/>
                            <Route path="/allPosts" element={<All posts={posts}/>}/>
                            <Route path="/single/:id" element={<OneCard posts={posts} users={users}/>}/>
                            <Route path="/conversation/:id" element={<Conversation posts={posts} users={users}/>}></Route>
                        </Routes>
                    </BrowserRouter>

                </div>
        </div>
    );
}

export default App;


