import { ImageProps as AntdImageProps } from 'antd'
import { StyledImage } from './styles'


export interface ImageProps extends AntdImageProps {
  preview?: boolean
}

const Image: React.FC<ImageProps> = (props) => {
  return (
    <StyledImage
      preview={props.preview ? true : false}
      {...props}
    />
  )
}

export default Image
