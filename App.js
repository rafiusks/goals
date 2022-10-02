import { useState } from "react"
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native"

import GoalItem from "./components/GoalItem"

export default function App() {
	const [enteredGoalText, setEnteredGoalText] = useState("")
	const [courseGoals, setCourseGoals] = useState([])

	function goInputHandler(enteredText) {
		setEnteredGoalText(enteredText)
	}

	function addGoalHandler() {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
		])
	}

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Your course goal!"
					style={styles.inputText}
					onChangeText={goInputHandler}
				/>
				<Button title="Add Goal" onPress={addGoalHandler} />
			</View>
			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => {
						return <GoalItem text={itemData.item.text} />
					}}
					keyExtractor={(item, index) => {
						return item.id
					}}
					alwaysBounceVertical={false}
				/>
			</View>
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
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 24,
		borderBottomWidth: 0.5,
		borderBottomColor: "#cccccc",
	},
	inputText: {
		borderWidth: 0.5,
		width: "70%",
		marginRight: 8,
		padding: 8,
		borderColor: "#cccccc",
	},
	goalsContainer: {
		flex: 5,
	},
})
