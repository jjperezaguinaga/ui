import Ember from 'ember';
import Util from 'ui/utils/util';

export default Ember.Mixin.create({
  endpoint: Ember.inject.service(),

  actions: {
    machineConfig: function() {
      var url;
      if ( this.get('model.type') === 'machine' )
      {
        url = this.linkFor('config');
      }
      else
      {
        url = this.get('model.machine').linkFor('config');
      }

      url = this.get('endpoint').addAuthParams(url);
      Util.download(url);
    }
  }
});
