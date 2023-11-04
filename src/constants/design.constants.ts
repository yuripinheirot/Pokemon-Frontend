type DesignContantsType = {
  skeletonAnimation: 'pulse' | 'wave' | false
  skeletonTimeout: number
  widthPage: number
  pokeGrid: {
    gap: number
    justifyContent: string
    alignItems: string
  }
}

export const designConstants: DesignContantsType = {
  skeletonAnimation: 'wave',
  skeletonTimeout: 600,
  widthPage: 1024,
  pokeGrid: {
    gap: 2.6,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}
