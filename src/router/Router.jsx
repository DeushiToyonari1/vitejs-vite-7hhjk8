import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { Header } from "../components/atoms/layout/Header";
import { HeaderOnly } from "../components/templates/HeaderOnly";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<><Header /><Top /></>} />
                <Route path="/users" element={<HeaderOnly><Users /></HeaderOnly>} />
            </Routes>
        </BrowserRouter>
    );
}