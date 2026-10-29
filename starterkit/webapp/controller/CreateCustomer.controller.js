sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend(
        "stk.starterkit.controller.CreateCustomer",
        {
            onNavBack: function () {
                this.getOwnerComponent()
                    .getRouter()
                    .navTo("CustomersList");
            },

            onCreate: function () {
                const oView = this.getView();
                const oModel = oView.getModel();
                oModel.setUseBatch(false);
                const oControl = this.byId("CustomerIDCreateCustomer");

                const sId = this.byId("CustomerIDCreateCustomer")
                    .getValue()
                    .trim();

                const sName = this.byId("CustomerNameCreateCustomer")
                    .getValue()
                    .trim();

                if (!sId || !sName) {
                    MessageBox.warning(
                        "Uzupełnij ID klienta i nazwę firmy."
                    );
                    return;
                }

                oView.setBusy(true);

                oModel.create("/Customers", {
                    CustomerID: sId,
                    CompanyName: sName
                }, {
                    success: () => {
                        oView.setBusy(false);

                        this.byId("CustomerIDCreateCustomer").setValue("");
                        this.byId("CustomerNameCreateCustomer").setValue("");

                        MessageToast.show("Utworzono klienta.");
                        this.onNavBack();
                    },

                    error: (oError) => {
                        oView.setBusy(false);

                        MessageBox.error(
                            "Nie udało się utworzyć klienta.",
                            {
                                details:
                                    oError.responseText ||
                                    oError.message
                            }
                        );
                    }
                });
            }
        }
    );
});