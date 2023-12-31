import {useState,useEffect} from "react"
import styled from 'styled-components'
import gal from '../../img/gal.png'

import { menuItems } from '../../utils/menuItems'
import {AiFillFacebook, AiFillLinkedin, AiFillTwitterCircle} from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"


function Navigation({active, setActive}) {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight])

    useEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener('resize', updateSize)

        return () => window.removeEventListener('resize', updateSize)
    }, [])

     
    
    return (
            
            
            <div className='cont'>
                {  size[0]>=768 &&          
        <NavStyled>
              <div className="user-con">
                <img src={gal} alt="" />
                <div className="text">
                    <h2>NFTify</h2>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                
                    <AiFillLinkedin size={'30px'} color='#fc0373'/>
                    <AiFillFacebook size={'30px'} color='#fc0373'/>
                    <AiFillTwitterCircle size={'30px'} color='#fc0373'/>
                
            </div>
        </NavStyled>
        }

        {
            size[0]<=768 && 
            <HamStyled className='ham'>
                <GiHamburgerMenu size={'40px'}/>
            </HamStyled>
        }
            </div>
            
    )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 304px;
    height: 100%;
    background: #2e051d;
    border: none;
    backdrop-filter: blur(4.5px);
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
            background: black;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: #fff;
        }
        p{
            color: rgba(34, 34, 96, .6);
        }
    }

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: blue;
            padding-left: 1rem;
            position: relative;
            i{
                color:blue;
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
        li:hover{
            background-color: #fd1d43;
        }
       
    }
    .bottom-nav{
        display: flex;
        gap: 5px;
        
    }
    .bottom-nav:hover{
        color: blue;
        cursor: pointer;
    }

    .active{
        color: #fff !important;
        i{
            color:#fff !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }

    
`;


const HamStyled = styled.div`
    color: #fff;
    margin-top: 50px;
    margin-left: 30%;
    
`

export default Navigation