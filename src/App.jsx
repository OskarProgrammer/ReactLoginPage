import { useState } from 'react'
import { LoginForm } from './components/LoginForm'
import {Page} from "./components/Page"

const initialPeople = [
  {
    login: "oskar",
    pass: "root",
    isAdmin: true,
    key: crypto.randomUUID()
  },
  {
    login: "robert",
    pass: "root",
    isAdmin: false,
    key: crypto.randomUUID()
  },
  {
    login: "wera",
    pass: "root",
    isAdmin: false,
    key: crypto.randomUUID()
  }
]

function App() {
  const [people, setPeople] = useState(initialPeople)
  const [isLogged, setIsLogged] = useState(false)
  const [user, setUser] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)
  const [isFaulty, setIsFaulty] = useState(false)
  const [key, setKey] = useState("")

  const addPerson = (data) => {
    setIsFaulty(false)
    const newPeople = [...people, data]
    setPeople(newPeople)

  }

  const checkPerson = ([name, pass]) => {

      for (let i = 0 ; i < people.length; i++){
          if (name == people[i].login && pass == people[i].pass){
            setIsLogged(true)
            setUser(name)
            setKey(people[i].key)
            setIsAdmin(people[i].isAdmin)
            return true
          } 
      }
      return false
  }

  const logOut = () => {
      setIsLogged(false)
  }

  const deletePerson = (key) => {
      let newPeople = []
      for (let i = 0; i < people.length; i++){
          if (people[i].key !== key){
            newPeople.push(people[i])
          }
      }
      setPeople(newPeople)
  }

  return (
    <>
      {isLogged ? <Page onDelete={deletePerson} onLogOut={logOut} login={user} keyItem={key} isAdmin={isAdmin} people={isAdmin ? people : ""}/> : <LoginForm onRegister={addPerson} onLogin={checkPerson}/>}
    </>
  )
}

export default App
