import React,{Fragment} from 'react'
import Container from '@material-ui/core/Container';
import MenuAppBar from "../NavMenu/navMenu";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   main: {
     paddingTop:"40px",
     background:"#f9f9f9",
     height:"100vh"
   },
 }));
const Layout = (props) =>{

   const classes = useStyles();

   return(
      <Fragment>
         <MenuAppBar/>
         <main className={classes.main}>
            <Container maxWidth="lg">
               {props.children}
            </Container>
         </main>
      </Fragment>
   )
}
export default Layout;