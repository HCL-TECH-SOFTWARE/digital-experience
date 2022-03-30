var stopPoint;
var fixedPoint;
var titleStopPoint;
var titleFixedPoint;
var fixedTitlePosition;
var headerBarHeight;
var mainTitle = document.querySelector('h1.main-title').style;
var mainNav = document.querySelector('.md-nav--primary .md-nav__title[for=__drawer]').style;
var headerPanel = document.querySelector('div#headerPanel').style;
var sidebarMenu = document.querySelector('.md-sidebar--secondary .md-nav__title');
var positionFixed = false;
var titlePositionFixed = false;

sidebarMenu.innerHTML = "In this document";
window.onscroll = function() {scrollFunction()};
window.onresize = function() {checkWidth()};
  
function checkWidth() {
    let winWidth = window.innerWidth;
    if (winWidth < 387) {
        // double-row header
        stopPoint = 85;
        fixedPoint = 178;
        titleStopPoint = 40;
        titleFixedPoint = 87;
        headerBarHeight = 208;
        fixedTitlePosition = 127;
    } else if (winWidth < 401) {
        stopPoint = 85;
        fixedPoint = 178;
        titleStopPoint = 40;
        titleFixedPoint = 65;
        fixedTitlePosition = 135;
        headerBarHeight = 200;
    } else if (winWidth < 601) {
        stopPoint = 85;
        fixedPoint = 178;
        titleStopPoint = 27;
        titleFixedPoint = 83;
        fixedTitlePosition = 135;
        headerBarHeight = 196;
    } else {
        stopPoint = 85;
        fixedPoint = 178;
        titleStopPoint = 40;
        titleFixedPoint = 89;
        fixedTitlePosition = 127;
        headerBarHeight = 200;
    }
}

function scrollFunction() {
    let debug = false;
    let scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (debug) console.log('scrollTop = ' + scrollTop);
    if ((scrollTop > stopPoint) && scrollTop < fixedPoint) {
        // handles scrolling for the left and right side menus
        //if (debug) console.log('NAV margin-top: ' + (scrollTop - stopPoint) + "px");
        mainNav.marginTop = (scrollTop - stopPoint - 1) + "px";
        sidebarMenu.style.marginTop = (scrollTop - stopPoint - 1) + "px";
        positionFixed = false;
    } else if (scrollTop > fixedPoint && !positionFixed) {
        //if (debug) console.log('NAV 92px');
        mainNav.marginTop = '92px';
        sidebarMenu.style.marginTop = '92px';
        positionFixed = true;
    } else if (scrollTop < stopPoint) {
        //if (debug) console.log('NAV 0');
        mainNav.marginTop = 0;
        sidebarMenu.style.marginTop = 0;
        positionFixed = false;
    }
    if ((scrollTop > titleStopPoint) && scrollTop < titleFixedPoint) {
        // handles scrolling for the title and green header area
        if (debug) console.log('scrolling title down: ' + (scrollTop - titleStopPoint + 79) + "px");    
        // once the title has reached its stop point, scrolling down as much as the page is scrolling up (to keep it in place on the page)    
        mainTitle.top = (scrollTop - titleStopPoint + 79) + "px";
        titlePositionFixed = false;
    } else if (scrollTop > titleFixedPoint && !titlePositionFixed) {
        // the point the page has scrolled past the title scrolling limit. Fixes it in position.
        if (debug) console.log('title position fixed at: ' + fixedTitlePosition + 'px');
        mainTitle.top = fixedTitlePosition + 'px';
        //headerPanel.height = headerBarHeight + 'px';
        titlePositionFixed = true;
    } else if (scrollTop < titleFixedPoint) {
        if (debug) console.log('no scrolling, title fixed at 80px');
        mainTitle.top = '80px';
        headerPanel.height = headerBarHeight + 'px';
        titlePositionFixed = false;
    }
}

// ----------- BEGIN code for getting anchors to the right place -------------

function findPos(obj) {
    if (!obj) return true;
	var curleft = curtop = 0;
    if (obj.offsetParent) {
        do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return [curleft,curtop];
    }
}
function checkURLForAnchor(thisURL){
    if (!thisURL) thisURL = window.location.href;
    let anchorPos = thisURL.indexOf('#');
    if (anchorPos > -1){
        // this page is being targeted to an anchor link somewhere on the page during intial load
        scrollToAnchor(thisURL.substr(anchorPos));
    }
}
function scrollToAnchor(anchorTag, extraAmt){
    extraAmt = (extraAmt == null) ? 0 : extraAmt;
    // given an anchor tag, scrolls to it on the page. Assumption: there is a matching ID on the same object
    let loc = findPos(document.querySelector(anchorTag));
    window.scrollTo(loc[0], loc[1] + extraAmt); // move down extra from top of browser window to get past header
}
function getAnchor(href){
    let anchorPos = href.indexOf('#');
    if (anchorPos > -1) {
        return href.substr(anchorPos);
    }
    return '';
}

function gotoAnchorTag(anchorTag) {
    scrollToAnchor(anchorTag, -140); 
}
window.onload = function() {
   checkURLForAnchor();
   scrollFunction(); 
   checkWidth();
};

// ----------- END code for getting anchors to the right place -------------