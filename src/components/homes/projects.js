import Projet1 from '../../../public/images/kiko/kiko1.png';
import Projet2 from '../../assets/images/projet2.png';
import Projet3 from '../../assets/images/projet3.png';
import Projet4 from '../../assets/images/project4.png';
import Kikofond1 from  '../../../public/images/kiko/kikofond1.png';
import Kikofond2 from  '../../../public/images/kiko/kikofond2.png';
import Kikophone1 from  '../../../public/images/kiko/kikophone1.png';
import Kikophone2 from  '../../../public/images/kiko/kikophone2.png';
import Carmen from  '../../../public/images/kiko/kikocarmen.png';

export const projects = [
  {
    name: 'KIKO',
    id: 1,
    type: 'Web site',
    imageUrl: Projet1,
    productionUrl: 'https://kerygme.vercel.app/',
    gitUrl: {frontEnd: 'https://github.com/francksefu/kerygme', backEnd: null},
    description: `This website was created to talk a little bit about a pious and very holy man, Kiko Arguello initiator of the neon cathecumenal way, as I have always been inspired by his life, he who is a very good artist, I decided to make a small site for him, just to have a little fun`,
    languages: ['HTML5', 'CSS3', 'React', 'Bootstrap'],
    projectPicture: [Kikofond2, Kikofond1, Kikophone1, Kikophone2, Carmen]
  },
  {
    name: 'Franck Blogs',
    id: 2,
    type: 'Web app',
    imageUrl: Projet2,
    productionUrl: 'https://franckblog.netlify.app/',
    gitUrl: {frontEnd: 'https://github.com/francksefu/blog-frontend', backEnd: 'https://github.com/francksefu/blog-'},
    description: `After observing Medium, I also decided to make a small site that can allow everyone to express themselves and comment on people's posts, comments do not require any account registration but writing a post requires to have an account that only takes 1min to create it.`,
    languages: ['HTML5', 'CSS3', 'React', 'Bootstrap', 'Ruby on Rails', 'PostgreSQL'],
    videoUrl: '',
    projectPicture: [Kikofond2, Kikofond1, Kikophone1, Kikophone2, Carmen]
  },
  {
    name: 'Pharmacie Maria',
    id: 3,
    type: 'Web app',
    imageUrl: Projet3,
    productionUrl: 'https://pharmacie-maria.000webhostapp.com/',
    gitUrl: {frontEnd: 'https://github.com/francksefu/Pharmacie-Maria', backEnd: ''},
    description: '',
    languages: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL', 'SQL', 'phpMyAdmin'],
    videoUrl: ''
  },
  {
    name: 'BICC Open Door',
    id: 4,
    type: 'Web site',
    imageUrl: Projet4,
    productionUrl: 'https://francksefu.github.io/Capstone-project/',
    gitUrl: {frontEnd: 'https://github.com/francksefu/Capstone-project', backEnd: ''},
    description: '',
    languages: ['HTML5', 'CSS3', 'JavaScript'],
    videoUrl: ''
  },
];

