import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr(),
		ViteSvgSpriteWrapper({
			icons: 'src/sprites/**/*.svg',
			outputDir: './public',
		})
	],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler' // or "modern"
			}
		}
	}
})
