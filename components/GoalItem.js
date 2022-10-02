import { StyleSheet, Text, View, Pressable } from "react-native"

function GoalItem(props) {
	return (
		<View style={styles.goItem}>
			<Pressable
				android_ripple={{ color: "#dddddd" }}
				onPress={props.onDeleteItem.bind(this, props.id)}
				style={({ pressed }) => pressed && styles.pressedItem}
			>
				<Text style={styles.goItemText}>{props.text}</Text>
			</Pressable>
		</View>
	)
}

export default GoalItem

const styles = StyleSheet.create({
	goItem: {
		margin: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	pressedItem: {
		opacity: 0.5,
	},
	goItemText: {
		color: "white",
		padding: 8,
	},
})
