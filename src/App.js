import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Menu from "./components/Menu/Menu";
import AboutMe from "./components/AboutMe/AboutMe";
import PostList from "./components/PostList/PostList";
import PostDetails from "./components/PostDetails/PostDetails";
import Users from "./components/users";

function App() {
    return (
        <>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/post-list" element={<PostList />} />
                    <Route path="/post-details" element={<PostDetails />} />
                    <Route path="/users" element={<Users />} />
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default App;