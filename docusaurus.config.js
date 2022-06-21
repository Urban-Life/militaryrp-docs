const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const config = {
	title: "Urban Life MilitaryRP Docs",
	tagline: "Documentación del MilitaryRP de Urban Life",
	url: "https://urban-life.github.io/militaryrp-docs/",
	baseUrl: "/militaryrp-docs",
	projectName: "militaryrp-docs",
	organizationName: "Urban-Life",
	trailingSlash: false,
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	i18n: {
		defaultLocale: "es",
		locales: ["es"],
	},
	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
	themeConfig: {
		navbar: {
			title: "Urban Life MilitaryRP Docs",
			logo: {
				alt: "Urban Life MilitaryRP Docs Logo",
				src: "img/logo.jpg",
			},
			// TODO:
			items: [
				{
					type: "doc",
					docId: "inicio",
					position: "left",
					label: "Documentación",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Documentación",
					// TODO:
					items: [
						{
							label: "Tutorial",
							to: "/docs/inicio",
						},
					],
				},
				{
					title: "Comunidad",
					// TODO:
					items: [
						{
							label: "Web",
							href: "https://stackoverflow.com/questions/tagged/docusaurus",
						},
						{
							label: "Discord",
							href: "https://discordapp.com/invite/docusaurus",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Urban Life - Todos los derechos reservados`,
		},
		prism: {
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme,
		},
	},
};

module.exports = config;
