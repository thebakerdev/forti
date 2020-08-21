module.exports = {
    purge: {
        content: [
            'layouts/**/*.htm',
            'pages/**/*.htm',
            'partials/**/*.htm'
        ],
        options: {
            whitelist: ['overflow-hidden','text-quaternary'],
        }
    },
    theme: {
        fontFamily: {
            primary: ['Lato', 'sans-serif'],
            secondary: ['Merriweather', 'sans-serif'],
        },
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'tiny': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.5rem',
            '2xl': '1.750rem',
            '3xl': '2.25rem',
            '4xl': '3rem',
            '5xl': '4rem',
            '6xl': '4.2rem'
        },
        extend: {
            colors: {
                primary: '#306ecc',
                secondary: '#3DBCFC',
                tertiary: '#27AE60',
                quaternary: '#e74c3c',
                gray: {
                    100: '#F6F6F6',
                    200: '#969696',
                    300: '#343333'
                }
            }
        },
    },
    variants: {},
    plugins: [],
}