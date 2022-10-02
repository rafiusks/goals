import { useState } from "react"
import { StyleSheet, View, TextInput, Button } from "react-native"

function GoalInput(props) {
	const [enteredGoalText, setEnteredGoalText] = useState("")

	function goInputHandler(enteredText) {
		setEnteredGoalText(enteredText)
	}

	function AddGoalHandler() {
		props.onAddGoal(enteredGoalText)
		setEnteredGoalText("")
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput
				placeholder="Your course goal!"
				style={styles.inputText}
				onChangeText={goInputHandler}
				value={enteredGoalText}
			/>
			<Button title="Add Goal" onPress={AddGoalHandler} />
		</View>
	)
}

export default GoalInput

const styles = StyleSheet.create({
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
})
