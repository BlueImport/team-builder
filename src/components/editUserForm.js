import React, { useState } from "react"

const EditUserForm = props => {
    const [user, setUser] = useState(props.currentUser)

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({...user, [name]: value })
    }

return (
    <form onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
    }}
    >
    <label htmlFor="name">Name </label>
      <input
        id="name"
        placeholder="Enter Your Name Here"
        type="text"
        name="name"
        onChange={handleInputChange}
      />

      <label htmlFor="email">  Email </label>
      <input type = "email"
        id="email"
        placeholder="Enter Your Email Address"
        name="email"
        onChange={handleInputChange}
        value={member.email}
      />
    
        <button>Update Member Info</button>
        <button onClick={() => props.setEdit(false)} className="button">Cancel</button>

    </form>
)
}

export default EditUserForm