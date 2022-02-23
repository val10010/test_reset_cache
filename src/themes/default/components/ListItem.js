const MuiListItem = {
    root: {
        '&$button:hover, &$selected': {
            color: '#006dcc',
            backgroundColor: 'rgba(33, 150, 243, 0.12)',

            '& .MuiListItemIcon-root, & .MuiListItemText-inset .MuiListItemText-primary': {
                color: '#006dcc'
            }
        }
    }
};

export default MuiListItem;
