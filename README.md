# micro

A tiny CSS framework -- 4KB -- it's recommended that this be augmented through SCSS for your specific needs, or used as a minified "reset" before your main stylesheet.

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

## "Line" Layout

There is a set of classes to allow items to be set in a row that expands to fill the full width.  I used `display: table-row` and `table-cell` to acheive this.  Structure like:

```
<div class="line">
  <div class="item">This will take up a third</div>
  <div class="item">So will this</div>
  <div class="item">And this</div>
</div>
```

Content (text + images) inside items is set to be vertically and horizontally centered by default.

## Menu

To create a menu, use the following structure:

```
<nav class="navigation nav">
  <a class="button toggle" href="#">Menu</a><!--mobile menu toggle-->
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

### Inline Buttons & Labels

To display a button on the same line as a field, use this structure:

```
<div class="inlined">
  <label class="label">Hey</label>
  <input type="text" class="field" />
  <button class="button">OK</button>
</div>
```

## micro.js

This is a brief file that just adds mobile menu functionality, and some minor formatting tweaks.  Include it in the footer for best performance.

Could easily be replaced by a framework or your own custom code.  Or, alternately, you can hook up your own DOM interactions here.  It's just frameworkless vanilla JS, so you'd likely want to replace or integrate with your framework of choice for any kind of web app.
