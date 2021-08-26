sap.ui.define([
    'sap/m/GroupHeaderListItem',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function (GroupHeaderListItem, Controller, JSONModel) {
    "use strict";

    var Controller = Controller.extend("DemoUXapp.controller.MainNavigation.MainPage", {
        onInit: function (evt) {
            var oModel = new JSONModel(sap.ui.require.toUrl("DemoUXapp/localService/mockdata/products.json"));
            this.getView().setModel(oModel);
        },

        getGroupHeader: function (oGroup) {
            return new GroupHeaderListItem({
                title: oGroup.key,
                upperCase: false
            });
        }
    });

    return Controller;
});