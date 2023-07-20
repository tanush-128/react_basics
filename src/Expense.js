class Expense {
    constructor(date, desc, amount) {
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      this.amount = amount;
      this.date = date;
      this.desc = desc;
      this.month = months[date.getMonth()];
      this.year = date.getFullYear();
      this.day = date.getDate();
    }
  }

  export default Expense