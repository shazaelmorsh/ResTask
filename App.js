import React from "react";
import {
	Image,
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { icons, images } from "./constants";
import { SliderBox } from "react-native-image-slider-box";
import { Dimensions } from "react-native";

var screenWidth = Dimensions.get("window").width; //full width
var width02 = screenWidth - 50;
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
			<View>
				<Text style={styles.titles}>Discover</Text>
				<View>
					<SliderBox
						ImageComponentStyle={{
							width: screenWidth - 10,
							height: 300,
							backgroundColor: "white",
						}}
						resizeMode={"cover"}
						images={Images}
						dotColor="#E9D023"
						paginationBoxVerticalPadding={50}
						paginationBoxStyle={{
							bottom: 0,
							right: 100,
							alignSelf: "flex-end",
						}}
					/>
				</View>
			</View>
		);
	}

	function renderCategories() {
		return (
			<View>
				<Text style={styles.titles}>Category</Text>
				<View
					style={{
						flexDirection: "row",
						flexWrap: "wrap",
						alignContent: "center",
						justifyContent: "center",
					}}
				>
					{Icons.map((icon, index) => {
						return (
							<TouchableOpacity
								key={index}
								style={{
									marginTop: screenWidth / 5 / 5,
									marginLeft: 5,
									marginRight: 5,
									width: screenWidth / 5,
									height: screenWidth / 5,
								}}
							>
								<View
									style={{
										flexDirection: "column",
										alignItems: "center",
										alignContent: "center",
									}}
								>
									<Image source={icon}></Image>
									<Text
										style={{
											paddingTop: 5,
											fontSize: 10,
											textAlign: "center",
										}}
									>
										{IconsNames[index]}
									</Text>
								</View>
							</TouchableOpacity>
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
					width: screenWidth - 30,
					marginBottom: 2,
					marginTop: 5,
					alignSelf: "center",
					alignContent: "center",
					alignItems: "stretch",
					...styles.shadow,
				}}
			>
				{/* log & dish image */}
				<View>
					<Image
						source={item.dishImage}
						resizeMode="cover"
						style={{
							width: "100%",
							height: 200,
						}}
					/>
					<Image
						source={icons.featured}
						style={{
							position: "absolute",
							height: "50%",
							top: -10,
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
				<View style={styles.cardDescription}>
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
						<Text
							style={{
								fontSize: 12,
								color: item.Status == "Open" ? "green" : "red",
								fontWeight: "bold",
								marginLeft: 5,
							}}
						>
							{item.Status}
						</Text>
					</View>
				</View>
				{/* second row */}
				<View style={styles.cardDescription}>
					<Text style={styles.cardText}>{item.Type}</Text>
					<Text style={styles.cardText}>{item.Pricing}</Text>
				</View>
				{/* third row */}
				<View style={styles.cardDescription}>
					<Text style={styles.cardText}>{"Delivery:" + item.Delivery}</Text>
					<Text style={styles.cardText}>{item.Location}</Text>
				</View>
			</TouchableOpacity>
		);
		return (
			<View>
				<Text style={styles.titles}>Featured Restaurants</Text>
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
		<View style={styles.container}>
			{renderSlider()}
			{renderCategories()}
			{renderRestaurants()}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignContent: "center",
		justifyContent: "center",
	},
	titles: {
		color: "#474746",
		fontSize: 24,
		fontWeight: "bold",
		marginLeft: 16,
	},
	shadow: {
		backgroundColor: "white",
		borderRadius: 15,
		elevation: 10,
	},
	cardDescription: {
		flex: 0.1,
		marginLeft: "5%",
		marginRight: "5%",
		marginTop: 5,
		marginBottom: 5,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	cardText: {
		fontSize: 13,
		color: "black",
	},
});
