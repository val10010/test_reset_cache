const MuiButton = {
    root: {
        fontSize: '1rem',
        textTransform: 'inherit',
        transition: 'none',

        '&:hover': {
            transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
        },

        '&$disabled$outlinedPrimary': {
            color: '#00000042'
        },

        '&$outlined': {
            color: '#6D7880'
        },

        '&$outlinedPrimary': {
            fontWeight: 'bold',
            color: 'rgba(83, 167, 245, 1)',
            border: '1px solid rgba(159, 204, 245, 1)',

            '&:hover': {
                border: '1px solid rgb(78, 168, 251)',
                backgroundColor: 'rgba(38, 142, 253, 0.1)'
            }
        },

        '&$contained': {
            boxShadow: 'none',
            border: '1px solid transparent',

            '&$disabled': {
                pointerEvents: 'auto',
                backgroundColor: '#d8dce0',
                color: '#a0a3a6',

                '&:hover': {
                    boxShadow: 'none',
                    backgroundColor: '#d8dce0',
                    color: '#a0a3a6'
                }
            }
        },

        '&$containedPrimary:active': {
            boxShadow: 'none'
        },

        '&$containedSecondary:hover': {
            boxShadow: 'none'
        },

        '&$containedPrimary:hover': {
            boxShadow: 'none'
        },

        '&.btn': {
            padding: '0.6rem 1.142rem',
            minWidth: '10rem'
        },

        '&.btn.red': {
            border: '1px solid transparent',
            backgroundColor: '#f76565',
            color: '#fff'
        },

        '&.selected-menu-button-red': {
            color: '#f76565'
        },

        '&.selected-menu-button-red:hover': {
            background: 'rgba(255, 7, 7, 0.08)'
        },

        '&.btn.red:hover': {
            backgroundColor: '#c75050'
        },

        textDecoration: 'none',
        fontWeight: 'bold',
        borderRadius: '2px'
    }
};

export default MuiButton;
