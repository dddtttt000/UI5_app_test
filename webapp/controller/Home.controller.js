sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/PDFViewer",
    "sap/ui/model/json/JSONModel",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, PDFViewer, JSONModel) {
    "use strict"

    return Controller.extend("project1.controller.Home", {
      onInit: function () {
        this._sValidPath = "model/sample.pdf"
        this._sInvalidPath = sap.ui.require.toUrl(
          "sap/m/sample/PDFViewerEmbedded/sample_nonexisting.pdf"
        )
        this._oModel = new JSONModel({
          Source: this._sValidPath,
          Title: "My Custom",
          Height: "600px",
        })
        this.getView().setModel(this._oModel)
      },

      onCorrectPathClick: function () {
        this._oModel.setProperty("/Source", this._sValidPath)
      },

      onIncorrectPathClick: function () {
        this._oModel.setProperty("/Source", this._sInvalidPath)
      },
    })
  }
)
