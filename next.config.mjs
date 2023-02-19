import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax";
import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeMathjax],
  },
  pageExtensions: ["js", "scss", "jsx"],
});

export default withNextra();


// const withNextra = require('nextra')({
//   theme: 'nextra-theme-docs',
//   themeConfig: './theme.config.tsx',
// })

// module.exports = withNextra()
