if (Meteor.isClient) {
  Template.xample.next_is_true = function () {
    return Session.get("next_is_true");
  };

  Template.part1.events({
    'click #next': function () {
      Session.set("next_is_true", true);
    }
  });
}
