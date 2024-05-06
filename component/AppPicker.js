
import {
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TextInputProps,
	View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../config/Colors";
import FontSize from "../config/FontSize";
import Spacing from "../config/Spacing";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import colors from '../config/Colors'

export default function AppPicker({
	value,
	onChangeText,
	placeholder,
	icon,
	...otherProps
}) {
	const [focused, setFocused] = useState(false);

	return (
		<SafeAreaView
			style={[
				styles.container,
				focused && {
					borderWidth: 3,
					borderColor: Colors.primary,
					shadowOffset: { width: 4, height: Spacing },
					shadowColor: Colors.primary,
					shadowOpacity: 0.2,
					shadowRadius: Spacing,
					backgroundColor: Colors.lightPrimary,
				},
			]}
		>
			<MaterialCommunityIcons name={icon} size={20} />

			<Text
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				placeholderTextColor={Colors.darkText}
				value={value}
				onChange={onChangeText}
				placeholder={placeholder}
				style={[
                    {
                        flex:1,
						fontSize: FontSize.small,
						padding: Spacing * 2,
						backgroundColor: Colors.lightPrimary,
						borderRadius: Spacing,
						marginVertical: Spacing,
						// width:'100%'
					},
				]}
				{...otherProps}
			>
				{placeholder}
			</Text>
			<MaterialCommunityIcons name='chevron-down' size={20} />
		</SafeAreaView>
	);
}

// export default AppTextInput;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 8,
		paddingHorizontal: 10,
		marginVertical: 5,
		backgroundColor: Colors.lightPrimary,
	},
});
