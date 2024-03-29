module.exports = {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeTitle: true,
          removeViewBox: false,
          removeStyleElement: true,
          removeAttrs: {
            attrs: [
              "xmlns:xlink",
              "id",
              "class",
              "data-name",
              "fill",
              "transform",
              "href",
              "clip-path",
              "clip-rule",
            ],
          },
          removeEmptyContainers: true,
          sortAttrs: true,
          removeUselessDefs: true,
          removeEmptyText: true,
          removeEditorsNSData: true,
          removeEmptyAttrs: true,
          removeHiddenElems: true,
          collapseGroups: true,
        },
      },
    },
  ],
};
