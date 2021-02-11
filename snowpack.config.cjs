// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/build"
  },
  plugins: [
          [ 'snowpack-plugin-wasm-pack', { projectPath: '../automerge-rs/automerge-backend-wasm/' } ]
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  optimize: {
    entrypoints: [ "./index.js" ],
    bundle: true,
    target: 'es2018',
  },
};

