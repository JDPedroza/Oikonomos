import {createMuiTheme} from '@material-ui/core/styles'
import { esES } from '@material-ui/core/locale';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        primary : {
            main: '#77b516'
        },
        common:{
            white: 'white'
        },
        secondary: {
            main: '#616161'
        }
    },
    spacing: 10
}, esES)

export default theme;