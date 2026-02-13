import { createPreloadable } from './components/preloadable'
import HobbyHorseGirlz from './pages/hobby-horse-girlz'
import HappyBirthday from './pages/happy-birthday'
import Burraco from './pages/burraco'
import Acting from './pages/acting'

export const HobbyHorseGirlzPage = createPreloadable(
  'hobby-horse-girlz',
  HobbyHorseGirlz,
  {
    spacer: { minHeight: '424px', width: '770px', margin: '0 auto' },
    position: 'center',
  }
).Page

export const HappyBirthdayPage = createPreloadable(
  'happy-birthday',
  HappyBirthday,
  {
    spacer: { minHeight: '100vh', width: '100%' },
    position: 'full',
  }
).Page

export const BurracoPage = createPreloadable(
  'burraco',
  Burraco,
  {
    spacer: { minHeight: '100vh', width: '100%' },
    position: 'full',
  }
).Page

export const ActingPage = createPreloadable(
  'acting',
  Acting,
  {
    spacer: { minHeight: '360px', width: '640px', margin: '0 auto' },
    position: 'center',
  }
).Page
