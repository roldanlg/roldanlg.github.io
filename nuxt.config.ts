// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: '¡¡Hola, conóceme!!',
            titleTemplate: '%s %separator %siteName'
        }
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    css: [
        '~/assets/css/tailwind.scss'
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    modules: [
        "@nuxtjs/tailwindcss",
        "@pinia/nuxt",
        '@nuxt/content',
        '@nuxtjs/i18n',
        'nuxt-time',
        '@nuxtjs/google-fonts',
        'nuxt-svgo',
        '@nuxtjs/seo',
        'nuxt-particles',
        "@nuxt/image"
    ],
    googleFonts: {
        families: {
            'Open+Sans': [400, 600, 700],
            'Roboto+Mono': [400, 500, 700]
        },
        display: 'swap',
        prefetch: true,
        preconnect: true,
        preload: true,
        download: true,
        overwriting: false,
        outputDir: 'assets',
        stylePath: 'css/google-fonts.css',
        fontsDir: 'fonts',
        inject: true
    },
    tailwindcss: {
        exposeConfig: true,
        viewer: true
    },
    i18n: {
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
            alwaysRedirect: true
        },
        locales: [
            {code: 'es', iso: 'es-ES', name: 'Español', file: 'es-ES.json'},
            {code: 'en', iso: 'en-US', name: 'English', file: 'en-US.json'}
        ],
        defaultLocale: 'es',
        langDir: 'lang',
        lazy: true
    },
    ogImage: {
        enabled: true
    },
    sitemap: {
        enabled: true
    },
    robots: {
        enabled: true
    },
    seoExperiments: {
        enabled: true
    },
    schemaOrg: {
        enabled: true
    },
    linkChecker: {
        enabled: true
    },
    site: {
        url: 'https://localhost:3000',
        name: 'Mi Mismo',
        description: 'Esto se trata de auto lanzarme, ¡Conózcame!',
    }
})
