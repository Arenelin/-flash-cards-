import preloader from '@/assets/preloader.svg'

type PreloaderPropsType = {
  style?: { [key: string]: string }
}
const setting = {
  color: '#8c61ff',
  fontSize: '50px',
  fontStyle: 'italic',
  fontWeight: '900',
  height: '50vh',
  lineHeight: '2',
  margin: '70px auto 0',
}

export const Preloader = ({ style }: PreloaderPropsType) => {
  return <img alt={'LOADING...'} src={preloader} style={{ ...setting, ...style }} />
}

Preloader.displayName = 'Preloader'
