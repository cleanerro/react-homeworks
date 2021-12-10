import React from 'react'
import PreJunior from "./pages/PreJunior";
import {Navigate, Route, Routes} from "react-router-dom";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // add paths
}

function MyRoutes() {
    return (
        <div>
            <Routes>


                в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR
                exact нужен чтоб указать полное совподение (что после '/' ничего не будет)
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                // add routes
                <Route path="404" element={<h1>404: PAGE NOT FOUND</h1>}/>
                <Route path="*" element={<Navigate to="/404"/>}/>

            </Routes>
        </div>
    )
}

export default MyRoutes
