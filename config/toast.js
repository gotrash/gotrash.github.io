export default {
  position: "bottom-right",
  duration: 2000,
  register: [
    // Register custom toasts
    {
      name: "gotrash-error",
      message: payload => {
        const s = !payload && !payload.message ? "Oops, somethings went wrong!" : payload.message;
        return s;
      },
      options: {
        className: "bg-danger",
        type: "error"
      }
    },
    {
      name: "gotrash-disabled",
      message: payload => {
        const s = !payload && !payload.message ? "Setting disabled!" : `${payload.message} is now disabled!`;
        return s;
      },
      options: {
        className: "bg-danger",
        type: "error"
      }
    },
    {
      name: "gotrash-enabled",
      message: payload => {
        const s = !payload && !payload.message ? "Setting enabled!" : `${payload.message} is now enabled!`;
        return s;
      },
      options: {
        className: "bg-primary",
        type: "success"
      }
    },
    {
      name: "gotrash-success",
      message: payload => {
        const s = !payload && !payload.message ? "Oops, somethings went wrong!" : payload.message;
        return s;
      },
      options: {
        className: "bg-primary",
        type: "success"
      }
    },
    {
      name: "gotrash-info",
      message: payload => {
        const s = !payload && !payload.message ? "Oops, somethings went wrong!" : payload.message;
        return s;
      },
      options: {
        className: "bg-info",
        type: "info"
      }
    }
  ]
}
