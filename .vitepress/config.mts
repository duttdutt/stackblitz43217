import { transformerTwoslash } from "@shikijs/vitepress-twoslash";
import { createFileSystemTypesCache } from "@shikijs/vitepress-twoslash/cache-fs";
import {
    groupIconMdPlugin,
    groupIconVitePlugin,
} from "vitepress-plugin-group-icons";
import { defineConfig } from "vitepress";
import { transformerNotationWordHighlight } from "@shikijs/transformers";

const nav = [
    {
        text: "web",
        link: "/web/web",
        activeMatch: "/web/web",
    },
    {
        text: "other",
        link: "/other/other",
        activeMatch: "/other/other",
    },
];

const sidebar = {
    "/web/": [
        {
            text: "general",
            collapsed: true,
            items: [
                {
                    text: "Исполнение",
                    link: "/javascript/Исполнение",
                },
            ],
        },
    ],
    "/other/": [
        {
            text: "general",
            collapsed: true,
            items: [
                {
                    text: "Исполнение",
                    link: "/javascript/Исполнение",
                },
            ],
        },
    ],
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "notes",
    description: "",
    appearance: true,

    markdown: {
        theme: {
            light: {
                tokenColors: [
                    {
                        scope: ["source"],
                        settings: {
                            foreground: "#000",
                        },
                    },
                    {
                        scope: ["comment"],
                        settings: {
                            foreground: "#8a8a8a",
                        },
                    },
                ],
            },
            dark: {},
        },
        codeTransformers: [
            transformerTwoslash({
                typesCache: createFileSystemTypesCache(),
                errorRendering: "line",
            }),
            transformerNotationWordHighlight({
                matchAlgorithm: "v3",
            }),
        ],
        config(md) {
            md.use(groupIconMdPlugin);
        },
        lineNumbers: false,
        codeCopyButtonTitle: "Test",
    },
    vite: {
        plugins: [groupIconVitePlugin()],
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        socialLinks: [{ icon: "github", link: "https://github.com//" }],
        darkModeSwitchLabel: "",
        darkModeSwitchTitle: "",
        lightModeSwitchTitle: "",
        aside: true,
        sidebarMenuLabel: "test",
        returnToTopLabel: "Наверх",
        logoLink: "/web/web",
        search: {
            provider: "local",
        },
        editLink: {
            pattern: "https://github.com/duttdutt/docs/:path",
            text: "GitHub",
        },

        nav,
        sidebar,

        // socialLinks: [
        //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
        // ],
    },
});
