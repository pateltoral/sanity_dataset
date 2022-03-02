export default {
    name: "emailtemplate",
    type: "document",
    title: "Email Template",
    fields: [
      {
        name: "commonitems",
        type: "commonitems",
        title: "Common Items",
        of: [{ type: "commonitems" }]
      }
    ]
  };