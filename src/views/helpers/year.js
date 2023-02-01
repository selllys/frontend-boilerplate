export default {
  register(Handlebars) {
    Handlebars.registerHelper('year', function () {

      return (new Date()).getFullYear();
    });
  },
};
