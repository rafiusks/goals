import { StyleSheet, View, FlatList } from "react-native"
import GoalItem from "./GoalItem"

function GoalContainer(prop) {
	return (
		<View style={styles.goalsContainer}>
			<FlatList
				data={prop.data}
				renderItem={(itemData) => {
					return <GoalItem text={itemData.item.text} />
				}}
				keyExtractor={(item, index) => {
					return item.id
				}}
				alwaysBounceVertical={false}
			/>
		</View>
	)
}

export default GoalContainer

const styles = StyleSheet.create({
	goalsContainer: {
		flex: 5,
	},
})
