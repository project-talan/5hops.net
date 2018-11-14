
export class Link {
  name: string;
  ref: string;
}

export class SubSection extends Link {
}

export class Section extends Link {
  title: string;
  description: string;
  sup: string;
  image: string;
  subSections: SubSection[];
  links: Link[];
}

export class Toc {
}
