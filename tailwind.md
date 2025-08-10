Upgrade guide
Upgrading your Tailwind CSS projects from v3 to v4.

Tailwind CSS v4.0 is a new major version of the framework, so while we've worked really hard to minimize breaking changes, some updates are necessary. This guide outlines all the steps required to upgrade your projects from v3 to v4.

Tailwind CSS v4.0 is designed for Safari 16.4+, Chrome 111+, and Firefox 128+. If you need to support older browsers, stick with v3.4 until your browser support requirements change.

Using the upgrade tool
If you'd like to upgrade a project from v3 to v4, you can use our upgrade tool to do the vast majority of the heavy lifting for you:

Terminal
$ npx @tailwindcss/upgrade
For most projects, the upgrade tool will automate the entire migration process including updating your dependencies, migrating your configuration file to CSS, and handling any changes to your template files.

The upgrade tool requires Node.js 20 or higher, so ensure your environment is updated before running it.

We recommend running the upgrade tool in a new branch, then carefully reviewing the diff and testing your project in the browser to make sure all of the changes look correct. You may need to tweak a few things by hand in complex projects, but the tool will save you a ton of time either way.

It's also a good idea to go over all of the breaking changes in v4 and get a good understanding of what's changed, in case there are other things you need to update in your project that the upgrade tool doesn't catch.

Upgrading manually
Using PostCSS
In v3, the tailwindcss package was a PostCSS plugin, but in v4 the PostCSS plugin lives in a dedicated @tailwindcss/postcss package.

Additionally, in v4 imports and vendor prefixing is now handled for you automatically, so you can remove postcss-import and autoprefixer if they are in your project:

postcss.config.mjs
export default {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
    "@tailwindcss/postcss": {},
  },
};
Using Vite
If you're using Vite, we recommend migrating from the PostCSS plugin to our new dedicated Vite plugin for improved performance and the best developer experience:

vite.config.ts
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
});
Using Tailwind CLI
In v4, Tailwind CLI lives in a dedicated @tailwindcss/cli package. Update any of your build commands to use the new package instead:

Terminal
npx tailwindcss -i input.css -o output.css
npx @tailwindcss/cli -i input.css -o output.css
Changes from v3
Here's a comprehensive list of all the breaking changes in Tailwind CSS v4.0.

Our upgrade tool will handle most of these changes for you automatically, so we highly recommend using it if you can.

Browser requirements
Tailwind CSS v4.0 is designed for modern browsers and targets Safari 16.4, Chrome 111, and Firefox 128. We depend on modern CSS features like @property and color-mix() for core framework features, and Tailwind CSS v4.0 will not work in older browsers.

If you need to support older browsers, we recommend sticking with v3.4 for now. We're actively exploring a compatibility mode to help people upgrade sooner that we hope to share more news on in the future.

Removed @tailwind directives
In v4 you import Tailwind using a regular CSS @import statement, not using the @tailwind directives you used in v3:

CSS
@tailwind base;
@tailwind components;
@tailwind utilities;
@import "tailwindcss";
Removed deprecated utilities
We've removed any utilities that were deprecated in v3 and have been undocumented for several years. Here's a list of what's been removed along with the modern alternative:

Deprecated	Replacement
bg-opacity-*	Use opacity modifiers like bg-black/50
text-opacity-*	Use opacity modifiers like text-black/50
border-opacity-*	Use opacity modifiers like border-black/50
divide-opacity-*	Use opacity modifiers like divide-black/50
ring-opacity-*	Use opacity modifiers like ring-black/50
placeholder-opacity-*	Use opacity modifiers like placeholder-black/50
flex-shrink-*	shrink-*
flex-grow-*	grow-*
overflow-ellipsis	text-ellipsis
decoration-slice	box-decoration-slice
decoration-clone	box-decoration-clone
Renamed utilities
We've renamed the following utilities in v4 to make them more consistent and predictable:

v3	v4
shadow-sm	shadow-xs
shadow	shadow-sm
drop-shadow-sm	drop-shadow-xs
drop-shadow	drop-shadow-sm
blur-sm	blur-xs
blur	blur-sm
backdrop-blur-sm	backdrop-blur-xs
backdrop-blur	backdrop-blur-sm
rounded-sm	rounded-xs
rounded	rounded-sm
outline-none	outline-hidden
ring	ring-3
Updated shadow, radius, and blur scales
We've renamed the default shadow, radius and blur scales to make sure every utility has a named value. The "bare" versions still work for backward compatibility, but the <utility>-sm utilities will look different unless updated to their respective <utility>-xs versions.

To update your project for these changes, replace all the v3 utilities with their v4 versions:

HTML
<input class="shadow-sm" />
<input class="shadow-xs" />
<input class="shadow" />
<input class="shadow-sm" />
Renamed outline utility
The outline utility now sets outline-width: 1px by default to be more consistent with border and ring utilities. Furthermore all outline-<number> utilities default outline-style to solid, omitting the need to combine them with outline:

HTML
<input class="outline outline-2" />
<input class="outline-2" />
The outline-none utility previously didn't actually set outline-style: none, and instead set an invisible outline that would still show up in forced colors mode for accessibility reasons.

To make this more clear we've renamed this utility to outline-hidden and added a new outline-none utility that actually sets outline-style: none.

To update your project for this change, replace any usage of outline-none with outline-hidden:

HTML
<input class="focus:outline-none" />
<input class="focus:outline-hidden" />
Default ring width change
In v3, the ring utility added a 3px ring. We've changed this in v4 to be 1px to make it consistent with borders and outlines.

To update your project for this change, replace any usage of ring with ring-3:

HTML
<input class="ring ring-blue-500" />
<input class="ring-3 ring-blue-500" />
Space-between selector
We've changed the selector used by the space-x-* and space-y-* utilities to address serious performance issues on large pages:

CSS
/* Before */
.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  margin-top: 1rem;
}
/* Now */
.space-y-4 > :not(:last-child) {
  margin-bottom: 1rem;
}
You might see changes in your project if you were ever using these utilities with inline elements, or if you were adding other margins to child elements to tweak their spacing.

If this change causes any issues in your project, we recommend migrating to a flex or grid layout and using gap instead:

HTML
<div class="space-y-4 p-4">
<div class="flex flex-col gap-4 p-4">
  <label for="name">Name</label>
  <input type="text" name="name" />
</div>
Using variants with gradients
In v3, overriding part of a gradient with a variant would "reset" the entire gradient, so in this example the to-* color would be transparent in dark mode instead of yellow:

HTML
<div class="bg-gradient-to-r from-red-500 to-yellow-400 dark:from-blue-500">
  <!-- ... -->
</div>
In v4, these values are preserved which is more consistent with how other utilities in Tailwind work.

This means you may need to explicitly use via-none if you want to "unset" a three-stop gradient back to a two-stop gradient in a specific state:

HTML
<div class="bg-linear-to-r from-red-500 via-orange-400 to-yellow-400 dark:via-none dark:from-blue-500 dark:to-teal-400">
  <!-- ... -->
</div>
Container configuration
In v3, the container utility had several configuration options like center and padding that no longer exist in v4.

To customize the container utility in v4, extend it using the @utility directive:

CSS
@utility container {
  margin-inline: auto;
  padding-inline: 2rem;
}
Default border color
In v3, the border-* and divide-* utilities used your configured gray-200 color by default. We've changed this to currentColor in v4 to make Tailwind less opinionated and match browser defaults.

To update your project for this change, make sure you specify a color anywhere you're using a border-* or divide-* utility:

<div class="border border-gray-200 px-2 py-3 ...">
  <!-- ... -->
</div>
Alternatively, add these base styles to your project to preserve the v3 behavior:

CSS
@layer base {
  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    border-color: var(--color-gray-200, currentColor);
  }
}
Default ring width and color
We've changed the width of the ring utility from 3px to 1px and changed the default color from blue-500 to currentColor to make things more consistent the border-*, divide-*, and outline-* utilities.

To update your project for these changes, replace any use of ring with ring-3:

<button class="focus:ring ...">
<button class="focus:ring-3 ...">
  <!-- ... -->
</button>
Then make sure to add ring-blue-500 anywhere you were depending on the default ring color:

<button class="focus:ring-3 focus:ring-blue-500 ...">
  <!-- ... -->
</button>
Alternatively, add these theme variables to your CSS to preserve the v3 behavior:

CSS
@theme {
  --default-ring-width: 3px;
  --default-ring-color: var(--color-blue-500);
}
Note though that these variables are only supported for compatibility reasons, and are not considered idiomatic usage of Tailwind CSS v4.0.

Preflight changes
We've made a couple small changes to the base styles in Preflight in v4:

New default placeholder color
In v3, placeholder text used your configured gray-400 color by default. We've simplified this in v4 to just use the current text color at 50% opacity.

You probably won't even notice this change (it might even make your project look better), but if you want to preserve the v3 behavior, add this CSS to your project:

CSS
@layer base {
  input::placeholder,
  textarea::placeholder {
    color: var(--color-gray-400);
  }
}
Buttons use the default cursor
Buttons now use cursor: default instead of cursor: pointer to match the default browser behavior.

If you'd like to continue using cursor: pointer by default, add these base styles to your CSS:

CSS
@layer base {
  button:not(:disabled),
  [role="button"]:not(:disabled) {
    cursor: pointer;
  }
}
Dialog margins removed
Preflight now resets margins on <dialog> elements to be consistent with how other elements are reset.

If you still want dialogs to be centered by default, add this CSS to your project:

CSS
@layer base {
  dialog {
    margin: auto;
  }
}
Using a prefix
Prefixes now look like variants and are always at the beginning of the class name:

<div class="tw:flex tw:bg-red-500 tw:hover:bg-red-600">
  <!-- ... -->
</div>
When using a prefix, you should still configure your theme variables as if you aren't using a prefix:

@import "tailwindcss" prefix(tw);
@theme {
  --font-display: "Satoshi", "sans-serif";
  --breakpoint-3xl: 120rem;
  --color-avocado-100: oklch(0.99 0 0);
  --color-avocado-200: oklch(0.98 0.04 113.22);
  --color-avocado-300: oklch(0.94 0.11 115.03);
  /* ... */
}
The generated CSS variables will include a prefix to avoid conflicts with any existing variables in your project:

:root {
  --tw-font-display: "Satoshi", "sans-serif";
  --tw-breakpoint-3xl: 120rem;
  --tw-color-avocado-100: oklch(0.99 0 0);
  --tw-color-avocado-200: oklch(0.98 0.04 113.22);
  --tw-color-avocado-300: oklch(0.94 0.11 115.03);
  /* ... */
}
Adding custom utilities
In v3, any custom classes you defined within @layer utilities or @layer components would get picked up by Tailwind as a true utility class and would automatically work with variants like hover, focus, or lg with the difference being that @layer components would always come first in the generated stylesheet.

In v4 we are using native cascade layers and no longer hijacking the @layer at-rule, so we've introduced the @utility API as a replacement:

CSS
@layer utilities {
  .tab-4 {
    tab-size: 4;
  }
}
@utility tab-4 {
  tab-size: 4;
}
Custom utilities are now also sorted based on the amount of properties they define. This means that component utilities like this .btn can be overwritten by other Tailwind utilities without additional configuration:

CSS
@layer components {
  .btn {
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: ButtonFace;
  }
}
@utility btn {
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ButtonFace;
}
Learn more about registering custom utilities in the adding custom utilities documentation.

Variant stacking order
In v3, stacked variants were applied from right to left, but in v4 we've updated them to apply left to right to look more like CSS syntax.

To update your project for this change, reverse the order of any order-sensitive stacked variants in your project:

HTML
<ul class="py-4 first:*:pt-0 last:*:pb-0">
<ul class="py-4 *:first:pt-0 *:last:pb-0">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
You likely have very few of these if any—the direct child variant (*) and any typography plugin variants (prose-headings) are the most likely ones you might be using, and even then it's only if you've stacked them with other variants.

Variables in arbitrary values
In v3 you were able to use CSS variables as arbitrary values without var(), but recent updates to CSS mean that this can often be ambiguous, so we've changed the syntax for this in v4 to use parentheses instead of square brackets.

To update your project for this change, replace usage of the old variable shorthand syntax with the new variable shorthand syntax:

HTML
<div class="bg-[--brand-color]"></div>
<div class="bg-(--brand-color)"></div>
Hover styles on mobile
In v4 we've updated the hover variant to only apply when the primary input device supports hover:

CSS
@media (hover: hover) {
  .hover\:underline:hover {
    text-decoration: underline;
  }
}
This can create problems if you've built your site in a way that depends on touch devices triggering hover on tap. If this is an issue for you, you can override the hover variant with your own variant that uses the old implementation:

CSS
@custom-variant hover (&:hover);
Generally though we recommend treating hover functionality as an enhancement, and not depending on it for your site to work since touch devices don't truly have the ability to hover.

Transitioning outline-color
The transition and transition-color utilities now include the outline-color property.

This means if you were adding an outline with a custom color on focus, you will see the color transition from the default color. To avoid this, make sure you set the outline color unconditionally, or explicitly set it for both states:

HTML
<button class="transition hover:outline-2 hover:outline-cyan-500"></button>
<button class="outline-cyan-500 transition hover:outline-2"></button>
Disabling core plugins
In v3 there was a corePlugins option you could use to completely disable certain utilities in the framework. This is no longer supported in v4.

Using the theme() function
Since v4 includes CSS variables for all of your theme values, we recommend using those variables instead of the theme() function whenever possible:

CSS
.my-class {
  background-color: theme(colors.red.500);
  background-color: var(--color-red-500);
}
For cases where you still need to use the theme() function (like in media queries where CSS variables aren't supported), you should use the CSS variable name instead of the old dot notation:

CSS
@media (width >= theme(screens.xl)) {
@media (width >= theme(--breakpoint-xl)) {
  /* ... */
}
Using a JavaScript config file
JavaScript config files are still supported for backward compatibility, but they are no longer detected automatically in v4.

If you still need to use a JavaScript config file, you can load it explicitly using the @config directive:

CSS
@config "../../tailwind.config.js";
The corePlugins, safelist, and separator options from the JavaScript-based config are not supported in v4.0.

Theme values in JavaScript
In v3 we exported a resolveConfig function that you could use to turn your JavaScript-based config into a flat object that you could use in your other JavaScript.

We've removed this in v4 in hopes that people can use the CSS variables we generate directly instead, which is much simpler and will significantly reduce your bundle size.

For example, the popular Motion library for React lets you animate to and from CSS variable values:

JSX
<motion.div animate={{ backgroundColor: "var(--color-blue-500)" }} />
If you need access to a resolved CSS variable value in JS, you can use getComputedStyle to get the value of a theme variable on the document root:

spaghetti.js
let styles = getComputedStyle(document.documentElement);
let shadow = styles.getPropertyValue("--shadow-xl");
Using @apply with Vue, Svelte, or CSS modules
In v4, stylesheets that are bundled separately from your main CSS file (e.g. CSS modules files, <style> blocks in Vue, Svelte, or Astro, etc.) do not have access to theme variables, custom utilities, and custom variants defined in other files.

To make these definitions available in these contexts, use @reference to import them without duplicating any CSS in your bundle:

Vue
<template>
  <h1>Hello world!</h1>
</template>
<style>
  @reference "../../app.css";
  h1 {
    @apply text-2xl font-bold text-red-500;
  }
</style>
Alternatively, you can use your CSS theme variables directly instead of using @apply at all, which will also improve performance since Tailwind won't need to process these styles:

Vue
<template>
  <h1>Hello world!</h1>
</template>
<style>
  h1 {
    color: var(--text-red-500);
  }
</style>
You can find more documentation on using Tailwind with CSS modules.

Compatibility
Styling with utility classes
On this page
Using the upgrade tool
Upgrading manually
Using PostCSS
Using Vite
Using Tailwind CLI
Changes from v3
Browser requirements
Removed @tailwind directives
Removed deprecated utilities
Renamed utilities
Space-between selector
Using variants with gradients
Container configuration
Default border color
Default ring width and color
Preflight changes
Using a prefix
Adding custom utilities
Variant stacking order
Variables in arbitrary values
Hover styles on mobile
Transitioning outline-color
Disabling core plugins
Using the theme() function
Using a JavaScript config file
Theme values in JavaScript
Using @apply with Vue, Svelte, or CSS modules
Refactoring UI
From the creators of Tailwind CSS

Make your ideas look awesome, without relying on a designer.

“This is the survival kit I wish I had when I started building apps.”

Derrick Reimer, SavvyCal

Learn
Documentation
Showcase
Blog
Playground
Tailwind Plus
UI Blocks
Templates
UI Kit
Resources
Refactoring UI
Headless UI
Heroicons
Hero Patterns
Community
GitHub
Discord
X
Copyright © 2025 Tailwind Labs Inc.
·
Trademark Policy
