import React from 'react'

import {v1} from "uuid";
import {UserType} from "../HW3";

let initialState: any[]
const setName = (a: any[]) => {
    initialState = a
}
const pureAddUserCallback = (name: string, setUsers: any, users: Array<UserType>) => { // need to fix any
    const user = { _id: v1(), name}
    setUsers([...users, user]) }

beforeEach(() => {
    initialState = []
})


test('name 1', () => {
    pureAddUserCallback('name', setName, initialState)
    expect(initialState.length).toBe(1)
    expect(initialState[0].name).toBe('name')
    expect(!!initialState[0]._id).toBe(true)
})
