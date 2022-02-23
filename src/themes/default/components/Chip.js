const MuiChip = {
    root: {
        backgroundColor: '#ffffff',
        borderRadius: '4px',
        margin: '0 0.5rem 0.5rem 0',
        borderColor: '#26a0f5',
        color: '#26a0f5',

        '& .MuiChip-label': {
            lineHeight: '1rem'
        },

        '& svg': {
            color: '#26a0f5',
            width: '1rem'
        },

        '&$outlined': {
            borderColor: '#26a0f5',
            backgroundColor: '#ffffff'
        },

        '&[disabled]': {
            borderColor: '#d8d8d8',
            color: '#9d9fa2',

            '& svg': {
                color: '#d8d8d8'
            }
        }
    }
};

export default MuiChip;
