import { useState } from "react"
import { StyleSheet, View } from "react-native"

import GoalInput from "./components/GoalInput"
import GoalContainer from "./components/GoalContainer"

export default function App() {
	const [courseGoals, setCourseGoals] = useState([])

	function addGoalHandler(enteredGoalText) {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
		])
	}

	return (
		<View style={styles.appContainer}>
			<GoalInput onAddGoal={addGoalHandler} />
			<GoalContainer data={courseGoals} />
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
