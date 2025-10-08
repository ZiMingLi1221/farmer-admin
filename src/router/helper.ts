import type { RouteRecordRaw } from 'vue-router'
import type { MenuOption } from 'naive-ui'
import type { Component } from 'vue'
import { h } from 'vue'
import { NIcon } from 'naive-ui'
import { routes } from './record'
import * as icons from '@vicons/ionicons5'

/**
 * 獲取頁面標題
 */
export function getPageTitle(pageTitle?: string): string {
  const appTitle = 'Farmer Admin'
  if (pageTitle) {
    return `${pageTitle} - ${appTitle}`
  }
  return appTitle
}

/**
 * 渲染圖標
 */
function renderIcon(iconName?: string) {
  if (!iconName) return undefined
  
  const icon = (icons as any)[iconName] as Component
  if (!icon) return undefined
  
  return () => h(NIcon, null, { default: () => h(icon) })
}

/**
 * 路由轉選單選項
 */
export function routeToMenu(route: RouteRecordRaw): MenuOption | null {
  // 隱藏不在選單中顯示的路由
  if (route.meta?.hideInMenu) {
    return null
  }

  const menu: MenuOption = {
    label: route.meta?.title as string || route.name as string,
    key: route.path || route.name as string,
    icon: renderIcon(route.meta?.icon as string)
  }

  // 處理子路由
  if (route.children && route.children.length > 0) {
    const children = route.children
      .map(child => routeToMenu(child))
      .filter(item => item !== null) as MenuOption[]
    
    if (children.length > 0) {
      menu.children = children
    }
  }

  return menu
}

/**
 * 生成選單選項
 */
export function generateMenuOptions(): MenuOption[] {
  const layoutRoute = routes.find(route => route.path === '/' && route.children)
  
  if (!layoutRoute || !layoutRoute.children) {
    return []
  }

  return layoutRoute.children
    .map(route => routeToMenu(route))
    .filter(item => item !== null) as MenuOption[]
}

/**
 * 扁平化路由
 */
export function flattenRoutes(routeList: RouteRecordRaw[]): RouteRecordRaw[] {
  const result: RouteRecordRaw[] = []
  
  function flatten(routes: RouteRecordRaw[]) {
    routes.forEach(route => {
      result.push(route)
      if (route.children && route.children.length > 0) {
        flatten(route.children)
      }
    })
  }
  
  flatten(routeList)
  return result
}

/**
 * 根據 path 查找路由
 */
export function findRouteByPath(path: string): RouteRecordRaw | undefined {
  const flatRoutes = flattenRoutes(routes)
  return flatRoutes.find(route => route.path === path)
}

/**
 * 根據 name 查找路由
 */
export function findRouteByName(name: string): RouteRecordRaw | undefined {
  const flatRoutes = flattenRoutes(routes)
  return flatRoutes.find(route => route.name === name)
}

/**
 * 獲取麵包屑列表
 */
export function getBreadcrumbs(path: string): Array<{ title: string; path: string }> {
  const breadcrumbs: Array<{ title: string; path: string }> = []
  const route = findRouteByPath(path)
  
  if (!route) return breadcrumbs

  // 添加當前路由
  breadcrumbs.push({
    title: route.meta?.title as string || route.name as string,
    path: route.path
  })

  // 如果有父級路由，添加父級
  if (route.meta?.parent) {
    const parentRoute = findRouteByName(route.meta.parent as string)
    if (parentRoute) {
      breadcrumbs.unshift({
        title: parentRoute.meta?.title as string || parentRoute.name as string,
        path: parentRoute.path
      })
    }
  }

  return breadcrumbs
}

/**
 * 檢查路由是否存在
 */
export function isRouteExist(path: string): boolean {
  return !!findRouteByPath(path)
}
