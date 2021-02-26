export default {
    pre: {
      padding: 15,
      border: "1px solid #d7d7d7",
      color: "#555",
      borderRadius: 4,
      width: "100%",
      boxSizing: "border-box",
    },
    preWithError: {
      border: "1px solid #f00",
      padding: 15,
      color: "#555",
      borderRadius: 4,
      width: "100%",
      boxSizing: "border-box",
      "&:active": {
        border: "1px solid #f00",
      }, 
      "&:focus": {
        border: "1px solid #f00",
        outline: 'none'
      } 
    },
    error: {
      color: "#f00"
    }
  }