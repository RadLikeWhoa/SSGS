# SSGS—Super Simple Grid System

SSGS is a very basic grid system for the web. It allows you to quickly set up a responsive grid system using Sass.

## What's special about SSGS?

It's a fully fluid six-column grid with fixed-width gutters. It takes **only one variable** (the width of the gutters) so it's refreshingly easy to set up and use. There's no need to clutter your HTML with lots and lots of classes as you can easily use Sass's **`@extend`** function. Oh, and did I mention it's only about 60 lines of (unprocessed) code?

[View the demo](http://sacha.me/SSGS)

## Installation

* Using [bower](https://github.com/bower/bower): `bower install SSGS`
* Clone the git repo: `git clone git@github.com:RadLikeWhoa/SSGS.git`
* Get the [.scss file](https://raw.github.com/RadLikeWhoa/SSGS/master/ssgs.scss) directly

## Usage

```html
<div class="grid">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</div>
```

```scss
.item {
    @include grid-col;

    @media (min-width: 30em) {
        @include grid-col("one half");
    }

    @media (min-width: 40em) {
        @include grid-col("one third");
    }

    @media (min-width: 50em) {
        @include grid-col("one quarter");
    }

    @media (min-width: 60em) {
        @include grid-col("one sixth");
    }
}
```

## Drawbacks & Stuff

The only drawback I can think of right now is the dependency on `box-sizing: border-box;` to work properly. But that's only an issue if you work with IE prior to version 8. And there's even a neat [polyfill](https://github.com/Schepp/box-sizing-polyfill) available on GitHub. Since you're already working with Sass, just pop in Compass and import `compass/css3/box-sizing` to make it even easier.
