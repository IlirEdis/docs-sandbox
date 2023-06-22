import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import dynamic from "next/dynamic";
const Logo = dynamic(() => import("./components/Logo"), { ssr: false });

const config: DocsThemeConfig = {
  logo: <Logo width='150px' color='#000' />,

  footer: {
    text: `footer text`,
  },

  gitTimestamp: "Last updated on",
  primaryHue: 20,
};

export default config;
