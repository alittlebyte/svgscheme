import { makeStyles } from '@material-ui/core/styles';

const useStylesSchemeAndControls = makeStyles((theme) =>({
  scheme_main: {
    height:'100%',
  },

  scheme_err: {
    width: '80%',
    background: '#ed4337',
    margin:'0 0 40px 40px',
    padding:'20px',
    textAlign: 'center',
  },

	right_nav: {
  	position: 'absolute',
    [theme.breakpoints.up('bp_320')]: {
      top: 280,
      right: 20,
    },
    [theme.breakpoints.up('bp_768')]: {
      top: 450,
      right: 60,
    },
    [theme.breakpoints.up('bp_1280')]: {
      top: 1350,
      right: 60,
    },
    [theme.breakpoints.up('bp_1440')]: {
      top: 1450,
      right: 60,
    },
    [theme.breakpoints.up('bp_1900')]: {
      top: 1650,
      right: 60,
    },
	},

  right_nav__wrap: {
    marginBottom: 8,
    '&:last-child': {
      marginBottom: 0,
    },
  },

  pagination: {
    position: 'absolute',
    display: 'flex',
    [theme.breakpoints.up('bp_320')]: {
      flexDirection:'row',
      left: 0,
      top: 210,
    },
    [theme.breakpoints.up('bp_768')]: {
      flexDirection:'row',
      left: 10,
      top: 480,
    },
    [theme.breakpoints.up('bp_1280')]: {
      flexDirection:'row',
      left: 120,
      top: 620,
    },
  },

  pagination_item: {
    display: 'flex',
    [theme.breakpoints.up('bp_320')]: {
      flexDirection:'row',
      marginTop: -50,
      marginLeft: 2,
    },
    [theme.breakpoints.up('bp_1280')]: {
      flexDirection:'row',
      marginTop: 0,
      marginLeft: 36,
    },
  },

  search_wrap: {
    position:'relative',
    left: 0,
    width:'100%',
    background: theme.palette.primary.black_10,
    [theme.breakpoints.up('bp_320')]: {
      top: -100,
      height: 100,
      padding:'0 20px',
    },
    [theme.breakpoints.up('bp_1280')]: {
      top: -200,
      height: 200,
      padding:'0 100px',
    },
  },

  search_input:{
    position:'relative',
    transform:'translateY(-50%)',
    width:'100%',
    borderRadius:'8px',
    fontWeight:'bold',
    [theme.breakpoints.up('bp_320')]: {
      top: 50,
      height: 40,
      fontSize:'12px',
      paddingLeft: 36,
    },
    [theme.breakpoints.up('bp_1280')]: {
      top: 100,
      height: 80,
      fontSize:'24px',
      paddingLeft: 80,
      margin:'0 50px',
    },
  },

  search_icon__wrap:{
    background:'transparent',
    pointerEvents: 'none',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },

  search_icon: {
    position:'relative',
    pointerEvents:'auto',
    [theme.breakpoints.up('bp_320')]: {
      top: 1,
      left: 12,
      height: 16,
      width: 16,
    },
    [theme.breakpoints.up('bp_1280')]: {
      top: 5,
      left: 70,
      height: 32,
      width: 32,
    },
  },

  search_counter:{
    position: 'absolute',
    fontWeight: 'bold',
    [theme.breakpoints.up('bp_320')]: {
      right: 26,
      top: 42,
      fontSize: '9px',
    },
    [theme.breakpoints.up('bp_768')]: {
      right: 45,
      top: 45,
      fontSize: '12px',
    },
    [theme.breakpoints.up('bp_1280')]: {
      right: 75,
      top: 90,
      fontSize: '16px',
    },
  },

  search_results: {
    position: 'relative',
    left: '50%',
    width: '100%',
    transform: 'translateX(-50%)',
    background: theme.palette.primary.white,
    display: 'flex',
    flexDirection: 'column',
    borderTop: `1px solid ${theme.palette.primary.black_100}`,
    zIndex: 99,
    top: 4,
    [theme.breakpoints.up('bp_1280')]: {
      top: 24,
      marginLeft: 50,
    },
  },

  search_results__item: {
    cursor: 'pointer',
    background: 'transparent',
    textAlign: 'left',
    fontWeight: '500',
    '&:hover':{
      background: theme.palette.primary.black_100,
      color: theme.palette.primary.white,
    },
    '& p:not(:first-child)':{
      paddingTop:2,
      fontWeight:'400',
      color: theme.palette.primary.black_60,
    },
    [theme.breakpoints.up('bp_320')]: {
      padding: '10px 20px',
      fontSize: '10px',
      '& p:not(:first-child)':{
        fontSize:'8px',
      },
    },
    [theme.breakpoints.up('bp_768')]: {
      padding: '15px 30px',
      fontSize: '14px',
      '& p:not(:first-child)':{
        fontSize:'10px',
      },
    },
    [theme.breakpoints.up('bp_1280')]: {
      padding: '20px 40px',
      fontSize: '18px',
      '& p:not(:first-child)':{
        fontSize: '12px',
      },
    },
  },

  popup_wrap: {
    height: '50px',
    width: '75px',
    right: 0,
    left: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  popup_inner: {
    width: 'max-content',
    fontSize: '10px',
    borderRadius: '4px',
    background: theme.palette.primary.black_90,
    color: theme.palette.primary.white,
    textAlign: 'center',
    padding: '4px 8px 5px',
    margin: '1px',
  },

  popup_inner_wrap: {
    maxHeight: '24px',
    display: 'flex',
    flexDirection: 'row',
  },

  popup_mod: {
    background: theme.palette.primary.yellow,
    color: theme.palette.primary.black_90,
  },

}));

export default useStylesSchemeAndControls;