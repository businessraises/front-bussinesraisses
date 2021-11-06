const messageError = (message, error) => {
  if (error) {
    document.querySelector(
      '.message-error'
    ).innerHTML = `<div class="alert alert-danger" role="alert">${message}</div>`
  } else {
    document.querySelector(
      '.message-error'
    ).innerHTML = `<div class="alert alert-success" role="alert">${message}</div>`
  }

  setTimeout(() => {
    document.querySelector('.message-error').innerHTML = ''
  }, 1000)
}

export default messageError