import colors from '../styles/design-system/colors.module.scss'
/**
 * The different families of color scales
 */
type Family =
  | 'Primary'
  | 'Robin'
  | 'Steel'
  | 'Coral'
  | 'Azul'
  | 'Gold'
  | 'Forest'
  | 'Purple'
  | 'Gray'

/**
 * The different strenghts of color scales
 */
type Level = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

/**
 * These are one-offs, not scales
 */
type MiscColors =
  | 'White'
  | 'Black'
  | 'WarmGrayLighter'
  | 'WarmGrayMedLite'
  | 'VividBlue'
  | 'VividBlueDark'
  | 'VividBlueHover'
  | 'VividBlueActive'

type AquaColor = `${Family}${Level}` | MiscColors

/**
 * Get a hex color from the design system
 *
 * @param colorName aqua color format only
 */
export const getAquaColor = (colorName: AquaColor): string => colors[`aquaColor${colorName}`]

// an optional mixin wrapper, if you so choose. This is not included in the Aqua plugin, and instead can be imported and used directly. 
export const AquaColors = {
  methods: {
    getAquaColor
  }
}
