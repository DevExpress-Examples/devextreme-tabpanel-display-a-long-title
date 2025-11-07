$(() => {
  const commonConfiguration = {
    width: 400,
    itemTemplate(data, index, element) {
      element.text(data.title);
    },
    itemTitleTemplate(data, index, element) {
      element.text(data.title);
    },
    dataSource: tabPanelItems,
    focusStateEnabled: false,
    scrollByContent: true,
    scrollingEnabled: true,
    showNavButtons: true,
    deferRendering: true,
  };

  $('#tabpanel1').dxTabPanel({
    ...commonConfiguration,
    itemTitleTemplate(data, index, element) {
      element.text(data.title);
      element.attr('title', data.title);
      element.addClass('show-ellipsis');
    },
  });
  $('#tabpanel2').dxTabPanel({
    ...commonConfiguration,
  });
  $('#tabpanel3').dxTabPanel({
    ...commonConfiguration,
  });
});

const tabPanelItems = [
  {
    title: 'Lorem ipsum',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];
