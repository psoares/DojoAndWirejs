define({ // Wire spec

  fooStore : {
    create: {
      module: 'dojo/store/Memory',
      args: { data : [
        {id:1, label:'foo', value:'foo'},
        {id:2, label:'bar', value:'bar'},
        {id:2, label:'baz', value:'baz'}
      ]}
    }
  }

});
