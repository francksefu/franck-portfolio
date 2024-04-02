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
    description: `Ici nous ecrivons ce que le projet possed
    beacoup des choses patati patata kdkdkfbhdvhwa jhvuwevjdc`,
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
    description: '',
    languages: ['HTML5', 'CSS3', 'React', 'Bootstrap', 'Ruby on Rails', 'PostgreSQL'],
    videoUrl: ''
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

