const getCurrentWeek = () => {

  const currentDay = new Date
  const firstDay = new Date(currentDay.setDate(currentDay.getDate() - currentDay.getDay()))
  const lastDay = new Date(currentDay.setDate(currentDay.getDate() - currentDay.getDay() + 6))
  return `${firstDay.toDateString()} - ${lastDay.toDateString()}`

}

export default getCurrentWeek