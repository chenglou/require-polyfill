# Require Polyfill

This simple script is inspired by [require1k](http://stuk.github.io/require1k/), with a few flaws fixed (works with npm3, reads package.json's `main` field, etc.).

## Usage

Drop it into a script tag like so:

```js
<script src="./path/to/require_polyfill.js" data-main="./path/to/entry/file" data-project-root="./"></script>
```

Where `data-project-root` is where `node_modules` is located.

Tada! All your js files' `require` statements will work! No watcher, no code bundling, no hassle.

**Note**: This is only meant to be used as a development time convenience.

**Note2**: On browsers like Chrome that disallow cross origin requests, we can't load directly from the file system. Start a local server in that case. Alternatively, try Safari or Firefox!


## Known Issues

- Doesn't polyfill the node.js libraries. So e.g. `require('fs')` would fail.

- Doesn't support code splitting. Kidding, it supports all the code splitting.

- Doesn't have a logo (TODO: create an entire community around this script).

