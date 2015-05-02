/*global B2pick, Backbone, JST*/

B2pick.Views = B2pick.Views || {};

(function () {
    'use strict';

    B2pick.Views.BoundingBoxRegularName = Backbone.View.extend({

        template: JST['app/scripts/templates/bounding_box_regular_name.hbs'],

        events: {
            'click .js-edit-name': 'onEditNameClick',
            'click .js-remove': 'onRemoveClick'
        },

        onRemoveClick: function(event) {
            event.preventDefault();
            this.model.trigger('removeMe', this.model);
        },

        onEditNameClick: function(event) {
            event.preventDefault();
            this.model.trigger('editName');
        },

        render: function () {
            this.$el.html(this.template({
                name: this.model.get('name')
            }));
        }

    });

})();
