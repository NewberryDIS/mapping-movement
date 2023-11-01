# Rebuild of Mapping Movement

- Uses Tify & Internet Archive's IIIF API.

As of initial build, _only **American Railroad Maps, 1873-2012** is functional_

## Requirements

[Node.js](https://nodejs.org/en/) v16 or later with npm.

## Development

- Project setup: `npm install`
- Compile and hot-reload: `npm run serve`
- Build for production: `npm run build`

## part 0. Skeuomorphism.

That horribly-shaped word means "Buttons in iTunes in 2007". It doesn't really - what it really means is, mimicking traditional interface elements in a new interface in order to assist users in adoption. If, in 2007, buttons looked like they do now, a lot of people wouldn't identify it as a button. So, Apple - and everyone else - designed their interface to have big, chunky, 3D-illusion interface elements.

The original concept is no longer useful. For example, if we used Skeuomorphic design guidance today, that might mean making our new 2023-looking buttons look like out-of-fashion 2022 buttons - there's no way to push design forward if you're trying to mimick the past - not when everything is digital. We're used to digital interfaces now - we don't need to "mimic" traditional design if we want to help users navigate the UI - we can just use the old design.

But the retro nature of the term still has value. While we don't NEED to do it anymore, we can still attempt to replicate older user interfaces into contemporary design - for fun. Because some of the old interfaces were awesome.

As a librarian, it's very obvious to me that I'm talking about books. I hope that's what you were thinking of too - but there are other great ones - vinyl records leap to mind as well - I think we all understand why these experiences have fallen out of common use, we shouldn't forget them.

Curling up with a good book in the secluded back section of the library, having to get up and flip a record over after about 20 minutes - there's something wonderful about that.

Can we reproduce those experiences?

## part 1. Books.

When I was asked to revitalize the Mapping Movement project, I was given the design guidance which the original project lead used in the original version. The main author wanted the experience on the web to replicate a book-reading experience. This was in 2007, and technology was much more limited - the things I did with Mapping Movement - which I will describe in extreme detail - it just wasn't possible then. That said, had I been there, I would've put up a fuss.

One of the core features of books, the original project lead ("OPL") said, was that there are no images. He didn't want the Mapping Movement project text to be interspersed with images. This was, it's vital to point out, a "book" of essays about maps. Maps were expected to be somehow visible in the project - he just didn't want them in the actual text - because that's not how real life books work.

But this is a fundamentally reductive view of a book-reading experience. With a book in your hands, you can stick a finger between the pages and flip through the book, and easily return to your starting point. If, as in the case of books about maps, there are pictures, you can very easily flip to the maps, examine them, and then return to your page. On a website, sure, you can click a link to a new page, and then click back to return - but we all know that the experience of web navigation is not at all similar to book navigation.

Flipping to a later section of the book is not a web-interface I had the time to develop. So, instead, what I attempted to was not to replicate the haptic experience, but the _vibe_.

One of the things I did to attempt to replicate the book experience was smooth scrolling to the top of a page. When you click on a link, rather than the page disappearing and a new page appearing, I made that disappearance and reappearance occur while the page was scrolling to the top. When you read a book, when you finish a page, your eyes follow that motion - so I meant to give users the sense of physical transition that accompanies page-turning. Additionally, one of the the things we've lost with digital interfaces is the patience - and while I wouldn't dream of wasting users' time by adding delays and timers and such, that scroll - it's a pause, a rest. It doesn't occur in the middle of the text anywhere, so the interruption only occurs when the user is shifting headspace anyway - and I hope that the brief, page-turning hiatus brought at least a moment of rest in otherwise hectic lives.

I did break up the text with maps. I broke that rule. I did it for a few reasons.

A. Skeuomorphism. People expect that on the web today, and subverting expectations should only ever be done when you've got something better to offer. Subverting the readers' expectations to provide them with a wall of text - a known bad interface design - was not something I was willing to do - I wouldn't subvert your expectations in order to give you something worse.

B. The Mapping Movement revitalization will not get the same fanfare as its original release; it won't be swarmed by academics pursuing cutting edge research. It's readers will be more casual: less _interested_ and more _curious_ - and that's a huge distinction. Readers could not be expected to travel through the content of their own volition - we had to invite them, tease them in further like a will o' the wisp. Maps have that power - not all maps, and not all presentations of maps - but if you do it right, you can pull people into a map.

## 2. Maps.

I don't know if there are people that don't like maps. I haven't met any, and if I have, I've surely eliminated it from my memory. Everyone loves maps. There's something so evocative about a map - so many things, really - I can't pretend to get anywhere near exhaustive here. But a few things stand out to me.

First, maps make me curious. In a map, I see spaces - foreign and familiar - in a new way. I see a stream that I've walked by - it seemed straight, but it isn't, it winds quite a lot. I see the buildings in my neighborhood and I can see their interplay, not just their view from the ground.

However, maps can appear noisy - an enormous amount of information transfered in a pretty samey way. Maps present themselves and their content as a pile of details - and if you can get a user to grab onto a single detail, the power of the map will take over from there - especially in the case of the Mapping Movement maps, which are as beautiful as they are fascinating.

As you scroll through a webpage, you scroll past images. This is common. Sometimes, the images scroll at a different speed - we call it parallax and while it's the newest design trend of 2013, it's been in use since side-scrolling video games of the 80s and 90s. At this point, it's not _uncommon_, but it's not super common. It's a known interface - but it still catches the eye.

In that moment, in which the map catches the user's eye,
