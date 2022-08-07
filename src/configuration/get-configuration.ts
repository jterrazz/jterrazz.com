import { Article } from '../models/article';

type Configuration = {
  contact: {
    email: string;
    githubExternalLink: string;
    devpostExternalLink: string;
  };
  articles: Array<Article>;
};

export const getConfiguration = (): Configuration => {
  return {
    articles: [],
    contact: {
      devpostExternalLink: 'https://devpost.com/jterrazz',
      email: 'jterrazzoni@gmail.com',
      githubExternalLink: 'https://code.jterrazz.com',
      mediumExternalLink: 'https://blog.jterrazz.com',
      photoExternalLink: 'https://photo.jterrazz.com',
    },
  };
};
