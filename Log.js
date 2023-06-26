AFRAME.registerComponent('log', {
    schema: {
        message:{type:'string',default:'Hello World!'}
    },

    init: function () {
      // Do something when component first attached.
      console.log(this.data.message)
    },

    
});
