import useDeletedAtNull from "./rules/use-deletedAt-null";

module.exports = {
  name: "@yoke-global/prisma-soft-delete",
  version: "0.0.2",
  rules: {
    "use-deletedAt-null": useDeletedAtNull,
  },
};
