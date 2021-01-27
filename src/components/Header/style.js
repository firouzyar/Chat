import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({

    header:{
        background:"#0bc1ea",
        color:"#fff",
        display: "flex",
        alignItems: "center",
        padding:" 15px",
    },
    backIcon:{
        color:"#fff",
        marginRight:"10px",
    },

}));

export { useStyles };

