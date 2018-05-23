class BigGroupedTable extends HTMLElement
{
  private static SVG_NS = 'http://www.w3.org/2000/svg';
  private static DEFAULT_WIDTH = '100%';
  private static DEFAULT_HEIGHT = '200';

  private shadow : ShadowRoot;

  constructor()
  {
    super();

    this.shadow = this.attachShadow({mode: 'open'});

    const width : string = this.getAttribute('width') ||
        BigGroupedTable.DEFAULT_WIDTH;
    const height : string = this.getAttribute('height') ||
        BigGroupedTable.DEFAULT_HEIGHT;

    const style = document.createElement('style');
    style.textContent = ':host { display: block; }';
    style.textContent += 'svg { background: #eee; }';

    const svgEl = document.createElementNS(BigGroupedTable.SVG_NS, 'svg');
    svgEl.setAttribute('width', width);
    svgEl.setAttribute('height', height);

    const title = document.createElementNS(BigGroupedTable.SVG_NS, 'text');
    title.textContent = 'Big Grouped Table';
    title.setAttribute('fill', '#339933');
    title.setAttribute('y', '110');
    title.setAttribute('x', '50');
    title.setAttribute('font-size', '64');

    svgEl.appendChild(title);

    this.shadow.appendChild(style);
    this.shadow.appendChild(svgEl);
  }
}

customElements.define('big-grouped-table', BigGroupedTable);
