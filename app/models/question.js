import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  note: DS.attr(),
  comments: DS.hasMany('comment',{async:true})
});
