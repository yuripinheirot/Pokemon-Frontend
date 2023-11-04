type DesignContantsType = {
  skeletonAnimation: 'pulse' | 'wave' | false
  skeletonTimeout: number
  maxWidthPage: number
}

export const designConstants: DesignContantsType = {
  skeletonAnimation: 'wave',
  skeletonTimeout: 600,
  maxWidthPage: 1024,
}
