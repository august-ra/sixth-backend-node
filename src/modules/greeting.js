
function getGreeting() {
  const hours = (new Date()).getHours()

  if (hours >= 6 && hours < 12)
    return "Good morning"
  else if (hours >= 12 && hours < 18)
    return "Good afternoon"
  else if (hours >= 18)
    return "Good evening"
  else
    return "Hello"
}

module.exports = getGreeting
