import { BiCopyright } from 'react-icons/bi';

const Layout = (props) => {
  return (
    <div>
        {props.children}
        <h2 style={{display:"flex" , width:"100%", height:"10vh", alignItems:"center", backgroundColor:"lightblue" , color:"blue", fontSize:"20px"}}>
            <BiCopyright /> - 2022 - Yanina Charas
        </h2>
    </div>
  )
}

export default Layout