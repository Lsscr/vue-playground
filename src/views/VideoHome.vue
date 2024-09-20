<template>
    <div class="min-h-screen bg-gray-100">
        <!-- 导航栏 -->
        <nav class="bg-white shadow-md">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex">
                        <div class="flex-shrink-0 flex items-center">
                            <!-- <img class="h-8 w-auto" src="/placeholder.svg?height=32&width=32" alt="Logo" /> -->
                            <span class="ml-2 text-xl font-bold text-gray-900">VideoHub</span>
                        </div>
                        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <a v-for="item in menuItems" :key="item.name" :href="item.href"
                                class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                {{ item.name }}
                            </a>
                        </div>
                    </div>
                    <div class="hidden sm:ml-6 sm:flex sm:items-center">
                        <button
                            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                            登录
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- 大横幅 -->
        <div class="relative bg-gray-900 overflow-hidden">
            <div class="max-w-7xl mx-auto">
                <div class="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div class="sm:text-center lg:text-left">
                            <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                                <span class="block xl:inline">欢迎来到</span>
                                <span class="block text-blue-500 xl:inline">VideoHub</span>
                            </h1>
                            <p
                                class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                发现、观看和分享精彩视频内容。从热门影视到独家原创，这里有你想要的一切。
                            </p>
                            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div class="rounded-md shadow">
                                    <a href="#"
                                        class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10">
                                        开始探索
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <!-- <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    src="/placeholder.svg?height=600&width=800" alt="Video banner" /> -->
            </div>
        </div>

        <!-- 内容区域 -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                热门视频
            </h2>
            <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div v-for="video in videos" :key="video.id" class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-16 aspect-h-9 rounded-lg overflow-hidden group-hover:opacity-75">
                        <!-- <img :src="video.thumbnail" alt="" class="w-full h-full object-center object-cover" /> -->
                    </div>
                    <div class="mt-4 flex justify-between">
                        <div>
                            <h3 class="text-sm text-gray-700">
                                <a href="#">
                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                    {{ video.title }}
                                </a>
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">{{ video.views }} 次观看</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const menuItems = ref([
    { name: '首页', href: '#' },
    { name: '分类', href: '#' },
    { name: '排行榜', href: '#' },
    { name: '我的', href: '#' },
])

const videos = ref([
    { id: 1, title: '惊险刺激的动作大片', views: '1.2M', thumbnail: '/placeholder.svg?height=180&width=320' },
    { id: 2, title: '感人至深的爱情故事', views: '890K', thumbnail: '/placeholder.svg?height=180&width=320' },
    { id: 3, title: '令人捧腹的喜剧短片', views: '750K', thumbnail: '/placeholder.svg?height=180&width=320' },
    { id: 4, title: '引人深思的纪录片', views: '500K', thumbnail: '/placeholder.svg?height=180&width=320' },
])
</script>