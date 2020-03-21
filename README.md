# Oregon Trail II Randomizer

Have you ever been playing Oregon Trail II and thought "this game is too easy"?
Fear no more! Now you can be faced with sub-optimal conditions entirely out of
your control! Set out in August as an artist in a wagon accompanied by senior
citizens, get lucky and leave as a doctor in April with young-ish companions, or
anywhise in between! Simply load up the Oregon Trail II Randomizer, click in the
boxes, and hope you get a favorable result!

## Getting Started

### Prerequisites

* Any web server (this is all run client-side, so it works on GitHub/GitLab
Pages, S3, Nginx, etc. out of the box).
* JavaScript enabled in the browser (for clients).

### Installation

* Open [index.html](html/index.html) in your editor of choice
* Replace every occurrence of `your.domain.here` with your domain (just the
domain name).
* Replace the `twitter:site` meta tag's `@YourTwitterHandleHere` with your
Twitter handle (or remove the line if you do not have a Twitter account).

### Known Issues

* On smaller screens, pressing the wagon/emote does not play the Oregon Trail
2 title song. (Smaller screens being any screen whise the wagon/emote ends up
on the left side of the screen.)
* Pressing the "Do not press" button a bunch does not make the page level.
(This was done on purpose by the original creator and is not a bug.)

## FAQ

> What's with the Twitch Emote of the Day? And why is "Tim" the autofilled name?

This was originally created for the Twitch streamer
[MonotoneTim](https://www.twitch.tv/MonotoneTim), who played Oregon Trail II a
lot on his streams. The emotes that rotate around are his subscriber emotes,
with the exception of Kappa, a global Twitch emote.

> Did you make this?

No. The website that originally hosted this is gone, but I have may have found
their YouTube channel via Archive.org and used that to find their Twitter
account. I reached out to them to ask if they created this, but have yet to
receive a response. As far as I can tell, the first time the randomzier was
used was on
[June 21, 2013](https://twitter.com/monotonetim/status/348253984395497473)
(credit for finding that goes to OldMario on Twitch).

> Have you modified this?

Yes. The original site had all the CSS and most of the JS inlined, and I removed
most of it and put it in separate files. I added proper indentation, favicons,
and meta tags, fixed mobile formatting, and am working on enabling some
(currently) broken features.

> What is the license status of this project?

Unknown. If the creator responds, hopefully they won't be opposed to my work and
will give me permission to GPLv3 it.
