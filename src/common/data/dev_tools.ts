// langs
import typescript from '@/common/assets/icon/dev_tools/typescript.png'
import javascript from '@/common/assets/icon/dev_tools/javascript.png'
import react from '@/common/assets/icon/dev_tools/react.png'
import nodejs from '@/common/assets/icon/dev_tools/nodejs.png'
import cpp from '@/common/assets/icon/dev_tools/cpp.png'
import kotlin from '@/common/assets/icon/dev_tools/kotlin.png'
import nextts from '@/common/assets/icon/dev_tools/nextjs.svg'
import php from '@/common/assets/icon/dev_tools/php.png'
import python from '@/common/assets/icon/dev_tools/python.png'
import vue from '@/common/assets/icon/dev_tools/vue.png'
import robot_framework from '@/common/assets/icon/dev_tools/robot_framework.png'
import css from '@/common/assets/icon/dev_tools/css.webp'
import sass from '@/common/assets/icon/dev_tools/sass.png'
import golang from '@/common/assets/icon/dev_tools/golang.png'
import svelte from '@/common/assets/icon/dev_tools/svelte.png'
import java from '@/common/assets/icon/dev_tools/java.png'
import postgreSQL from '@/common/assets/icon/dev_tools/postgreSQL.png'
// tools
import netlify from '@/common/assets/icon/dev_tools/netlify.webp'
import socket_io from '@/common/assets/icon/dev_tools/socket_io.png'
import android_studio from '@/common/assets/icon/dev_tools/android_studio.png'
import mongodb from '@/common/assets/icon/dev_tools/mongodb.svg'
import mantine_ui from '@/common/assets/icon/dev_tools/mantine_ui.png'
import antd from '@/common/assets/icon/dev_tools/antd.svg'
import mysql from '@/common/assets/icon/dev_tools/mysql.png'
import redux from '@/common/assets/icon/dev_tools/redux.svg'
import selenium from '@/common/assets/icon/dev_tools/selenium.png'
import tailwind_css from '@/common/assets/icon/dev_tools/tailwind_css.svg'
import vite from '@/common/assets/icon/dev_tools/vite.png'
import mui from '@/common/assets/icon/dev_tools/mui.png'
import firebase from '@/common/assets/icon/dev_tools/firebase.png'
import gitlab from '@/common/assets/icon/dev_tools/gitlab.png'
import flutter from '@/common/assets/icon/dev_tools/flutter.webp'
import dart from '@/common/assets/icon/dev_tools/dart.png'
import docker from '@/common/assets/icon/dev_tools/docker.png'
import appium from '@/common/assets/icon/dev_tools/appium.png'
import playwright from '@/common/assets/icon/dev_tools/playwright.png'
import elysia_framework from '@/common/assets/icon/dev_tools/elysia.avif'


export interface IdevToolsItem {
  label: string
  source: string
}


export const dev_tools = {
  languages: {
    java: {
      label: 'Java',
      source: java
    },
    svelte: {
      label: 'Svelte',
      source: svelte
    },
    golang: {
      label: 'Golang',
      source: golang
    },
    dart: {
      label: 'Dart',
      source: dart
    },
    flutter: {
      label: 'Flutter',
      source: flutter
    },
    css: {
      label: 'CSS',
      source: css
    },
    sass: {
      label: 'Sass',
      source: sass
    },
    typescript: {
      label: 'TypeScript',
      source: typescript
    },
    javascript: {
      label: 'JavaScript',
      source: javascript
    },
    react: {
      label: 'React',
      source: react
    },
    nodejs: {
      label: 'Node.js',
      source: nodejs
    },
    cpp: {
      label: 'C++',
      source: cpp
    },
    kotlin: {
      label: 'Kotlin',
      source: kotlin
    },
    php: {
      label: 'PHP',
      source: php
    },
    python: {
      label: 'Python',
      source: python
    },
    nextts: {
      label: 'Next.ts',
      source: nextts
    },
    vue: {
      label: 'Vue.js',
      source: vue
    },
  },
  tools: {
    docker: {
      label: 'Docker',
      source: docker
    },
    postgreSQL: {
      label: 'postgreSQL',
      source: postgreSQL
    },
    gitlab: {
      label: 'GitLab CI/CD',
      source: gitlab
    },
    firebase: {
      label: 'Firebase',
      source: firebase
    },
    mui: {
      label: 'Material UI',
      source: mui
    },
    socket_io: {
      label: 'Socket.io',
      source: socket_io
    },
    android_studio: {
      label: 'Android Studio',
      source: android_studio
    },
    mantine_ui: {
      label: 'Mantine UI',
      source: mantine_ui
    },
    antd: {
      label: 'Ant Design',
      source: antd
    },
    mongodb: {
      label: 'MongoDB',
      source: mongodb
    },
    mysql: {
      label: 'MySQL',
      source: mysql
    },
    vite: {
      label: 'Vite',
      source: vite
    },
    redux: {
      label: 'Redux',
      source: redux
    },
    selenium: {
      label: 'Selenium',
      source: selenium
    },
    tailwind_css: {
      label: 'Tailwind CSS',
      source: tailwind_css
    },
    netlify: {
      label: 'Netlify',
      source: netlify
    },
    appium: {
      label: 'Appium Library',
      source: appium
    },
    playwright: {
      label: 'Playwright Framework',
      source: playwright
    },
    robot_framework: {
      label: 'Robot Framework',
      source: robot_framework
    },
    elysia: {
      label: 'Elysia JS',
      source: elysia_framework
    },
  }
}