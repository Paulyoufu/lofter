// Template.contacts.created = function () {
//   this.autorun(function () {
//     this.subscription = Meteor.subscribe('contacts');
//   }.bind(this));
// };

// Template.contacts.rendered = function () {
//   this.autorun(function () {
//     if (!this.subscription.ready()) {
//       IonLoading.show();
//     } else {
//       IonLoading.hide();
//     }
//   }.bind(this));
// };

var ContactsStatic = [
{
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
},
{
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
},
{
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
},
{
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
}
];


Template.contacts.helpers({
  contacts: function () {
    return ContactsStatic;
  }
});
