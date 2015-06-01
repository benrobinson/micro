# micro

A tiny CSS framework -- it's recommended that this be augmented through SCSS for your specific needs, or used as a minified "reset" before your main stylesheet.

I consistently feel that I'm unsetting styles provided by frameworks like Bootstrap and Foundation, but it's nice to not have to write grids and forms every time I start a small project.  I also wanted something with a small filesize because I'm becoming more obsessed with performance all the time.

## Columns

`.container` - Main content column.  Defaults to 960px.  Clearfixes all contained columns.

Columns are in percentage width.  They can be layered inside each other.

`.third` - 33.33%
`.half` - 50%
`.twothird` - 66.66%
`.full` - 100%

### Padding for Columns

Columns have no padding, to add padding inside a column, add a div with class:

`.inner`

The mobile breakpoint is at 75% of the `.container` width.

## Menu

To create a menu, use the following structure:

```
<nav class="navigation nav">
  <ul class="menu">
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a>
      <ul class="menu">
        <li><a href="#">Dropdown Item</a></li>
        <li><a href="#">Dropdown Item</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

## Form Fields

Any link or button can be styled as a button with this class:

`.button`

Form fields have default styles which can be ensured with this class:

`.field`

### Inline Button

To display a button on the same line as a field, use this structure:

```
<div class="inlined">
  <input type="text" class="field" />
  <button class="button">OK</button>
</div>
```
