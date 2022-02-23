const MuiInput = {
    root: {
        backgroundColor: 'rgba(246, 251, 255, 1)',

        '&$error': {
            backgroundColor: 'rgba(255,1,1,0.06)'
        },

        '&$underline': {
            '&:before': {
                borderBottom: '1px solid #d8d8d8'
            },

            '&:hover:not(.Mui-disabled):before': {
                borderBottom: '1px solid rgba(33, 150, 243, 1)'
            },

            '&:after': {
                borderBottom: '1px solid rgba(33, 150, 243, 1)'
            }
        },

        '&$disabled': {
            backgroundColor: '#f1f1f1',

            '.input-inprogress &': {
                backgroundColor: 'transparent'
            }
        }
    },

    input: {
        fontWeight: '400',
        padding: '1rem 1rem 1rem 0.7rem',
        height: '1.15rem',
        '&::placeholder': {
            fontWeight: '400'
        },
        '.wc-edit-input &': {
            fontSize: '0.857rem',
            color: '#000',
            '&:disabled': {
                color: 'rgba(0, 0, 0, 0.38)'
            }
        }
    }
};

export default MuiInput;
