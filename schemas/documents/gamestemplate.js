export default {
    name: "gamestemplate",
    type: "document",
    title: "Games Template",
    fields: [
      {
        title: "Name",
        name: "name",
        type: "string",
      },
      {
        name: "commonitems",
        type: "commonitems",
        title: "Common Items",
        of: [{ type: "commonitems" }]
      }
    ]
  };