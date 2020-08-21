# Forti
A minimalist One-Page template built with TailwindCSS. The template is best suited for freelancers or small agencies to showcase their work and services.

## Features
- Responsive
- Small CSS size
- Built-in theme options
- Theme Color Picker
- Built using [Tailwindcss](https://tailwindcss.com/)
- Laravel Mix

### Theme Options
The theme comes with customization options that control each section of the page. It comes with a color picker to override the theme's default colors. In case you want more control over the customization, you can fine-tune the theme using Laravel Mix and TailwindCss. 

### Customization 
Basic theme configuration can be found inside the **tailwind.config.js". It comes with font & colors config. 

First install theme dependencies
```
npm install
```
Build the assets
```
npm run dev
```
Watch for theme changes 
```
npm run watch
```
Build for production
```
npm run prod
```
Running build command minifies and removes unused CSS.

### Changing Fonts
- Load your preferred fonts(ex: google fonts) inside the **scripts.htm** partial. 
```
WebFontConfig = {
    google: { families: [ 'Lato:400,700', 'Merriweather:400,700'] }
};    
```
- Update the **tailwind.config.js** with the loaded fonts. The theme uses 2 font families. Primary for the whole page and secondary for headings.
- Recompile the assets

### Contact Form 
The theme does not rely to any plugins by default, so its up to the user to implement their own form submission. An example is to use [Magic Forms](https://octobercms.com/plugin/martin-forms). Here's the steps:
- Add generic ajax form inside the homepage in the pages section and add validation rules. 
- Replace the form inside **contact.htm** with these:
```
 <form id="contact-form" class="text-left shadow-lg border border-gray-100 px-8 py-12" novalidate data-request="{{ genericForm }}::onFormSubmit">

    {{ form_token() }}
    
    <div id="{{ genericForm }}_forms_flash"></div>
    
    <div class="form-group mb-6">
            <label for="name">Name</label>
            <input type="text" id="name" class="input" name="name">
    </div>
    <div class="form-group mb-6">
        <label for="email">Email</label>
        <input type="email" id="email" class="input" name="email">
    </div>
    <div class="form-group mb-8">
        <label for="message">Message</label>
        <textarea id="message" class="input h-32" name="message"></textarea>
    </div>
    <button type="submit" class="btn btn--primary btn--full">Send</button>
</form>
```
- Remove the validation code inside **assets/src/js/app.js** and recompile. Magic Forms has its on validation. 

### Demo
- https://forti-theme.netlify.app/

### Credits to the authors of these great libraries
- [Laravel Mix](https://laravel-mix.com/)
- [Anime.js](https://animejs.com/)
- [Validate.js](https://validatejs.org/)
- [moveTo](https://github.com/hsnaydd/moveTo)
- [Glider.js](https://glidejs.com/)
- [Tailwindcss](https://tailwindcss.com/)
- [Iconfont](https://icofont.com/)
- [Simpleicons](https://simpleicons.org/)

### Credits to these awesome people for their photos 
- [https://unsplash.com/@marty](https://unsplash.com/@marty)
- [https://unsplash.com/@kevnbhagat](https://unsplash.com/@kevnbhagat)
- [https://unsplash.com/@lum3n](https://unsplash.com/@lum3n)
- [https://unsplash.com/@georgie_cobbs](https://unsplash.com/@georgie_cobbs)
- [https://unsplash.com/@benkolde](https://unsplash.com/@benkolde)
- [https://unsplash.com/@deannaalys](https://unsplash.com/@deannaalys)
- [https://unsplash.com/@clemono2](https://unsplash.com/@clemono2)
- [https://unsplash.com/@gabriellefaithhenderson](https://unsplash.com/@gabriellefaithhenderson)

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details