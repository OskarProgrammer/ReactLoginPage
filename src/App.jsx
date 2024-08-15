import { useState } from 'react'
import { LoginForm } from './components/LoginForm'
import { Page } from "./components/Page"
import { RegForm } from './components/RegForm'

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
  const [isLoginForm, setIsLoginForm] = useState(true)
  const [dataUser, setDataUser] = useState({login: "", pass: "", isAdmin: false, key: ""})

  const addPerson = (data) => {
    const newData = {...data, key: crypto.randomUUID()}
    const newPeople = [...people, newData]
    setPeople(newPeople)
    console.log(people)
  }

  const checkPerson = ([name, pass]) => {
      console.log(name, pass)
      for (let i = 0 ; i < people.length; i++){
          if (name == people[i].login && pass == people[i].pass){
            setIsLogged(true)
            setDataUser({login: people[i].login, pass: people[i].pass, isAdmin: people[i].isAdmin, key: people[i].key})
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

  const changeForm = () => {
      setIsLoginForm(!isLoginForm)
  }

  return (
    <>
      {isLogged ? <Page data={dataUser} people={dataUser.isAdmin ? people : ""} onDelete={deletePerson} onLogOut={logOut} /> :
        (isLoginForm ? <LoginForm onLogin={checkPerson} onRegForm={changeForm} /> : <RegForm onCreateAccount={addPerson} onLoginForm={changeForm} />)}
    </>
  )
}

export default App
