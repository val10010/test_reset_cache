import { createMuiTheme } from '@material-ui/core/styles';
import MuiTab from './components/Tab';
import MuiMenu from './components/Menu';
import MuiChip from './components/Chip';
import MuiRadio from './components/Radio';
import MuiInput from './components/Input';
import MuiTable from './components/Table';
import MuiSlider from './components/Slider';
import MuiDrawer from './components/Drawer';
import MuiDialog from './components/Dialog';
import MuiAppBar from './components/AppBar';
import MuiButton from './components/Button';
import MuiToolbar from './components/Toolbar';
import MuiSvgIcon from './components/SvgIcon';
import MuiListItem from './components/ListItem';
import MuiMenuItem from './components/MenuItem';
import MuiTableCell from './components/TableCell';
import MuiInputLabel from './components/InputLabel';
import MuiDialogTitle from './components/DialogTitle';
import MuiAutocomplete from './components/Autocomplete';
import MuiListItemIcon from './components/ListItemIcon';
import MuiListItemText from './components/ListItemText';
import MuiDialogContent from './components/DialogContent';
import MuiFormHelperText from './components/FormHelperText';
import MuiPickersBasePicker from './components/PickersBasePicker';

export const theme = createMuiTheme({
    typography: {
        fontFamily: '"Open Sans", "Arial", sans-serif',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500
    },
    palette: {
        primary: {
            light: 'rgba(79, 195, 247, 1)',
            main: 'rgba(33, 150, 243, 1)',
            dark: 'rgba(2, 136, 209, 1)',
            contrastText: '#fff'
        },
        secondary: {
            light: 'rgba(122, 151, 54, 1)',
            main: 'rgba(126, 156, 25, 1)',
            dark: 'rgba(106, 132, 20, 1)',
            contrastText: '#fff'
        }
    },
    overrides: {
        MuiTab,
        MuiChip,
        MuiMenu,
        MuiRadio,
        MuiInput,
        MuiTable,
        MuiSlider,
        MuiAppBar,
        MuiButton,
        MuiDrawer,
        MuiDialog,
        MuiSvgIcon,
        MuiToolbar,
        MuiListItem,
        MuiMenuItem,
        MuiTableCell,
        MuiInputLabel,
        MuiDialogTitle,
        MuiAutocomplete,
        MuiListItemIcon,
        MuiListItemText,
        MuiDialogContent,
        MuiFormHelperText,
        MuiPickersBasePicker
    }
});
