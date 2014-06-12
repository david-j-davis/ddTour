ddTour
=========

**A simple uncomplicated lightweight site tour jQuery solution created by [David Davis].**

  - Unlike other tour solutions you keep your code in one place. The tooltip pops up right where you have a description of it.
  - Traverse to any element by designated class selector
  - This is a simple grunt stupid solution as they say in the Marine Corps.


Version
----

1.0


Tech
-----------

Open source projects used:

* [jQuery] - duh 
* [Normalize] - duh 
* [Modernizr] - duh

How To?
----

1. Designate a class name to whatever tag you want: a div, an h3, an li.
2. Whatever tag you use with the class apply a position:relative to the element so the absolute positioned tooltip doesn't float to the left of your screen.
3. Place a span element following your class selected div and place whatever text you want the tool tip to render.
4. Adjust fadeIn and fadeOut values and colors for the tooltip in the css file under .ddTour.


Demo
-----------
[ddTour]

[ddTour]:http://david-james-davis.com/ddTour
[jQuery]:http://jquery.com
[David Davis]:http://david-james-davis.com
[Normalize]:http://necolas.github.io/normalize.css/
[Modernizr]:http://modernizr.com/