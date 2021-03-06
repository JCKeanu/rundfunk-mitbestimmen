import Component from '@ember/component';
import { isNone } from '@ember/utils';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  demography: service(),
  genders: alias('demography.genders'),
  ageGroups: alias('demography.ageGroupLabels'),

  uiDropdownClass: computed('user', function() {
    return this.get('user.isValid') ? 'selection fluid' : 'disabled';
  }),

  actions: {
    update(attribute, value) {
      let user = this.get('user');
      if (!isNone(user)){
        user.set(attribute, value);
        user.save();
      }
    }
  }
  });
