import type { GlobalThemeOverrides } from 'naive-ui'

/**
 * Tailwind 預設色板
 */
export const tailwindColors = {
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617'
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712'
  },
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554'
  },
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16'
  },
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a'
  },
  yellow: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
    950: '#422006'
  }
}

/**
 * 生成主色階（從主色生成不同明度的色階）
 */
export function generateColorScale(baseColor: string) {
  // 這裡簡化處理，實際可用 chroma.js 或 color 庫生成完整色階
  return {
    50: baseColor + '10',
    100: baseColor + '20',
    200: baseColor + '30',
    300: baseColor + '40',
    400: baseColor + '60',
    500: baseColor,
    600: baseColor,
    700: baseColor,
    800: baseColor,
    900: baseColor
  }
}

/**
 * 共用的主題覆寫基礎配置
 */
export const commonThemeOverrides: GlobalThemeOverrides = {
  common: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: '14px',
    fontSizeMini: '12px',
    fontSizeTiny: '12px',
    fontSizeSmall: '14px',
    fontSizeMedium: '14px',
    fontSizeLarge: '16px',
    fontSizeHuge: '18px',
    lineHeight: '1.6',
    borderRadius: '6px',
    borderRadiusSmall: '4px',
    cubicBezierEaseInOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
  },
  Card: {
    borderRadius: '8px',
    paddingMedium: '16px',
    paddingLarge: '20px',
    paddingHuge: '24px'
  },
  Button: {
    borderRadiusMedium: '6px',
    borderRadiusLarge: '8px',
    heightMedium: '36px',
    heightLarge: '40px',
    paddingMedium: '0 16px',
    paddingLarge: '0 20px'
  },
  Input: {
    borderRadius: '6px',
    heightMedium: '36px',
    heightLarge: '40px'
  },
  DataTable: {
    borderRadius: '8px',
    thPaddingMedium: '12px 16px',
    tdPaddingMedium: '12px 16px'
  },
  Menu: {
    itemHeight: '40px',
    borderRadius: '6px'
  },
  Dialog: {
    borderRadius: '12px'
  },
  Modal: {
    borderRadius: '12px'
  },
  Drawer: {
    borderRadius: '0'
  }
}

/**
 * 根據主色生成完整的主題覆寫
 */
export function createThemeOverrides(primaryColor: string): GlobalThemeOverrides {
  return {
    ...commonThemeOverrides,
    common: {
      ...commonThemeOverrides.common,
      primaryColor: primaryColor,
      primaryColorHover: primaryColor,
      primaryColorPressed: primaryColor,
      primaryColorSuppl: primaryColor
    }
  }
}
