import { tracked } from '@glimmer/tracking';

export default class Node {
  childNodes;
  @tracked isExpanded = false;
  name;

  constructor({ childNodes, name }) {
    this.childNodes = childNodes ?? [];
    this.name = name ?? 'Unknown';
  }
}
