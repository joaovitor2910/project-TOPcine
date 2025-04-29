import {Route, Routes} from 'react-router-dom'

import Home from '../containers/Home'
import Movies from '../containers/movies'
import Series from '../containers/series'
import DefaultLayout from '../layout/DefaultLayout'
import Detalhes from '../containers/Detalhes'
import Search from '../containers/Search'

function Router() {


    return (
        <Routes>
            <Route element={<DefaultLayout/>}>
                <Route path='/' element={<Home />}/>
                <Route path='/filmes' element={<Movies/>}/>
                <Route path='/series' element={<Series/>}/>
                <Route path='/detalhes/:id' element={<Detalhes/>}/>
                <Route path='/search' element={<Search/>}/>
            </Route>
        </Routes>
    )
}

export default Router