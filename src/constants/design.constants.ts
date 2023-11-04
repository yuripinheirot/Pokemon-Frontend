type DesignContantsType = {
  skeletonAnimation: 'pulse' | 'wave' | false
  skeletonTimeout: number
  maxWidthPage: number
  pokeGrid: {
    gap: number
    justifyContent: string
    alignItems: string
  }
}

export const designConstants: DesignContantsType = {
  skeletonAnimation: 'wave',
  skeletonTimeout: 600,
  maxWidthPage: 1024,
  pokeGrid: {
    gap: 2.6,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
}
