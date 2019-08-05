// We should put this on every page when we're done with that page set to active.

document.write(
    '<div id="navbar" class="site-wrap">\
        <div class="site-navbar mt-4 ">\
            <div class="container py-1">\
                <div class="row align-items-center">\
                    <div class="col-8 col-md-8 col-lg-4">\
                        <h1 class="mb-0"><img class="col-3" src="goldCoin.png"><a href="index.html" class="text-white h2 mb-0"><strong>TechHOUNDS</strong></a></h1>\
                    </div>\
                    <div class="col-4 col-md-4 col-lg-8">\
                        <nav class="site-navigation text-right text-md-right" role="navigation">\
                            <div class="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" class="site-menu-toggle js-menu-toggle text-white"><span class="icon-menu h3"></span></a></div>\
                            <ul class="site-menu js-clone-nav d-none d-lg-block">\
                                <li onclick="setActive(target)" class="">\
                                    <a href="index.html">Home</a>\
                                </li>\
                                <li><a href="about.html">About</a></li>\
                                <li><a href="contact.html">Contact</a></li>\
                                <li><a href="events.html">Events</a></li>\
								<li><a href="media.html">Media</a></li>\
                                <li class="has-children">\
                                    <a href="#">Sponsors</a>\
                                    <ul class="dropdown arrow-top">\
                                        <li><a href="#">Sponser Level 1</a></li>\
                                        <li><a href="#">Sponser Level 2</a></li>\
                                        <li><a href="#">Sponser Level 3</a></li>\
                                    </ul>\
                                </li>\
                            </ul>\
                            </li>\
                            </ul>\
                        </nav>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
	    <div class="site-mobile-menu">\
        <div class="site-mobile-menu-header">\
            <div class="site-mobile-menu-close mt-3">\
                <span class="icon-close2 js-menu-toggle"></span>\
            </div>\
        </div>\
        <div class="site-mobile-menu-body"></div>\
    </div>\
    <!-- .site-mobile-menu -->'
);

//Writes the navbar to every page just add <script src="js/nav.js"></script>