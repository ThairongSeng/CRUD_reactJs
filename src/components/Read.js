import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function Read() {
  const [users, setUsers] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((data) => setUsers(data.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           Details of User
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
         Name : {users.name}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
         Email : {users.email}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
         Phone : {users.phone}
        </p>
        <Link
          to={`/update/${id}`}
          class="mr-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Edit
        </Link>
        <Link
          to="/"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Back
        </Link>
      </div>
    </div>
  )
}
