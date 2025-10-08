import type { GlobalThemeOverrides } from 'naive-ui'
import { commonThemeOverrides, tailwindColors } from './common'

/**
 * 暗色主題覆寫
 */
export const darkThemeOverrides: GlobalThemeOverrides = {
  ...commonThemeOverrides,
  common: {
    ...commonThemeOverrides.common,
    
    // 主色系
    primaryColor: '#63e2b7',
    primaryColorHover: '#7fe7c4',
    primaryColorPressed: '#5acea7',
    primaryColorSuppl: '#7fe7c4',
    
    // 資訊色
    infoColor: tailwindColors.blue[400],
    infoColorHover: tailwindColors.blue[300],
    infoColorPressed: tailwindColors.blue[500],
    infoColorSuppl: tailwindColors.blue[300],
    
    // 成功色
    successColor: tailwindColors.green[400],
    successColorHover: tailwindColors.green[300],
    successColorPressed: tailwindColors.green[500],
    successColorSuppl: tailwindColors.green[300],
    
    // 警告色
    warningColor: tailwindColors.yellow[400],
    warningColorHover: tailwindColors.yellow[300],
    warningColorPressed: tailwindColors.yellow[500],
    warningColorSuppl: tailwindColors.yellow[300],
    
    // 錯誤色
    errorColor: tailwindColors.red[400],
    errorColorHover: tailwindColors.red[300],
    errorColorPressed: tailwindColors.red[500],
    errorColorSuppl: tailwindColors.red[300],
    
    // 文字色
    textColorBase: tailwindColors.gray[200],
    textColor1: tailwindColors.gray[200],
    textColor2: tailwindColors.gray[300],
    textColor3: tailwindColors.gray[400],
    textColorDisabled: tailwindColors.gray[600],
    
    // 佔位文字
    placeholderColor: tailwindColors.gray[600],
    placeholderColorDisabled: tailwindColors.gray[700],
    
    // 圖標色
    iconColor: tailwindColors.gray[400],
    iconColorHover: tailwindColors.gray[300],
    iconColorPressed: tailwindColors.gray[200],
    iconColorDisabled: tailwindColors.gray[600],
    
    // 背景色
    baseColor: '#18181b',
    bodyColor: tailwindColors.gray[900],
    cardColor: tailwindColors.gray[800],
    modalColor: tailwindColors.gray[800],
    popoverColor: tailwindColors.gray[800],
    tableColor: tailwindColors.gray[800],
    
    // 邊框色
    borderColor: tailwindColors.gray[700],
    dividerColor: tailwindColors.gray[700],
    
    // 懸停色
    hoverColor: 'rgba(255, 255, 255, 0.09)',
    pressedColor: 'rgba(255, 255, 255, 0.13)',
    
    // 其他
    closeColorHover: 'rgba(255, 255, 255, 0.09)',
    closeColorPressed: 'rgba(255, 255, 255, 0.13)',
    closeIconColor: tailwindColors.gray[400],
    closeIconColorHover: tailwindColors.gray[300],
    closeIconColorPressed: tailwindColors.gray[200],
    
    // 滾動條
    scrollbarColor: 'rgba(255, 255, 255, 0.25)',
    scrollbarColorHover: 'rgba(255, 255, 255, 0.35)',
    
    // 陰影
    boxShadow1: '0 1px 3px 0 rgb(0 0 0 / 0.5), 0 1px 2px -1px rgb(0 0 0 / 0.5)',
    boxShadow2: '0 4px 6px -1px rgb(0 0 0 / 0.5), 0 2px 4px -2px rgb(0 0 0 / 0.5)',
    boxShadow3: '0 10px 15px -3px rgb(0 0 0 / 0.5), 0 4px 6px -4px rgb(0 0 0 / 0.5)'
  },
  
  // Layout 組件覆寫
  Layout: {
    color: tailwindColors.gray[900],
    textColor: tailwindColors.gray[200],
    siderColor: tailwindColors.gray[800],
    siderBorderColor: tailwindColors.gray[700],
    siderToggleButtonColor: tailwindColors.gray[700],
    siderToggleButtonIconColor: tailwindColors.gray[400],
    siderToggleBarColor: 'rgba(255, 255, 255, 0.15)',
    headerColor: tailwindColors.gray[800],
    headerBorderColor: tailwindColors.gray[700],
    footerColor: tailwindColors.gray[800],
    footerBorderColor: tailwindColors.gray[700]
  },
  
  // Menu 組件覆寫
  Menu: {
    itemTextColor: tailwindColors.gray[300],
    itemTextColorHover: tailwindColors.gray[100],
    itemTextColorActive: '#63e2b7',
    itemIconColor: tailwindColors.gray[400],
    itemIconColorHover: tailwindColors.gray[200],
    itemIconColorActive: '#63e2b7',
    itemColorHover: 'rgba(255, 255, 255, 0.09)',
    itemColorActive: 'rgba(99, 226, 183, 0.15)',
    arrowColor: tailwindColors.gray[500],
    arrowColorHover: tailwindColors.gray[300],
    arrowColorActive: '#63e2b7'
  }
}

/**
 * 根據主色生成暗色主題
 */
export function createDarkTheme(primaryColor: string): GlobalThemeOverrides {
  return {
    ...darkThemeOverrides,
    common: {
      ...darkThemeOverrides.common,
      primaryColor: primaryColor,
      primaryColorHover: primaryColor,
      primaryColorPressed: primaryColor,
      primaryColorSuppl: primaryColor
    }
  }
}
