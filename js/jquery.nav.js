(function(a,e,b,d){var c=function(f,g){this.elem=f;this.$elem=a(f);this.options=g;this.metadata=this.$elem.data("plugin-options");this.$win=a(e);this.sections={};this.didScroll=false;this.$doc=a(b);this.docHeight=this.$doc.height()};c.prototype={defaults:{navItems:"a",currentClass:"current",changeHash:false,easing:"swing",filter:"",scrollOffset:89,scrollSpeed:750,scrollThreshold:0.5,begin:false,end:false,scrollChange:false},init:function(){this.config=a.extend({},this.defaults,this.options,this.metadata);this.$nav=this.$elem.find(this.config.navItems);if(this.config.filter!==""){this.$nav=this.$nav.filter(this.config.filter)}this.$nav.on("click.onePageNav",a.proxy(this.handleClick,this));this.getPositions();this.bindInterval();this.$win.on("resize.onePageNav",a.proxy(this.getPositions,this));return this},adjustNav:function(g,f){g.$elem.find("."+g.config.currentClass).removeClass(g.config.currentClass);f.addClass(g.config.currentClass)},bindInterval:function(){var g=this;var f;g.$win.on("scroll.onePageNav",function(){g.didScroll=true});g.t=setInterval(function(){f=g.$doc.height();if(g.didScroll){g.didScroll=false;g.scrollChange()}if(f!==g.docHeight){g.docHeight=f;g.getPositions()}},250)},getHash:function(f){return f.attr("href").split("#")[1]},getPositions:function(){var h=this;var g;var i;var f;h.$nav.each(function(){g=h.getHash(a(this));f=a("#"+g);if(f.length){i=f.offset().top;h.sections[g]=Math.round(i)}})},getSection:function(i){var f=null;var h=Math.round(this.$win.height()*this.config.scrollThreshold);for(var g in this.sections){if((this.sections[g]-h)<i){f=g}}return f},handleClick:function(h){var j=this;var f=a(h.currentTarget);var g=f.parent();var i="#"+j.getHash(f);if(!g.hasClass(j.config.currentClass)){if(j.config.begin){j.config.begin()}j.adjustNav(j,g);j.unbindInterval();j.scrollTo(i,function(){if(j.config.changeHash){e.location.hash=i}j.bindInterval();if(j.config.end){j.config.end()}})}h.preventDefault()},scrollChange:function(){var h=this.$win.scrollTop();var g=this.getSection(h);var f;if(g!==null){f=this.$elem.find('a[href$="#'+g+'"]').parent();if(!f.hasClass(this.config.currentClass)){this.adjustNav(this,f);if(this.config.scrollChange){this.config.scrollChange(f)}}}},scrollTo:function(h,f){var g=a(h).offset().top;a("html, body").animate({scrollTop:g-this.config.scrollOffset,},this.config.scrollSpeed,this.config.easing,f)},unbindInterval:function(){clearInterval(this.t);this.$win.unbind("scroll.onePageNav")}};c.defaults=c.prototype.defaults;a.fn.onePageNav=function(f){return this.each(function(){new c(this,f).init()})}})(jQuery,window,document);