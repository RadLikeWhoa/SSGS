# SSGS—Super Simple Grid System

SSGS is a very basic grid system for the web. It allows you to quickly set up a responsive grid system using Sass.

## What's special about SSGS?

It's a fully fluid six-column grid with fixed-width gutters. It takes **only one variable** (the width of the gutters) so it's refreshingly easy to set up and use. There's no need to clutter your HTML with lots and lots of classes as you can easily use Sass's **`@extend`** function. Oh, and did I mention it's only about 60 lines of code?

## Links

[View the demo](http://codepen.io/RadLikeWhoa/full/mLIkK "Hosted on CodePen") or [download it right away](https://github.com/RadLikeWhoa/SSGS/zipball/master).

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

The only drawback I can think of right now is the dependency on `box-sizing: border-box;` to work properly. But that's only an issue if you work with IE prior to version 8. And there's even a neat [polyfill](https://github.com/Schepp/box-sizing-polyfill "Christian Schaefer's box-sizing polyfill.") available on GitHub. Since you're already working with Sass, just pop in Compass and import `compass/css3/box-sizing` to make it even easier.

And by the way, there's even a [plain old CSS version](http://sachaschmid.ch/ssgs/ssgs.css "Boo, you don't really use only CSS anymore, right?") available if you're really resistant to awesome technology like Sass.

## About the Author

My name is [Sacha](http://sachaschmid.ch) and I'm a 'front-end engineer' thingy from Switzerland. I tweet at [@RadLikeWhoa_](http://twitter.com/RadLikeWhoa_). I am also the creater of [kids](http://codepen.io/RadLikeWhoa/full/cAJEo) and [Readr](http://readrtheme.tumblr.com).