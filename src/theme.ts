const space = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '2rem',
  xl: '4rem',
  xxl: '5rem',
};

const sizes = {
  xs: '2rem',
  sm: '4rem',
  xl: '16rem',
};

const theme = {
  color: {
    darkShades: '#2A2F69',
    darkAccent: '#292965',
    main: '#422a76',
    lightShades: '#F8F6F8',
    error: { dark: '#b92e34', light: '#ff0000' },
    red: '#ff0000',
    green: '#addfad',
  },
  borderRadius: {
    sm: '0.625rem',
    md: '1.66rem',
    circle: '50%',
  },
  breakpoints: { xs: '20em', sm: '30em', md: '48em', lg: '62em', xl: '80em' },
  fontWeights: {
    light: 100,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  fontSizes: {
    xxs: '10px',
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  space,
  sizes,
};

export default theme;
