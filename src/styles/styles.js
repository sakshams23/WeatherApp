import { makeStyles, createTheme } from "@material-ui/core/styles";
import { amber, blueGrey } from "@material-ui/core/colors";

export const useStyles = makeStyles({
    input: {
        "& .MuiInput-underline:before": {
            borderBottom: "2px solid white",
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid white",
        },
        margin: "5px 2px",
        color: "white !important",
        fontSize: "15px !important",
    },
    cardWarm: {
        minWidth: "140px",
        width: "200px",
        marginBottom: "20px",
        backgroundColor: "rgb(255, 229, 180, 0.6)",
        
    },
    cardCold: {
        minWidth: "140px",
        width: "200px",
        marginBottom: "20px",
        backgroundColor: "rgba(179, 205, 224, 0.6)",
    },
    forecast: {
        position: "relative ",
        bottom: 10,
    },
    
});

export const theme = createTheme({
    palette: {
        primary: {
            main:'#ffffff',
        },
        secondary: {
            main: '#ffa726',
        },
        cold: {
            main: '#29b6f6',
        },
    },
    typography:{
            fontFamily:'Helvetica',
            textTransform:'none',
            fontSize:15,
        
    },
});