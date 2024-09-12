import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  // 启用预设
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
  
  // 自定义规则
  rules: [
    ['custom-rule', { color: 'red' }]
  ],
  
  // 自定义快捷方式
  shortcuts: {
    'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
  
  // 主题配置
  theme: {
    colors: {
      'custom-blue': '#1fb6ff',
    },
  },
  
  // 安全列表
  safelist: 'p-3 p-4 p-5'.split(' '),
  
  // 变体
  variants: [
    (matcher) => {
      if (!matcher.startsWith('hover:')) return matcher
      return {
        // 自定义hover变体
        matcher: matcher.slice(6),
        selector: s => `${s}:hover`,
      }
    }
  ],
})