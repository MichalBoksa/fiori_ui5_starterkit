sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "stk/starterkit/model/Formatter",
    "sap/ui/core/Fragment"
],

    // @param {typeof sap.ui.core.mvc.Controller } Controller

    function (Controller, Formatter, Fragment) {
        "use strict";

        return Controller.extend("stk.starterkit.controller.CustomerDetails", {

            formatter: Formatter,
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("CustomerDetails").attachPatternMatched(this._onPatternMatched, this);
            },

            handleNavButtonPress: function () {

                this.getOwnerComponent()
                    .getRouter()
                    .navTo("CustomersList")
            },

            _onPatternMatched: function (oEvent) {
                this.getView().bindElement({
                    path: "/Customers('" + oEvent.getParameter("arguments").CustomerID + "')",
                    parameters: {
                        expand: "Orders/Employee"
                    }
                });
            },

            onContactInfoButtonPress: function () {
                var oView = this.getView();

                if (!this.byId("contactDialog")) {
                    Fragment.load({
                        id: oView.getId(),
                        name: "stk.starterkit.view.ContactInfoDialog",
                        controller: this
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                    }

                    );
                } else {
                    this.byId("contactDialog").open();
                }
            },
            onCloseContactDialog: function () {
                this.byId("contactDialog").close();
            },
        })
    }
)