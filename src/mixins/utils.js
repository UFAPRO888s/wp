export default {
  data() {
    return {
      months: [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "อาจ",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม"
      ]
    };
  },

  methods: {
    getFormattedDate: function(time) {
      let date = new Date(time);
      return `${
        this.months[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`;
    },

    goBack: function() {
      this.$router.go(-1);
    },

    getQueryString: function(name) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
    }
  }
};
