function dateBuilder(d) {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
  
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    
    let date = d.getDate();
    let month = months[d.getMonth()];
    let day = days[d.getDay()];
    return `${day} ${date} ${month} `;
  }
  
  export default dateBuilder;