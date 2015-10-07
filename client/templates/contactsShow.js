// Template.contactsShow.created = function () {
//   this.autorun(function () {
//     this.subscription = Meteor.subscribe('contact', Router.current().params._id);
//   }.bind(this));
// };

// Template.contactsShow.rendered = function () {
//   this.autorun(function () {
//     if (!this.subscription.ready()) {
//       IonLoading.show();
//     } else {
//       IonLoading.hide();
//     }
//   }.bind(this));
// };

var ContactStatic = {
    "name" : {
        "first" : "Charlie",
        "last" : "Escomti"
    },
    "emails" : [ 
        {
            "label" : "Work",
            "address" : "charlie@orylyi.org"
        }
    ],
    "priority" : "Medium",
    "location" : {
        "city" : "Uturetedpentu",
        "state" : "NJ"
    },
    "details" : {
        "notes" : "Nisoncal laex yas al tioncon ly cared nolythethe enaovidis. Esi aen ingthedi ymentthe toi eringpial alcao tley the ble. Tomer thelau eer too enpe riterget. Ingytheper esion are deer esciingti racan tiesy lyreoingsi dif esyters lydi. Asri edma nadiac erproex thevi conning eo. Naacaer proallital yable exe marier ryeresto.",
        "active" : false
    },
    "avatarUrl" : "https://randomuser.me/api/portraits/thumb/men/18.jpg"
};

Template.contactsShow.helpers({
  contact: function () {
    return ContactStatic;
  },

  activeLabel: function () {
    if (this.details.active) {
      return '<i class="ion-checkmark-circled"></i> Active';
    } else {
      return '<i class="ion-minus-circled"></i> Inactive';
    }
  }
});

Template.contactsShow.events({
  'click [data-action=fake]': function (event, template) {
    event.preventDefault();
    alert('Gotcha!');
  }
});
