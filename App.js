import { useState } from "react"
import { StyleSheet, View, Button } from "react-native"

import GoalInput from "./components/GoalInput"
import GoalContainer from "./components/GoalContainer"

export default function App() {
	const [modalIsVisible, setModalIsVisible] = useState(false)
	const [courseGoals, setCourseGoals] = useState([])

	function startAddGoalHandler() {
		setModalIsVisible(true)
	}

	function addGoalHandler(enteredGoalText) {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
		])
	}

	function deleteGoalHandler(id) {
		setCourseGoals((currentCourseGoals) => {
			return currentCourseGoals.filter((goal) => goal.id !== id)
		})
	}

	return (
		<View style={styles.appContainer}>
			<Button
				title="Add new goal"
				color="#5e0acc"
				onPress={startAddGoalHandler}
			/>
			<GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} />
			<GoalContainer data={courseGoals} onDeleteItem={deleteGoalHandler} />
		</View>
	)
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		marginTop: 50,
		paddingHorizontal: 20,
		maxWidth: "100%",
	},
})
