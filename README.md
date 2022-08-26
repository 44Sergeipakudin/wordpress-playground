# WordPress in the browser!

![](demo.gif)
## Running the demo

This repository ships with a pre-built demo that you can just run!

1. Clone this repo
2. Run `bash serve-demo.sh`
3. Visit http://127.0.0.1:8000/index.html

If you want to build the assembly yourself, follow the instructions below.

This repo draws inspiration from https://github.com/seanmorris/php-wasm and uses https://github.com/aaemnnosttv/wp-sqlite-db 

## Building the assembly

The entire build process is automated with a bash script:

```bash
./wasm-build-pipeline.sh
```

It builds a docker image with the necessary tools, creates a local WordPress installation, 
and does a few more things.

If you'd like to customize the packaged WordPress installation, study and update
the `./wasm-build-pipeline.sh` script accordingly.


## How does it work?

This repo uses four magic ingredients to make WordPress work in the browser:

1. A WordPress configured to use SQLite instead of MySQL. This is possible thanks to https://github.com/aaemnnosttv/wp-sqlite-db.
2. A PHP 7.4 compiled with SQLite3 support into WebAssembly.
3. A PHP + WordPress WebAssembly bundle created using the emscripten toolkit.
4. A service worker that loads the bundle and dispatches the regular HTTP traffic to the in-memory WordPress instance.

The static files (.js, .css, etc.) are served directly from the host filesystem, not from the WebAssembly bundle.

The work is *heavily* inspired by https://github.com/seanmorris/php-wasm.

## Limitations

The worker applies a series of strange patches to WordPress, it's unclear why they're needed at the moment.

The site editor does not work at the moment. The block editor does, though.

PHP cannot communicate with WordPress.org so the plugin directory etc does not work.

The sqlite database lives in the memory and the changes only live as long as the service worker.

## Future work

* Fix the workarounds mentioned above
* Remove the static files from the wasm bundle
* Remove unnecessary PHP extensions to lower the bundle size

