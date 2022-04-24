import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import Article from './pages/Article';

const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/articles/:id" element={<Article />} />
            </Routes>
        </Router>
    )
}

export default Rotas;