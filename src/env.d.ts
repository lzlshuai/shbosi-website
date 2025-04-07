/// <reference types="vite/client" />

// Vue 组件声明
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 资源声明
declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.jpg' {
  const content: string
  export default content
}

// 为 Vue 全局方法增加类型声明
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $router: any
    $route: any
  }
}

// 为全局 Vue API 提供类型
declare module 'vue' {
  // Vue 3 Composition API
  export interface Ref<T = any> {
    value: T
  }
  
  export interface ComputedRef<T = any> extends Ref<T> {
    readonly value: T
  }
  
  export function ref<T>(value: T): Ref<T>
  export function reactive<T extends object>(target: T): T
  export function computed<T>(getter: () => T): ComputedRef<T>
  export function watch<T>(source: T | Ref<T> | (() => T), callback: (value: T, oldValue: T) => void, options?: any): void
  export function watchEffect(effect: () => void, options?: any): void
  export function onMounted(callback: () => void): void
  export function onUnmounted(callback: () => void): void
  export function onUpdated(callback: () => void): void
  export function onBeforeMount(callback: () => void): void
  export function nextTick(callback?: () => void): Promise<void>
  
  // Vue 3 Global API
  export function createApp(rootComponent: any, rootProps?: object): any
  export function defineComponent<T>(options: T): T
} 