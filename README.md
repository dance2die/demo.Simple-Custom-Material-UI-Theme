# What?

Create your own Material UI theme from scratch using available online tools.

## Tools

1. [Create MUI Theme][theme-tool] site ("Theme Tool" hereafter)
2. [Material Color Tool][color-tool] (link can be found from 'Create MUI Theme' site)

## Steps

Very simple, suprisingly.

1. Create a new primary/secondary theme colors from [Material Color Tool][color-tool]
2. Paste the current URL in the address bar in [Theme Tool][theme-tool]
3. Create a new theme folder (only to colocate theme-related files)
4. Create `index.js` and paste the code in the left bottom of "Theme Tool".
5. Create `theme.json` and paste the code in the right bottom of "Theme Tool".
   - Make sure to delete the comment `/* src/ui/theme/theme.json */` as JSON doesn't allow comments.
6. Import `ThemeProvider` from `@material-ui/core/styles` under where theme should be available (Mostly around `<App />`)
7. Import the `theme` copied in step 4 (`import theme from "./theme"`)

You can follow along the rest in [the official Material UI site](https://material-ui.com/customization/theming/) on how to use themes.

[theme-tool]: https://react-theming.github.io/create-mui-theme/
[color-tool]: https://material.io/resources/color
