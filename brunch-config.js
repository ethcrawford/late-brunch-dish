"use strict";

// See https://brunch.io/docs/getting-started for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      "js/app.js": [
        /^app\//,
      ],
    },
    // Define javascripts compilation order (optional). The default order is alphabetical.
    order: {
      before: [
        /app\/js\/jquery(\.slim)?\.js$/,
        "app/js/popper.js",
        "app/js/bootstrap/index.js",
        "app/js/bootstrap/util.js",
      ],
      after: [
        "app/js/common.js",
      ],
    },
  },
  stylesheets: {
    joinTo: {
      "css/app.css": [
        /^app\//,
      ],
    },
    // Define stylesheets compilation order (optional). The default order is alphabetical.
    order: {
      before: [
        "app/scss/bootstrap.scss",
      ],
      after: [
        "app/scss/main.scss",
      ],
    },
  },
};

// Simply merge all the scripts without wrapping them in modules.
exports.modules = {
  wrapper: false,
  definition: false,
};

exports.npm = {
  enabled: false,
};

exports.plugins = {
  // Sass uses LibSass. You might need a compiler for this.
  sass: {
    mode: "native",
    precision: 6,
  },
};

exports.conventions = {
  ignored: [
    /\/_/,
  ]
};

// Simple static server without auto-reloading.
// Respond with 404 for unknown paths.
exports.server = {
  noPushState: true,
};

// See https://brunch.io/docs/troubleshooting.
// Prevent receiving an empty file in the output.
exports.watcher = {
  awaitWriteFinish: true,
  usePolling: true,
};

exports.hooks = {
  preCompile() {
    console.log("About to compile...");
    return Promise.resolve();
  },
  onCompile(generatedFiles, changedAssets) {
    console.log("Done.");
  },
};
