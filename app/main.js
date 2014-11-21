require([
	       'wire!app/infrastructure/stores-spec.js',
         'dojo/_base/array',
         'dojo/_base/window',
         'dojo/parser',
         'dojo/dom-construct',
         'dojo/domReady!'],

function(ctx, array, win, parser, domConstruct) {

  parser.parse().then(function() {
    var ul = domConstruct.create('ul');
    domConstruct.place(ul, win.doc.body, 'last');
    ctx.fooStore.query().forEach(function(item) {
        domConstruct.create('li', { innerHTML : item.label }, ul);
    });
  });
});
