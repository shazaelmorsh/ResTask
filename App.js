import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	Image,
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	ScrollView,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { icons, images } from "./constants";
import Svg, { Path } from "react-native-svg";
import { SliderBox } from "react-native-image-slider-box";

export default function App() {
	const Images = [images.promo1, images.promo2];
	const Icons = [
		icons.reservation,
		icons.joinTable,
		icons.reservationandpreorder,
		icons.pickup,
		icons.delivery,
		icons.catering,
		icons.coupons,
		icons.offers,
	];
	const IconsNames = [
		"reservation",
		"joinTable",
		"reservation\n&preorder",
		"pickup",
		"delivery",
		"catering",
		"coupons",
		"offers",
	];
	const restaurantData = [
		{
			id: 1,
			name: "Mcdonald's",
			Type: "Middle Eastern, Halal",
			Delivery: "$12",
			Rating: "(5.0)",
			Status: "Open",
			Pricing: "Avg. $20 / person",
			Location: "9220.1 km",
			Feactured: true,
			logo: icons.mac,
			dishImage: images.macDish,
		},
	];
	function renderSlider() {
		return (
			<View
				style={{
					marginTop: 30,
					height: 300,
				}}
			>
				<Text style={{ fontSize: 34, fontWeight: "bold", ...styles.titles }}>
					Discover
				</Text>
				<View
					style={{
						width: "100%",
					}}
				>
					<SliderBox
						style={{
							width: "100%",
							backgroundColor: "white",
						}}
						resizeMode={"contain"}
						images={Images}
						dotColor="#E9D023"
						paginationBoxVerticalPadding={40}
						paginationBoxStyle={{
							bottom: 25,
							right: 55,
							alignSelf: "flex-end",
						}}
					/>
				</View>
			</View>
		);
	}

	function renderCategories() {
		return (
			<View
				style={{
					marginTop: 50,
				}}
			>
				<Text
					style={{
						fontSize: 34,
						fontWeight: "bold",
						...styles.titles,
					}}
				>
					Category
				</Text>
				<View
					style={{
						flexDirection: "row",
						flexWrap: "wrap",
						marginLeft: 10,
						paddingTop: 10,
					}}
				>
					{Icons.map((icon, index) => {
						return (
							<View key={index}>
								<TouchableOpacity
									style={{
										marginLeft: 10,
										width: 100,
										height: 110,
										alignItems: "center",
									}}
								>
									<Image
										source={icon}
										style={{
											marginLeft: 10,
										}}
									></Image>
									<Text style={{ paddingTop: 5, fontSize: 10 }}>
										{IconsNames[index]}
									</Text>
								</TouchableOpacity>
							</View>
						);
					})}
				</View>
			</View>
		);
	}

	function renderRestaurants() {
		const renderItem = ({ item }) => (
			<TouchableOpacity>
				<View
				// style={
				// 	{
				// 		// width: "100%",
				// 		// height: 200,
				// 		// borderRadius: 30,
				// 	}
				// }
				>
					{/* log & dish image */}
					<View>
						<Image
							style={{
								width: "100%",
								height: 200,
							}}
							source={item.dishImage}
							resizeMode="stretch"
						/>
						<Image
							source={icons.featured}
							resizeMode="stretch"
							style={{
								position: "absolute",
								// width: 100,
								height: "50%",
								top: 0,
								right: 0,
							}}
						/>
						<Image
							resizeMode="cover"
							source={item.logo}
							style={{
								width: 50,
								height: 50,
								position: "absolute",
								bottom: 0,
								left: "15%",
								borderRadius: 10,
								borderWidth: 3,
								borderColor: "white",
							}}
						/>
					</View>

					{/* <first row> */}
					<View
						style={{
							flexDirection: "row",
							left: 50,
							alignItems: "center",
							alignContent: "center",
						}}
					>
						<Text style={{ fontSize: 15, fontWeight: "bold" }}>
							{item.name}
						</Text>
						<Image
							source={icons.rate}
							style={{
								marginLeft: "40%",
								height: 20,
								width: 20,

								// tintColor: COLORS.primary,
							}}
						/>
						<Text style={{ fontSize: 15, color: "#E9D023" }}>
							{item.Rating}
						</Text>
						<Text
							style={{
								fontSize: 12,
								paddingLeft: 20,
								color: item.Status == "Open" ? "green" : "red",
								fontWeight: "bold",
							}}
						>
							{item.Status}
						</Text>
					</View>
					<View
						style={{
							flexDirection: "row",
							left: 50,
							alignItems: "center",
							alignContent: "center",
						}}
					></View>
				</View>
			</TouchableOpacity>
		);
		return (
			<View>
				<Text
					style={{
						fontSize: 34,
						fontWeight: "bold",
						...styles.titles,
					}}
				>
					Featured Restaurants
				</Text>
				<FlatList
					data={restaurantData}
					Vetical
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item) => `${item.id}`}
					renderItem={renderItem}
					contentContainerStyle={{
						paddingBottom: 50,
					}}
				></FlatList>
			</View>
		);
	}

	return (
		<View>
			{renderSlider()}
			{renderCategories()}
			{renderRestaurants()}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	titles: {
		marginLeft: 20,
	},
});
