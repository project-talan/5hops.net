import { Article } from './article';

export class Link {
  id: string;
  title: string;
}

export class Entity extends Link {
  description: string;
}

export class SubSection extends Entity {
  article: Article;
}

export class Section extends Entity {
  sup: string;
  icon: string;
  subSections: SubSection[];
  links: Link[];
}

export class Toc {
  sections: Section[];
  /*/
  getSection(sectionId: string): Section {
    return this.sections.find(s => { return s.id == sectionId; });
  }
  //
  getSubSection(sectionId: string, subSectionId): SubSection {
    let section = this.getSection(sectionId);
    if (section) {
      return sections.subSection.find(ss => { return ss.id == subSectionId; });
    }
    return null;
  }
  /*/
}
