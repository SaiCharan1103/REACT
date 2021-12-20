import React from 'react'
import Person from './Person'

function NameList() {
    const persons =[
        {
            id:1,
            name: 'Bruce',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name: 'Clark',
            age:32,
            skill:'Angular'
        },
        {
            id:3,
            name: 'Diana',
            age:23,
            skill:'.net'
        }
    ]
    const names =['Bruce','Diana']
    const personList = persons.map(person =><Person key={person.id} person={person} />)
        return (
        <div>{personList }</div>
    )
}
export default NameList
