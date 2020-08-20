# Forti
A minimalist One-Page template built with TailwindCSS. The template is best suited for freelance portfolio or small agencies to showcase their work and services.

## Features
- Responsive

### Theme Options
The theme comes with page options for each section within the page. It comes with a few components that are extracted from Tailwindcss' utility classes. 

### Theme Customizations
Using **Laravel Mix**, its easy to customize and compile the themes' assets. To start you must first install the theme dependencies. 
```
npm install
```
Customizing theme colors and fonts can be done inside **tailwind.config.js** file. By default the file looks like this:
```
module.exports = {
    theme: {
        colors: {
            primary: '#6C63FF',
            secondary: '#8C87E6',
            tertiary: '#444444',
            error: '#ff6363',
            white: '#FFFFFF',
            lightGray: '#f9f9f9',
            gray: '#F3F3F3',
            transparent: 'transparent'
        },
        fontFamily: {
            body: ['Roboto','sans-serif'],
            display: ['Rubik', 'Roboto', 'sans-serif']
        }
    }
}
```
Make sure to add the font links in the **partials/meta.htm** when changing fonts. 

More Tailwindcss configuration can be found [here](https://tailwindcss.com/docs/configuration)

All scripts and styles can be found inside **assets/src** folder. 

### Compiling Assets
How to compile assets

Development Build
```
npm run dev 
```

Watching Development Build
```
npm run watch
```

Production Build
```
npm run prod
```

### Demo
- https://zenii.netlify.com/

### Credits to the authors of these libraries
- [Laravel Mix](https://laravel-mix.com/)

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details