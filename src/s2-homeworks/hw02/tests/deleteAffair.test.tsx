import React from 'react'
import { AffairType } from '../HW2'

let initialState: AffairType[]

beforeEach(() => {
    initialState = [
        { _id: 1, name: 'React', priority: 'high' },
        { _id: 2, name: 'anime', priority: 'low' },
        { _id: 3, name: 'games', priority: 'low' },
        { _id: 4, name: 'work', priority: 'high' },
        { _id: 5, name: 'html & css', priority: 'middle' },
    ]
})

const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
     return affairs.filter(a => a._id !== _id)
     // need to fix
}

test('delete 0', () => {
    const newState = deleteAffair(initialState, 0)
    expect(newState.length).toBe(5)
})
test('delete 1', () => {
    const newState = deleteAffair(initialState, 1)
    expect(newState.length).toBe(4)
})
test('delete 3', () => {
    const newState = deleteAffair(initialState, 3)
    expect(newState.length).toBe(4)
})
test('delete 5', () => {
    const newState = deleteAffair(initialState, 5)
    expect(newState.length).toBe(4)
})
test('delete 6', () => {
    const newState = deleteAffair(initialState, 6)
    expect(newState.length).toBe(5)
})
