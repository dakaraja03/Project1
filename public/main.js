var tour = new Tour({
  debug: true,
  storage: false,
  steps: [
    {
      element: "#logo",
      title: " Logo",
      content: "click to go homepage",
      placement: "bottom"
    },
    {
      element: "#search-navbar",
      title: "Search",
      content: "click to search items",
      placement: "left",
    },
    {
      element: "#sidebar",
      title: "Sidebar",
      content: "navigate to another pages",
      placement: "right",
    },
    {
      element: "#customerName",
      title: "Customer Name",
      content: "enter cutomer name",
      placement: "left",
    },
    {
      element: "#gender",
      title: "Gender",
      content: "click to select gender",
      placement: "left",
    },
    {
      element: "#branch",
      title: "Branch",
      content: "enter branch",
      placement: "left",
    },
    {
      element: "#dob",
      title: "Date Of Birth",
      content: "enter date of birth",
      placement: "left",
    },
    {
      element: "#comments",
      title: "Comments",
      content: "enter comments",
      placement: "left",
    },
    {
      element: "#someField",
      title: "Some Filed",
      content: "select fields",
      placement: "left",
    },
    {
      element: "#select",
      title: "Select",
      content: "select multiple checkboxes",
      placement: "left",
    },
    {
      element: "#premium-member",
      title: "Premium Member",
      content: "click the checkbox",
      placement: "left",
    },
    {
      element: "#gridRadios1",
      title: "Debit Card Type",
      content: "select one of debitcard type",
      placement: "left",
    },
    {
      element: "#myTab",
      title: "Tabs",
      content: "switch the tabs",
      placement: "left",
    }
  ]
});

setTimeout(() => {
  tour.init();
  tour.start();
}, 1000);