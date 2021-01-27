import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    ListWrapper:{
        padding:"0",
        overflowY:"scroll",
        height:"100%",
    },
    searchWrapper:{
        padding:"10px",
        background:"#f6f6f6",
    },
}));

export { useStyles };

