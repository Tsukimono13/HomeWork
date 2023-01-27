import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return action.payload === "up" ? state.sort(function (a, b) {
                return a.name.localeCompare(b.name)
            }) : state.sort(function (a, b) {
                return b.name.localeCompare(a.name) // need to fix
        })}
        case 'check': {
            return state.filter(el=> el.age >= 18) // need to fix
        }
        default:
            return state
    }
}
