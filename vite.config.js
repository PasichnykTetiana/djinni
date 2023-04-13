import {defineConfig} from 'vite'

export default defineConfig({
    build: {
        outDir: './dist'
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
         @root-entry-name: default;
        `
            }
        }
    },
    base: '/djinni/'
})