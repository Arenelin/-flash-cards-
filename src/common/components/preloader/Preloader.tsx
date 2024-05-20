import preloader from '@/assets/preloader.svg'

type PreloaderPropsType = {
  style?: { [key: string]: string }
}
const setting = {
  color: '#8c61ff',
  fontSize: '50px',
  fontStyle: 'italic',
  fontWeight: '900',
  lineHeight: '2',
  margin: '0 auto',
  width: '50vw',
}

export const Preloader = ({ style }: PreloaderPropsType) => {
  return <img alt={'LOADING...'} src={preloader} style={{ ...setting, ...style }} />
}
