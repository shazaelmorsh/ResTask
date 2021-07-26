import React from "react";
import {
	Image,
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { icons, images } from "./constants";
import { SliderBox } from "react-native-image-slider-box";
import { Dimensions } from "react-native";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height
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
					marginTop: 20,
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
			<TouchableOpacity
				style={{
					width: width - 30,
					height: 320,
					marginLeft: 10,
					marginRight: 10,
					paddingBottom: 10,
					paddingLeft: 10,
					justifyContent: "center",
					// ...styles.shadow,
				}}
			>
				{/* log & dish image */}
				<View
					style={{
						width: "100%",
						// height: 200,
					}}
				>
					<Image
						source={item.dishImage}
						resizeMode="cover"
						style={{
							width: "100%",
							height: 200,
							// height: 200,
						}}
					/>
					<Image
						source={icons.featured}
						resizeMode="contain"
						style={{
							position: "absolute",
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
						marginLeft: "15%",
						marginRight: "15%",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<Text
						style={{
							fontSize: 15,
							fontWeight: "bold",
						}}
					>
						{item.name}
					</Text>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Image
							source={icons.rate}
							style={{
								height: 20,
								width: 20,
							}}
						/>
						<Text style={{ fontSize: 15, color: "#E9D023" }}>
							{item.Rating}
						</Text>
					</View>
					<Text
						style={{
							fontSize: 12,
							color: item.Status == "Open" ? "green" : "red",
							fontWeight: "bold",
						}}
					>
						{item.Status}
					</Text>
				</View>
				{/* second row */}
				<View
					style={{
						marginLeft: "10%",
						marginRight: "10%",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<Text style={{ fontSize: 13, color: "black" }}>
						{"Delivery:" + item.Type}
					</Text>
					<Text style={{ fontSize: 13, color: "black" }}>{item.Pricing}</Text>
				</View>
				{/* third row */}
				<View
					style={{
						marginLeft: "10%",
						marginRight: "10%",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<Text style={{ fontSize: 13, color: "black" }}>
						{"Delivery:" + item.Delivery}
					</Text>
					<Text style={{ fontSize: 13, color: "black" }}>{item.Location}</Text>
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
		marginLeft: 16,
	},
	titles: {
		color: "#474746",
		marginLeft: 16,
		marginRight: 16,
	},
	shadow: {
		shadowOffset: { width: 10, height: 10 },
		shadowColor: "black",
		shadowOpacity: 1,
		elevation: 3,
		backgroundColor: "#0000",
		shadowRadius: 50,
		borderRadius: 10,
	},
});
