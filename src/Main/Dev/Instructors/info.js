import Ian from './ianmalcolm.jpg'
import Alan from './alangrant.jpg'
import Kelly from './kellymalcolm.jpg'
export const peeps = [
  {
    name: 'Alan Grant',
    occupation: 'Paleontologist',
    description: 'Crazy about accessibility and laura dern',
    image: Alan,
  },
  {
    name: 'Ian Malcolm',
    occupation: 'Chaotician',
    description: 'Loves accessibility and all his ex-wives',
    image: Ian,
    more: {
      link: 'https://www.youtube.com/watch?v=4PLvdmifDSk',
      description: 'Ian Malcom gives Hammond an ethics lecture'
    },
    isFavorite: true,
  },
  {
    name: 'Kelly Malcolm',
    occupation: 'Gymnast',
    description: 'All about ADA compliance. Loves her dad Ian.',
    image: Kelly,
    more: {
      link: 'https://www.youtube.com/watch?v=2h8rH8zxA64',
      description: 'Kelly pulls a Simone Biles on a raptor'
    }
  },
]
