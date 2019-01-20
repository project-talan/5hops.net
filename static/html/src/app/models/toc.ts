import { Article } from './article';

export class Link {
  id: string;
  name: string;
}

export class SubSection extends Link {
  article: Article;
}

export class Section extends Link {
  title: string;
  description: string;
  synopsis: string;
  sup: string;
  image: string;
  subSections: SubSection[];
  links: Link[];
}

export class Toc {
}
