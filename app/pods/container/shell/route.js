import OverlayRoute from 'ui/pods/overlay/route';

export default OverlayRoute.extend({
  model: function() {
    var container = this.modelFor('container');
    var opt = {
      attachStdin: true,
      attachStdout: true,
      tty: true,
      command: ["/bin/sh","-c",'[ -x /bin/bash ] && exec /bin/bash || exec /bin/sh'],
    };
    var promise = container.doAction('execute',opt).then(function(exec) {
      exec.set('instance', container);
      return exec;
    });

    return promise;
  },

  renderTemplate: function() {
    this.render('container/shell', {into: 'application', outlet: 'overlay'});
  },

  actions: {
    cancel: function() {
      this.send('goToPrevious');
    },
  }
});