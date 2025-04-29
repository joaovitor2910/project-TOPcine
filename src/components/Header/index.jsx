import { createContext, useContext, useState } from 'react'
import Logo from '../../assets/logo-topcine.png'
import IconSearch from '../../assets/search.png'
import { Container, Li, Menu, Search } from './styles'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

function Header() {
    const [ changeBackground, setChangeBackground] = useState(false)
    const { pathname  } = useLocation()
    const {search, setSearch} = useContext(UserContext)

    const navigate = useNavigate()

    window.onscroll = () => {
        if (!changeBackground && window.pageYOffset > 150) {
            setChangeBackground(true)
        }
        if (changeBackground && window.pageYOffset <= 150) {
            setChangeBackground(false)
        }
    }

    return (
        <Container $changeBackground={changeBackground}>
            <img src={Logo} alt ="logo-topcine" />
            <Search>
                <input type="search" placeholder='Pesquise um filme ou série especifica' onChange={(e) => setSearch(e.target.value)}  />
                <img onClick={() => navigate('/search')}
                 src={IconSearch} alt ="icon-search" />
            </Search>
            <Menu>
                <Li $isActive={pathname === '/'}>
                    <Link  to='/'>Home</Link>
                </Li>
                <Li $isActive={pathname.includes('filmes')} >
                    <Link to="/filmes">Filmes</Link>
                </Li>
                <Li $isActive={pathname.includes('series')}>
                    <Link to='/series'>Séries</Link>
                </Li>
            </Menu>
            
        </Container>
    )
}

export default Header