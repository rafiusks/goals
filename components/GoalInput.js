import { useState } from "react"
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"

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
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require("../assets/images/goal.png")}
				></Image>
				<TextInput
					placeholder="Your course goal!"
					style={styles.inputText}
					onChangeText={goInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Cancel" onPress={props.onCancel} color="#f31282" />
					</View>
					<View style={styles.button}>
						<Button title="Add Goal" onPress={AddGoalHandler} color="#b180f0" />
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
		padding: 20,
		backgroundColor: "#311b6b",
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
	inputText: {
		borderWidth: 1,
		borderRadius: 6,
		borderColor: "#e4d0ff",
		width: "100%",
		marginRight: 8,
		padding: 16,
		backgroundColor: "#e4d0ff",
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
