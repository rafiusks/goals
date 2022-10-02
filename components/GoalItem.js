import { StyleSheet, Text, View } from "react-native"

function GoalItem(props) {
	return (
		<View style={styles.goItem}>
			<Text style={styles.goItemText}>{props.text}</Text>
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
	goItemText: {
		color: "white",
	},
})
