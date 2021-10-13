module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_time: (date) => {
// toLocaleTimeString() without arguments depends on the implementation,
// the default locale, and the default time zone
    return date.toLocaleTimeString();
  }
};
