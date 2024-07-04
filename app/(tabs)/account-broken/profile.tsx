import { Link } from "expo-router";
import { View, Text, Button } from "react-native";

export default function ProfileScreen() {
  return (
    <View>
      <Text>Profile</Text>
      <Link href="/account/other">To Other </Link>
    </View>
  );
}
