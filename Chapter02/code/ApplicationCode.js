function OpenSidePanel(executionContext) {
  'use strict';

  var selectedRecord = executionContext.data.entity;
  var selectedId = selectedRecord.getId().replace(/[{}]/g, "");

  var pageInput = {
    pageType: "custom",
    name: "<logical page name>",
    entityName: selectedRecord._entityType,
    recordId: selectedId,
  };
  var navigationOptions = {
    target: 2,
    position: 2,
    width: { value: 500, unit: "px" },
    title: "Gather location",
  };
  Xrm.Navigation.navigateTo(pageInput, navigationOptions)
    .then(function () {
      executionContext.data.refresh(true);
    })
    .catch(function (error) {
      executionContext.data.refresh(true);
    });
}
