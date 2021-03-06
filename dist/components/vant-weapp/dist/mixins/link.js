'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var link = exports.link = Behavior({
  properties: {
    url: String,
    linkType: {
      type: String,
      value: 'navigateTo'
    }
  },
  methods: {
    jumpLink: function jumpLink() {
      var urlKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'url';

      var url = this.data[urlKey];
      if (url) {
        wx[this.data.linkType]({ url: url });
      }
    }
  }
});