import { StyleSheet, View, FlatList } from "react-native"
import GoalItem from "./GoalItem"

function GoalContainer(props) {
	return (
		<View style={styles.goalsContainer}>
			<FlatList
				data={props.data}
				renderItem={(itemData) => {
					return (
						<GoalItem
							text={itemData.item.text}
							id={itemData.item.id}
							onDeleteItem={props.onDeleteItem}
						/>
					)
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
