class FetchUsers {

  static async findUser() {
    try {
      const response = await fetch("/api/v1/users")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      return responseBody.user.id
    } catch(error) {
      console.error(`Error in Fetch ${error.message}`)
    }
  }

  static async getUserData(userId) {
    try {
      const response = await fetch(`/api/v1/users/${userId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      return responseBody.userData
    }
    catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  static async setGoal(newGoal, userId) {
    try {
      const response = await fetch(`/api/v1/users/${userId}`, {
        method: "PATCH",
        credentials: "same-origin",
        body: JSON.stringify({
          goal: newGoal
        }),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      })
      const responseBody = await response.json()
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      return responseBody
    } catch(error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }
}

export default FetchUsers