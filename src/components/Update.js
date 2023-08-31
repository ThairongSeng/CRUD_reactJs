import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

export default function Update() {
  const { id } = useParams()

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  })

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((data) => {
        setValues(data.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const navigate = useNavigate()

  const handleUpdate = (event) => {
    event.preventDefault()
    axios
      .put("https://jsonplaceholder.typicode.com/user/" + id, values)
      .then((data) => {
        console.log(data)
        navigate("/")
      })
      .catch((err) => console.log(err))
  }

  return (
    <div class="w-[60%] mx-auto mt-20 bg-neutral-50 p-14">
      <h1 class="font-bold text-4xl mb-7">Update User</h1>
      <form onSubmit={handleUpdate}>
        <div class="mb-6">
          <label
            for="username"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.name })}
            type="text"
            id="username"
            placeholder="username"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.email })}
            type="email"
            id="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com"
            required
          />
        </div>

        <div class="mb-6">
          <label
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone
          </label>
          <input
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.phone })}
            type="text"
            id="phone"
            placeholder="phone number"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>

        <Link class="text-white mr-5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Update
        </Link>

        <Link
          to="/"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Back
        </Link>
      </form>
    </div>
  )
}
