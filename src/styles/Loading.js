import React from 'react'
import ContentLoader from 'react-content-loader'

export const Loading = ({height = 160}) => (
  <ContentLoader
    viewBox="0 0 400 160"
    height={height}
    width={400}
    backgroundColor="transparent"
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>
)
