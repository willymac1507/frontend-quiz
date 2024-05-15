/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'selector',
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        fontFamily: {
            sans: ['Rubik', 'sans-serif']
        },
        extend: {
            backgroundImage: {
                'mobile-light': "url('../images/pattern-background-mobile-light.svg')",
                'mobile-dark': "url('../images/pattern-background-mobile-dark.svg')",
            },
            colors: {
                accent: {
                    purple: '#a729f5',
                    green: '#26d782',
                    red: '#ee5454',
                },
                brand: {
                    darkest: '#313e51',
                    darker: '#3b4d66',
                    dark: '#626c74',
                    light: '#abc1e1',
                    lighter: '#f4f6fa',
                    lightest: '#fff',
                },
                background: {
                    purple: '#f6e7ff',
                    green: '#e0fdef',
                    blue: '#ebf0ff',
                    orange: '#fff1e9'
                },
            },
            // fontSize: {
            //     nav: {
            //         sm: ['18px', '18px'],
            //         md: ['18px', '18px'],
            //         lg: ['18px', '18px'],
            //         xl: ['18px', '18px'],
            //     },
            //     title: {
            //         sm: ['40px', '40px'],
            //         md: ['40px', '40px'],
            //         lg: ['40px', '40px'],
            //         xl: ['40px', '40px'],
            //     },
            //     subtitle: {
            //         sm: ['14px', '21px'],
            //         md: ['14px', '21px'],
            //         lg: ['14px', '21px'],
            //         xl: ['14px', '21px'],
            //     },
            //     question: {
            //         sm: ['20px', '24px'],
            //         md: ['20px', '24px'],
            //         lg: ['20px', '24px'],
            //         xl: ['20px', '24px'],
            //     },
            //     answer: {
            //         sm: ['18px', '18px'],
            //         md: ['18px', '18px'],
            //         lg: ['18px', '18px'],
            //         xl: ['18px', '18px'],
            //     }
            // },
        }

    },

    plugins: [],
}

