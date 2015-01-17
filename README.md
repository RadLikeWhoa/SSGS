# [Super Simple Grid System](http://sacha.me/SSGS)

SSGS is a very easy-to-use grid system for the web. It allows you to quickly set up a responsive grid system using Sass.

[View it in action](http://sacha.me/SSGS)

## What's special about SSGS?

With SSGS, creating a responsive grid system is easy. You set your breakpoints, your gutters, include the file and then you're done. Yeah, it's really that easy. However, if you're happy with the default options you don't even have to set anything at all, just including the file is enough.

SSGS uses something similar to the [AMCSS](http://amcss.github.io) syntax for its components. You create grids using `data-grid` and columns using `data-col`. Modifiers are passed as the attribute value. Once you see an example you'll understand it right away.

To keep things small and efficient, SSGS's CSS output is optimised to be as small as possible so you don't have to worry about code bloat.

## Installation

* Using [bower](https://github.com/bower/bower): `bower install SSGS`
* Get the [.scss file](https://raw.github.com/RadLikeWhoa/SSGS/master/ssgs.scss) directly

## Usage

The following example creates a grid in which the columns span half the width on small screens and a quarter of the width on larger screens.

Column definitions follow the format {n}-{x}, meaning a column spanning {n} units of {x}. The prefixes are defined in your Sass inside the $ssgs-prefixes variable.

```html
<div data-grid>
  <div data-col="1-2 M1-4"></div>
  <div data-col="1-2 M1-4"></div>
  <div data-col="1-2 M1-4"></div>
  <div data-col="1-2 M1-4"></div>
</div>
```

```scss
$ssgs-columns: 2 4;
$ssgs-prefixes: (
  'M': '(min-width: 30em)'
);

@include 'ssgs';
```
