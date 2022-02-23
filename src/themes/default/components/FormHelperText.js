const MuiFormHelperText = {
    root: {
        'line-height': '1rem',
        '&$error': {
            lineHeight: '1rem',
            transform: 'translate3d(0,0,0)',
            animation: 'errorMsgAnimation 0.3s cubic-bezier(0.65, 0.05, 0.36, 1)'
        }
    }
};

export default MuiFormHelperText;
