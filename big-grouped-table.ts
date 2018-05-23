class BigGroupedTable extends HTMLElement
{
  private static SVG_NS = 'http://www.w3.org/2000/svg';
  private static DEFAULT_WIDTH = '100%';
  private static DEFAULT_HEIGHT = '200';

  private shadow = this.attachShadow({mode: 'open'});
  private data : ([(string|number)])[] = [];

  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor()
  {
    super();

    const width : string = this.getAttribute('width') ||
        BigGroupedTable.DEFAULT_WIDTH;
    const height : string = this.getAttribute('height') ||
        BigGroupedTable.DEFAULT_HEIGHT;

    const style = document.createElement('style');
    style.textContent = ':host { display: block; }';
    style.textContent += 'svg { background: #eee; }';

    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute('width', width);
    this.canvas.setAttribute('height', height);

    this.context = this.canvas.getContext('2d');

    this.shadow.appendChild(style);
    this.shadow.appendChild(this.canvas);
  }

  public setData(data: ([(string|number)])[]) : BigGroupedTable
  {
    this.data = data;

    return this;
  }

  private renderRow(index: number) : void
  {
    const rowData = this.data[index];

    // Use this.context to draw stuff.
  }
}

customElements.define('big-grouped-table', BigGroupedTable);
