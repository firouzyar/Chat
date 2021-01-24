import React,{Fragment} from 'react'
import Container from '@material-ui/core/Container';
import MenuAppBar from "../NavMenu/navMenu";


const Layout = (props) =>{

   return(
      <Fragment>
         <MenuAppBar/>
         <main >
            <Container maxWidth="lg">
               {props.children}
            </Container>
         </main>
      </Fragment>
   )
}
export default Layout;