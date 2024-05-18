import preloader from '@/assets/preloader.svg'

type PreloaderPropsType = {
  style?: { [key: string]: string }
}
const setting = {
  color: 'white',
  fontSize: '50px',
  fontStyle: 'italic',
  fontWeight: '900',
  height: '100%',
  margin: '0 auto',
  width: '50vw',
}

export const Preloader = ({ style }: PreloaderPropsType) => {
  return <img alt={'LOADING...'} src={preloader} style={{ ...setting, ...style }} />
}
