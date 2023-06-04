import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                }
            }
        },
    },
    modules: [
        ['nuxt-mail', {
            message: {
                to: 'vortexwebsites@gmail.com',
            },
            smtp: {
                host: "smtp.mailtrap.io",
                port: 2525,
                auth: {
                    user: 'ee599f28898a62',
                    pass: '712eb9762b8b82'
                },
            },
        }],
    ],
    buildModules: [
        ['@pinia/nuxt', { disableVuex: true },],
    ],
    css: [
        '@/assets/css/tailwind.css'
    ],
    runtimeConfig: {
        public: {
            posthogPublicKey: 'phc_tVff31BGOvk478wPAkw1CgZrDvgZEvR9foJYrcK4dq4',
            posthogHost: 'https://app.posthog.com'
        }
    }
})
