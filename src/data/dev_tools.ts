// langs
import typescript from '@/assets/icon/dev_tools/typescript.png'
import javascript from '@/assets/icon/dev_tools/javascript.png'
import react from '@/assets/icon/dev_tools/react.png'
import nodejs from '@/assets/icon/dev_tools/nodejs.png'
import cpp from '@/assets/icon/dev_tools/cpp.png'
import kotlin from '@/assets/icon/dev_tools/kotlin.png'
import nextjs from '@/assets/icon/dev_tools/nextjs.svg'
import php from '@/assets/icon/dev_tools/php.png'
import python from '@/assets/icon/dev_tools/python.png'
import vue from '@/assets/icon/dev_tools/vue.png'
// tools
import socket_io from '@/assets/icon/dev_tools/socket_io.png'
import android_studio from '@/assets/icon/dev_tools/android_studio.png'
import mongodb from '@/assets/icon/dev_tools/mongodb.svg'
import mantine_ui from '@/assets/icon/dev_tools/mantine_ui.png'
import antd from '@/assets/icon/dev_tools/antd.svg'
import mysql from '@/assets/icon/dev_tools/mysql.png'
import redux from '@/assets/icon/dev_tools/redux.svg'
import robot_framework from '@/assets/icon/dev_tools/robot_framework.png'
import selenium from '@/assets/icon/dev_tools/selenium.png'
import tailwind_css from '@/assets/icon/dev_tools/tailwind_css.svg'
import vite from '@/assets/icon/dev_tools/vite.png'


export interface IdevToolsItem {
  label: string
  source: string
}


export const dev_tools = {
  languages: {
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
    nextjs: {
      label: 'Next.js',
      source: nextjs
    },
    vue: {
      label: 'Vue.js',
      source: vue
    },
  },
  tools: {
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
    robot_framework: {
      label: 'Robot Framework',
      source: robot_framework
    },
    selenium: {
      label: 'Selenium',
      source: selenium
    },
    tailwind_css: {
      label: 'Tailwind CSS',
      source: tailwind_css
    },
  }
}