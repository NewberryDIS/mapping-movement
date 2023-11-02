# Mapping Movement Rebuild.

## 0. Representation.

It was the goal of the original design of Mapping Movement to be like a book. We took this inspiration as our north star, returning to it to orient ourselves in our redesign. While we did end up throwing out most of the map, we continually returned to that idea when we became lost.

The user experience of physical books is something we've been missing ever since digital interfaces started to replace them. Their texture and smell of the pages, the feel of their weight, density, and ...floppiness? (You know how some books just fall open, and some seem to complain every time they're opened? That.) The way you can hold your place with a finger to jump back to find some section you passed, or to go to the end to see if your hunch about the murderer is correct - or, as in the case of books about maps: to the differently-colored and textured pages, easily identifiable as the plates, the high quality representations of the maps - and how easily we could return to where we left off. Having, literally, left something of ourselves there, we never feel like our sense of place has been lost.

You set the book down, face down, and get a drink, use the restroom, or simply to lean back and think about something. The book - and your place within it - remains stored.

That strong sense of place within a book is something lacking in a digital experience. Every link clicked changes the space you're in, and, we visit so many of them every day, taken as a whole, the volume of these minor spaces drains any individual one of them of containing our sense of place.

## 1. Inhabitation.

Is it possible to imbue a digital space with a sense of place?

The book, Mapping Movement, may have some answers. Maps, as 2-dimensional, frozen representations of physical space, from impossible perspectives, are easy to misunderstand as a noisy sort of chart; one can't understand the trend of the quarterly profits in a glance as one can with a pie chart or a bar graph. Mapping Movement uses them to show the movement of people - turning data into knowledge, turning noise into flow, turning spaces into places.

(Of course it's not merely movement that transforms space into place. A place is a space that you inhabit, an essential being-within; you can "be" in a space (eg airports), and we can briefly glimpse a place, like the inside of your crush's house when they open the door - an intimately understood but infinitely distant place.)

While designing the updated Mapping Movement, we used a smooth-scroll effect on navigation: when a user clicks a link, rather than the page content disappearing and the new content appearing out of nowhere, the page scrolls back to the top, the blurring speed of which disguises the changing of the content. We did this, in part, to bring the feeling of turning the page, but also to retain the sense of place. The moment of page changes in web development, insofar as they seem instant, read as digital - unreal, fleeting figments of electricity flashing through flattened rock. To retain the flow, we disguised the content switch and brought the user visibly from where they were to the place where they arrived.

## 2. Inhibition.

Displaying the maps themselves was a contentious issue. It was the opinion of the original designers that, because books don't have pictures, the text should be presented in wall form. Even in 2007, this was a known bad user experience - it was already a joke, a caricature of bad design.

It was our feeling that, while the presence of images interspersed within in the text of a book is unnatural to the book experience, there were more reasons to do it than to not do it. First, it is (and was, in 2007), the expectation of the reader, to have breaks in text, rest for the eyes, points of reference upon distraction, etc. There's no sense in subverting the expectations of the user only to present them with an alternative which is worse. Secondly, because, far more essential to the book-experience than the absence of images, is the presence of _pages_. As socially responsible web developers we would never demand our users click a "next page" link within an article, but we felt we could replicate that moment of disruption by adding the large, intriguing, and beautiful, maps about which the book was written. The intense unnaturalness, the extended, uninterrupted experience was evaluated to be more unbookish than the images.

And, finally, we felt we could do more with the images than merely present them.

We used a parallax effect on the maps. Parallax is not just the top design trend of 2014, it's been used to convey motion and the illusion of space in video games since the nineteen hundreds. (My daughter calls them that. I hate it.)

The parallax effect has a lot of power. While it does, naturally, give a page a sense of depth and space, it's also something, while far from novel, is still on the rare side; noticeable, though not remarkable. It catches the eye, and, as vital companions to the content, we felt it was important to let the maps shine.

## 3. Noise.

Maps are, as we have said, when taken as a whole, noisy. Their value begins in their details, in their minutia; their value as a whole is best evaluated by how quickly they can get you into their details. By allowing a limited - though changing - window into the map, we don't provide a view of the entire map - we only allow views of details.

Maps are, also, and we almost forgot about this, _large_. They are almost never manageable; they are cumbersome, whether we are tourists attempting to refold them in the same way they had been folded, or whether we are scholars in a library, having to find the largest table in the place just to lay out the map in its entirety. We position our bodies to suit the map, and not the other way around. If we want to follow a flow, we have to move our body to another side of the table. This is, while certainly nowhere near as convenient as a IIIF map viewer, a vivid, haptic experience, nostalgic even to those who have never done it - there's something that sparks sublimity at that oversized table, lost in focus, shifting noise to flow.

The images which are interspersed in the text of Mapping Movement use a technique called "fixed" positioning - so they don't move as you scroll. In many implementations of the parallax effect, the background elements still move, but at a different rate; it's only with that layering of rates that motion can be created in the old video games. By "fixing" their position, we lay the map out on a table, and give the power to move around them to the user, transforming their absent scroll to the next text section into an active, empowered scroll; intentional; _aware_. Instead of a thing you have to get past to continue reading, it becomes a space you inhabit, a place.

We hoped that with these techniques we were able to do justice to the original design guidance, to the books and maps we've experienced, and to the content of Mapping Movement.
