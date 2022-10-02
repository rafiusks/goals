import { useState } from "react"
import { StyleSheet, View, TextInput, Button, Modal } from "react-native"

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
		<Modal visible={props.visible} animationType="fade">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Your course goal!"
					style={styles.inputText}
					onChangeText={goInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Add Goal" onPress={AddGoalHandler} />
					</View>
					<View style={styles.button}>
						<Button title="Cancel" onPress={props.onCancel} />
					</View>
				</View>
			</View>
		</Modal>
	)
}

export default GoalInput

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 24,
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: "#cccccc",
	},
	inputText: {
		borderWidth: 1,
		width: "100%",
		marginRight: 8,
		padding: 8,
		borderColor: "#cccccc",
	},
	buttonContainer: {
		marginTop: 16,
		flexDirection: "row",
	},
	button: {
		width: 100,
		margin: 8,
	},
})
