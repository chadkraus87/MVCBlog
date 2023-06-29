module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  content: function() {
    return '';
  },
  set: function(value, options) {
    // Set a value in the template context
    options.data.root[value] = options.fn(this);
  }
};
