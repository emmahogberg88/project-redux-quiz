import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quiz } from 'reducers/quiz'
import { WelcomePage } from 'components/WelcomePage'

const reducer = combineReducers({
	quiz: quiz.reducer,
})

const store = configureStore({ reducer })

export const App = () => {
	return (
		<Provider store={store}>
			<WelcomePage />
		</Provider>
	)
}
