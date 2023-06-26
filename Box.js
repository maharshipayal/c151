AFRAME.registerComponent('move-box', {
    schema: {
        moveX:{type:"number", default:1}
    },

    init: function () {
      // Do something when component first attached.
    },

    update: function () {
      // Do something when component's data is updated.
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function () {
      // Do something on every scene tick or frame.
      this.data.moveX = this.data.moveX + 0.01;
      var pos = this.el.getAttribute("position");
      pos.x = this.data.moveX;
      this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.y});
    }
});
