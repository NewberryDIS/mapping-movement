# Mapping Movement

## Some Technical Details

### CSS Layering, Fixed Positioning, DOM Flow

The Mapping Movement design involved a few elements which provided technical challenges - and became even more complex when combined with each other - but, interestingly, not more challenging.

#### Scaling the Font Size of the Title

The first was the article title. The title of each article and mini-essay begins below a hero image. As the user scrolls, the font reduces in size, and the text sticks when it arrives at the header, where it takes on the appearance of a typical header title.

There are several ways to change the font size using JavaScript and CSS. The intuitive method is to (surprise!) change the font-size property. However, this is a performance nightmare, because every time the title element font size changed, the entire page would be redrawn by the browser - whenever any element in a page changes size, the browser has to redraw all the elements around and following it to account for its new size. If your font-size transition is fluid, it will redraw every time the font size changes even one pixel - that's a lot of redrawing.

The second method is to use transform: scale(). This technique is interesting, because the scaling is _visual only_. If you have a 100x100 px square, and scale it up to 2x, while it will appear to be larger, it will still only take up 100x100 on the page - there is no shifting of content - and so the only thing that's redrawn is the title element itself!

Scaling provides its own challenges, however. Think about text wrapping: if your text appears 2x as big as it actually is, when the text _visually_ reaches the edge of the page, the actual element is still quite far from it. Complex media queries have to be written to account for the fact that the title text needs to wrap at very different points than the rest of the text - and even from itself, as it progressively resizes.

#### Sidebar Toggle

As with most websites, we had to hide the sidebar menu for narrower screens. In keeping with the sense of place and movement, we felt the ideal solution was to have the sidebar element smoothly slide in from the side. This is a notoriously challenging technique. If you create a sidebar with a width of 1px, and then increase it to 250px, you will get the transition you're looking for - but the text will print as though wrapped to a container of the increasing size - a notoriously terrible look. To cover this up, there are a few nifty tricks you can use - for example, you can hide the text until the sidebar is wide enough to hold it - but this visually pronounces the disappearance of the text - eliminating the sense of permanence we wanted to engender.

The other technique - the one we used - was not to change the sidebar at all. When the sidebar is present, the page has the width of (sidebar width) + (main content width). To hide the sidebar, we added the sidebar width to the main content width - which pushes the sidebar out of view. Then, to return the sidebar to view, we subtract the sidebar with from the main content width.

(Note that this will incur similar redrawing as the font-size changing title. We chose to do it anyway, for two reasons: 1) there were no easy alternatives as there was with the title resizing - or, not without losing the impact of the transition we cherished. As a minor cope, we would acknowledge that the sidebar showing and hiding is not something that will happen repeatedly in quick succession, which is perfectly likely for the title, since it occurs on scroll, and a user could scroll up and down over the breakpoint. We did ensure that the enlarging breakpoint (hit when the user scrolls up) and the shrinking breakpoint (which occurs when the user scrolls down) are not the same, so the "quick succession" scrolls would have to be over a substantial chunk of their screen height.)

#### Scaling the Font Size - Revisited

Now that the sidebar changes the width of the main content section, we have a number of other checks we have to run in order for the title text to wrap correctly: now it's a complex web of scroll position and screen width.

The complexity was certainly within our capabilities, but it was approaching that point where we start thinking whether we were approaching the problem correctly.

And then we noticed a new problem - something we hadn't considered. The body text was scrolling on top of the header.

The fact that the body text - being in the same container as the title - had to be either above or below the header, along with the title - had completely slipped our minds.

To explain this problem, I will address one of the most misunderstood elements of CSS: stacking order.

#### Stacking.

Z-index is actually pretty simple - but it doesn't work the way most people assume - or, how it, arguably, should work. But I'm not taking bait on that fight just now. @ me on lemmy if you want to fight. Vim is objectively better than VS Code, and it's pronounced "gif".

The core principle of z-index that, once you understand what it means, makes the entire concept make sense, is: **_an element can never be positioned below its own parents._**

(For a mental shorthand: you can think about code indentation for this: elements can be altered at or beyond their level of indentation - only to the right, never to the left.)

First: this whole thing centers around _stacking context_.

When you make a simple html page, the browser reads it from top to bottom, and draws the elements in the order in which they appear. This means that an element that occurs after will appear above. At this point, z-index is irrelevant: an html file with 2 divs and nothing else will follow this rule. The "floor" of the html file is the stacking context, so the flow is top to bottom.

If you give an element a child, that enters that element's context. The child can be raised or lowered with z-index relative to the other elements in the same context - with the caveat that it can't go below its parent.

<!---->
<!---->
<!-- There are a number of gotchas when it comes to z-index. It helps to understand stacking context to determine how to get things where you want them. -->
<!---->
<!-- In the normal flow of a HTML document, things "stack" in the order they appear in the .html file - I put that in quotes because, without any tinkering, there won't be any "stacking" at all - things won't overlap - but this is the default, and while they won't stack, you can use things like box-shadow to see how things stack. See [this pen](https://codepen.io/germyparker/pen/mdvRNyE) as a demonstration. -->
<!---->
<!-- When you start using alternative positioning, you can make things stack. "Static" positioning is the default; -->
<!---->
<!-- <section class="outer-wrapper"> -->
<!--   <p> -->
<!--     Messing with static and relative positioning.  The divs below show the interaction between static and relative.  Note the box shadow demonstrates the stacking order.   -->
<!--   </p> -->
<!--   <div class="div-1">1</div> -->
<!--   <div class="div-2">2</div> -->
<!--   <div class="div-3">3</div> -->
<!--   <div class="div-4">4</div> -->
<!--   <div class="div-5">5</div> -->
<!--   <div class="div-6">6</div> -->
<!--   <div class="div-7">7</div> -->
<!-- </section> -->
<!---->
<!-- /_ box-shadow colors _/ -->
<!---->
<!-- .parent-1 .right { -->
<!-- box-shadow: 0 0 10px 10px rgba(255,0,255,1); -->
<!-- } -->
<!-- .parent-2 .right { -->
<!-- box-shadow: 0 0 10px 10px rgba(255,255,0,1); -->
<!-- } -->
<!-- .parent-3 .right { -->
<!-- box-shadow: 0 0 10px 10px rgba(0,255,255,1); -->
<!-- } -->
<!-- .parent-4 .right { -->
<!-- box-shadow: 0 0 10px 10px rgba(255,137,137,1); -->
<!-- } -->
<!-- .parent-5 .right { -->
<!---->
<!-- <!-- box-shadow: 0 0 10px 10px rgba(137,137,255,1); --> -->
<!---->
<!-- box-shadow: 0 0 10px 10px rgba(255,0,255,1); -->
<!-- } -->
<!-- .parent-6 .right { -->
<!---->
<!-- <!-- box-shadow: 0 0 10px 10px rgba(255,255,255,1); --> -->
<!---->
<!-- box-shadow: 0 0 10px 10px rgba(255,255,0,1); -->
<!-- } -->
<!-- .parent-7 .right { -->
<!---->
<!-- <!-- box-shadow: 0 0 10px 10px rgba(0,0,0,1); --> -->
<!---->
<!-- box-shadow: 0 0 10px 10px rgba(0,255,255,1); -->
<!-- } -->
<!-- /_ irrelevant to purpose, just for appearence _/ -->
<!-- body { -->
<!-- --fg: #ccc; -->
<!-- --bg: #333; -->
<!-- font-family: monospace; -->
<!-- background: var(--bg); -->
<!-- color: var(--fg); -->
<!-- } -->
<!-- section { -->
<!-- height: 75vh; -->
<!-- width: 75vw; -->
<!-- margin: 10px auto; -->
<!-- display: flex; -->
<!-- flex-direction: column; -->
<!-- } -->
<!-- div { -->
<!-- display: flex; -->
<!-- justify-content: center; -->
<!-- align-items: center; -->
<!-- flex: 1; -->
<!-- text-align: center; -->
<!-- border: 1px solid var(--fg); -->
<!-- width: 100%; -->
<!-- } -->
<!-- p { -->
<!-- font-size: 24px; -->
<!-- text-align: center; -->
<!-- } -->
<!-- There are a number of caveats, conditions, and gotchas when it comes to z-index - most notably that a z-index "context" can't be a sandwich. That is to say, an element can't be layered between two other elements unless they share a parent. Our "stack" of elements looked like this: at the bottom is the background, then the main essay text, the images, and essay gallery; then the header; then the page title, and finally, the page sub-title, either the author's name, or the parent essay title. So, if the header needs to be between the body text and the title, that means we have to bury the header in the body of the essay - a bad design practice - or we raise the level of the shared parent in the HTML ("DOM") hierarchy. In other words, the page title had to be outside the essay; it exists as an independent child to the body, on the same level as the header, sidebar, and main content section. Even with that refactoring, the elements have to be loaded in an deliberate order for them to stack naturally. -->
<!---->
<!-- Next was the size change - while perhaps a flourish or a victory lap, we felt that it gave that same sense of motion as the scroll effect. This was even more complex than the layering issue. The intuitive solution for this behavior is to bind the font size to the scroll position - but this would've been the least performant approach: when you change the size of the font, the browser has to repaint the entire page, since it has to recalculate the page layout to account for the space the newly-resized text will require. As the font size change needed to feel smooth and natural, the font would have to be resized at every pixel between the maximum and minimum sizes - which, at a range from approximately 30px to 60px means 30 repaints across a scroll of about 70% of the window's height. -->
<!---->
<!-- The more performant approach is to use the transform: scale() property, which doesn't change the font size at all, but instead magnifies the entire HTML element - while not actually changing the amount of space it takes up on the page. As a result, the text is provided the same space at scale(3x) as at scale(1x) - so it is challenging to position the layouts relative to their neighbors in such a way that the presentation is acceptable at minimum and maximum size - and everything in between. Adding to the complexity: the title text ranges from 2 words to as many as 9 or 10, so we also had to account for the title next needing to wrap when it was in its largest state (and not display on top of other elements), or needing to clip with an ellipsis when it is positioned in the header. -->
<!---->
<!-- In the end, we went with a 2x to 1x scaling, since the "sticky" positioning of the text at its smallest position, at the top of the page, requires more precision than its positioning in its largest form - even a discrepancy of one or two pixels caused a noticeable misalignment in the header, and, since a pixel is an atomic size, trying to attain pixel-perfect positioning at a 0.5x scale factor was, to put it simply, sus. -->
<!---->
<!-- The impact on the sidebar is significant because it was our intention to show and hide the sidebar depending on screen width. Due to the title text's position outside of the normal DOM flow, it was not bound to the essay text, so, when the essay text is repositioned to hide or show the sidebar, the title text had to be explicitly included. However, because the title text doesn't technically resize - the container its in is the same size whether the text is large or small - the text would not automatically wrap when it was pushed to the side by the reappearing sidebar. Not only did we have to explicitly reposition the title text to align with the body text, we also had to resize its container - but, of course, this size could not be the same as the width of the essay text's container, because the title is displaying at twice the size - so, if the essay text is using 60% of the screen, the title had to take up 30%; -->
