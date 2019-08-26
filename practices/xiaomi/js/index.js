(function($, window, undefined) {
  var ui = {
    $search_text: $("#search-text"),
    $search_keywords: $("#search-keywords"),
    $ui_pager: $("#ui-pager"),
    $btn_prev: $("#btn-prev"),
    $btn_next: $("#btn-next"),
    $banner_item: $("#banner-wrap li"),
    $tab_list: $("#tab-list"),
    $banner: $("#banner-wrap")
  };

  //轮播组件
  var swiper_plugin = {
    curIndex: 0,
    nlength: ui.$banner_item.length,
    time: 6000,
    mouseOver: 0,
    init: function() {
      this.view();
      this.listen();
    },
    view: function() {
      var self = this;
      function timer() {
        if (!self.mouseOver) {
          self.fNext();
        }
        setTimeout(timer, self.time);
      }
      setTimeout(timer, self.time);
    },
    listen: function() {
      var self = this;
      ui.$btn_prev.on("click", function() {
        self.fPrev();
      });
      ui.$btn_next.on("click", function() {
        self.fNext();
      });
      ui.$ui_pager.on("click", "li", function() {
        self.curIndex = $(this).index();
        self.fToggleActiveByIndex(self.curIndex);
      });
      ui.$banner_item.on("mouseover", function() {
        self.mouseOver = 1;
      });
      ui.$banner_item.on("mouseleave", function() {
        self.mouseOver = 0;
      });
    },
    fPrev: function() {
      //轮播向前按钮
      var self = this;
      if (0 == self.curIndex) {
        self.curIndex = self.nlength - 1;
      } else {
        self.curIndex -= 1;
      }
      self.fToggleActiveByIndex(self.curIndex);
    },
    fNext: function() {
      //轮播向后按钮
      var self = this;
      if (self.nlength - 1 == self.curIndex) {
        self.curIndex = 0;
      } else {
        self.curIndex += 1;
      }
      self.fToggleActiveByIndex(self.curIndex);
    },
    fToggleActiveByIndex: function(index) {
      var self = this;
      ui.$banner_item
        .fadeOut()
        .removeClass("slide-active")
        .eq(index)
        .fadeIn()
        .addClass("slide-active");
      ui.$ui_pager
        .find("li")
        .removeClass("active")
        .eq(index)
        .addClass("active");
    }
  };
  //初始化轮播插件
  swiper_plugin.init();

  ui.$search_text
    .focus(function() {
      $(this)
        .closest("form")
        .toggleClass("search-form-active");
      ui.$search_keywords.fadeOut();
    })
    .blur(function() {
      $(this)
        .closest("form")
        .toggleClass("search-form-active");
      ui.$search_keywords.fadeIn();
    });

  $(".nav-item,#header-underpop").mouseover(function() {
    $("#header-underpop").addClass("header-underpop-hover");
  });
  $(".nav-item,#header-underpop").mouseleave(function() {
    $("#header-underpop").removeClass("header-underpop-hover");
  });

  $(".category-item,.sitecategorypop").mouseover(() => {
    $(".site-categorypop").show();
  });
  $(".category-list,.sitecategorypop").mouseleave(() => {
    $(".site-categorypop").hide();
  });

  $("#btn-prev1").on("click", function() {
    let stargoods = $(".star-goods-list");
    if (stargoods.css("left") !== "0px") {
      stargoods.css("left", "0px");
    }
  });
  $("#btn-next1").on("click", function() {
    let stargoods = $(".star-goods-list");
    if (stargoods.css("left") !== "-992px") {
      stargoods.css("left", "-992px");
    }
  });

  $("#backtop").on("click", () => {
    $(window).scrollTop(0);
  });
  $(window).scroll(() => {
    if ($(window).scrollTop() >= 1200) {
      $("#backtop").show();
    } else {
      $("#backtop").hide();
    }
  });
})(jQuery, window);
