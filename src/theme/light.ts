import type { GlobalThemeOverrides } from 'naive-ui'
import { commonThemeOverrides, tailwindColors } from './common'

/**
 * 亮色主題覆寫
 */
export const lightThemeOverrides: GlobalThemeOverrides = {
  ...commonThemeOverrides,
  common: {
    ...commonThemeOverrides.common,
    
    // 主色系
    primaryColor: '#18a058',
    primaryColorHover: '#36ad6a',
    primaryColorPressed: '#0c7a43',
    primaryColorSuppl: '#36ad6a',
    
    // 資訊色
    infoColor: tailwindColors.blue[500],
    infoColorHover: tailwindColors.blue[600],
    infoColorPressed: tailwindColors.blue[700],
    infoColorSuppl: tailwindColors.blue[600],
    
    // 成功色
    successColor: tailwindColors.green[500],
    successColorHover: tailwindColors.green[600],
    successColorPressed: tailwindColors.green[700],
    successColorSuppl: tailwindColors.green[600],
    
    // 警告色
    warningColor: tailwindColors.yellow[500],
    warningColorHover: tailwindColors.yellow[600],
    warningColorPressed: tailwindColors.yellow[700],
    warningColorSuppl: tailwindColors.yellow[600],
    
    // 錯誤色
    errorColor: tailwindColors.red[500],
    errorColorHover: tailwindColors.red[600],
    errorColorPressed: tailwindColors.red[700],
    errorColorSuppl: tailwindColors.red[600],
    
    // 文字色
    textColorBase: tailwindColors.gray[900],
    textColor1: tailwindColors.gray[900],
    textColor2: tailwindColors.gray[700],
    textColor3: tailwindColors.gray[500],
    textColorDisabled: tailwindColors.gray[400],
    
    // 佔位文字
    placeholderColor: tailwindColors.gray[400],
    placeholderColorDisabled: tailwindColors.gray[300],
    
    // 圖標色
    iconColor: tailwindColors.gray[600],
    iconColorHover: tailwindColors.gray[700],
    iconColorPressed: tailwindColors.gray[800],
    iconColorDisabled: tailwindColors.gray[400],
    
    // 背景色
    baseColor: '#ffffff',
    bodyColor: tailwindColors.gray[50],
    cardColor: '#ffffff',
    modalColor: '#ffffff',
    popoverColor: '#ffffff',
    tableColor: '#ffffff',
    
    // 邊框色
    borderColor: tailwindColors.gray[200],
    dividerColor: tailwindColors.gray[200],
    
    // 懸停色
    hoverColor: tailwindColors.gray[100],
    pressedColor: tailwindColors.gray[200],
    
    // 其他
    closeColorHover: tailwindColors.gray[100],
    closeColorPressed: tailwindColors.gray[200],
    closeIconColor: tailwindColors.gray[600],
    closeIconColorHover: tailwindColors.gray[700],
    closeIconColorPressed: tailwindColors.gray[800],
    
    // 滾動條
    scrollbarColor: 'rgba(0, 0, 0, 0.25)',
    scrollbarColorHover: 'rgba(0, 0, 0, 0.35)',
    
    // 陰影
    boxShadow1: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    boxShadow2: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    boxShadow3: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
  },
  
  // Layout 組件覆寫
  Layout: {
    color: tailwindColors.gray[50],
    textColor: tailwindColors.gray[900],
    siderColor: '#ffffff',
    siderBorderColor: tailwindColors.gray[200],
    siderToggleButtonColor: tailwindColors.gray[100],
    siderToggleButtonIconColor: tailwindColors.gray[600],
    siderToggleBarColor: 'rgba(0, 0, 0, 0.15)',
    headerColor: '#ffffff',
    headerBorderColor: tailwindColors.gray[200],
    footerColor: '#ffffff',
    footerBorderColor: tailwindColors.gray[200]
  },
  
  // Menu 組件覆寫
  Menu: {
    itemTextColor: tailwindColors.gray[700],
    itemTextColorHover: tailwindColors.gray[900],
    itemTextColorActive: '#18a058',
    itemIconColor: tailwindColors.gray[600],
    itemIconColorHover: tailwindColors.gray[800],
    itemIconColorActive: '#18a058',
    itemColorHover: tailwindColors.gray[100],
    itemColorActive: 'rgba(24, 160, 88, 0.1)',
    arrowColor: tailwindColors.gray[500],
    arrowColorHover: tailwindColors.gray[700],
    arrowColorActive: '#18a058'
  }
}

/**
 * 根據主色生成亮色主題
 */
export function createLightTheme(primaryColor: string): GlobalThemeOverrides {
  return {
    ...lightThemeOverrides,
    common: {
      ...lightThemeOverrides.common,
      primaryColor: primaryColor,
      primaryColorHover: primaryColor,
      primaryColorPressed: primaryColor,
      primaryColorSuppl: primaryColor
    }
  }
}
