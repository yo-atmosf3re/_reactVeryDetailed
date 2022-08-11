import { reducer, StateType, TOGGLE_COLLAPSED } from "./reducer";

test('collapsed should be true', () => {
   const state: StateType = {
      collapsed: false
   }
   const newState = reducer(state, { type: TOGGLE_COLLAPSED })
   expect(newState.collapsed).toBe(true)
})

test('collapsed should be fasle', () => {
   const state: StateType = {
      collapsed: true
   }
   const newState = reducer(state, { type: TOGGLE_COLLAPSED })
   expect(newState.collapsed).toBe(false)
})

test('action type should be corrected, else throw error', () => {
   const state: StateType = {
      collapsed: true
   }
   expect(() => { reducer(state, { type: 'FAKETYPE' }) }).toThrowError();
})

export default 1;