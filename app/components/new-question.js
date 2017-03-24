import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        note: this.get('note'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
      content: this.set('content', '');
      author: this.set('author', '');
      note: this.set('note', '');
    }
  }
});
